const SRC_DIR = './src';
const DIST_DIR = './dist';
const DIST_UNCOMPRESSED_DIR = './dist_uncompressed';

const BASE_SITE_DATA = {
  ASSET_PATH: 'https://gigaplus.makeshop.jp/example/',
  LOCAL_PATH: 'https://localhost:3000/',
  START_PATH: '',
  SITE_URL: 'https://shop.example.co.jp/',
  SITE_NAME: 'サイト名',
  MY_MEMBER_ID: '000000000000'
};

const IMAGE_OPTIMIZATION_CONFIG = {
  IMG_TO_WEBP_SRC_DIR: './img2webp',
  WEBP_QUALITY: 90,
};


// --- 以下、webpackの動作設定 ---
const path = require('path');
const glob = require('glob');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sharp = require('sharp');
const postcss = require('postcss');
const cssnano = require('cssnano');
const SRC_PATH = path.resolve(__dirname, SRC_DIR);
const DIST_PATH = path.resolve(__dirname, DIST_DIR);
const DIST_UNCOMPRESSED_PATH = path.resolve(__dirname, DIST_UNCOMPRESSED_DIR);

/**
 * Webpack設定を生成する関数
 */
const createConfig = ({ name, outputPath, mode, watch = false, serve = false, dependencies = [] }) => {

  const config = {
    name,
    dependencies,
    mode: mode,
    entry: {},
    output: {
      path: outputPath,
      filename: '[name].js',
      assetModuleFilename: 'assets/[name][ext][query]',
    },
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|webp|svg|gif|eot|ttf|woff)$/i,
          type: 'asset/inline',
          exclude: [
            /node_modules/,
            path.resolve(__dirname, IMAGE_OPTIMIZATION_CONFIG.IMG_TO_WEBP_SRC_DIR),
          ],
        },
        {
          test: /\.ejs$/i,
          use: [
            {
              loader: 'html-loader',
              options: {
                sources: false,
                minimize: false
              }
            }, {
              loader: 'template-ejs-loader',
              options: {
                data: BASE_SITE_DATA
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new RemoveEmptyScriptsPlugin(),
    ],
    watch,
    watchOptions: {
      ignored: [
        '**/node_modules/**',
        '**/.DS_Store',
        '**/Thumbs.db',
       path.resolve(__dirname, IMAGE_OPTIMIZATION_CONFIG.IMG_TO_WEBP_SRC_DIR, '**/*.webp'),
      ],
    },
    target: ['web'],
    resolve: { extensions: ['.js'] },
    externals: {
      jquery: 'window.jQuery',
    },
  };

  glob.sync('**/*.ejs', { cwd: SRC_PATH, ignore: '**/_*.ejs' }).forEach(key => {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(SRC_PATH, key),
        filename: key.replace('.ejs', '.html'),
        inject: false,
        minify: mode === 'production' ? {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyJS: true,
          minifyCSS: true,
          processScripts: ['application/ld+json'],
          ignoreCustomFragments: [/<\{[\s\S]*?\}>/], // MakeShopタグを除外
        } : false,
      })
    );
  });

  // JS
  glob.sync('**/*.js', { cwd: SRC_PATH, ignore: '**/_*.js' }).forEach(key => {
    config.entry[key.replace('.js', '')] = path.resolve(SRC_PATH, key);
  });
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  });

  if ('production' == mode) {
    config.optimization = {
      minimize: true,
      minimizer: [ new TerserPlugin({ extractComments: false }) ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'assets/js/vendor',
            chunks: 'all',
            priority: -10,
          }
        }
      }
    };
    
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, IMAGE_OPTIMIZATION_CONFIG.IMG_TO_WEBP_SRC_DIR, '**/*.{jpg,jpeg,png}'),
            to(pathData) {
              const sourceDir = path.dirname(pathData.absoluteFilename);
              const sourceName = path.parse(pathData.absoluteFilename).name;
              return path.join(sourceDir, `${sourceName}.webp`);
            },
            async transform(content) {
              return await sharp(content)
                .webp({ quality: IMAGE_OPTIMIZATION_CONFIG.WEBP_QUALITY })
                .toBuffer();
            },
            noErrorOnMissing: true,
          },
          {
            from: DIST_UNCOMPRESSED_PATH,
            to: DIST_PATH,
            globOptions: {
              ignore: ['**/*.js', '**/*.html', '**/.DS_Store', '**/Thumbs.db'],
            },
            transform: async (content, absoluteFrom) => {
              if (absoluteFrom.endsWith('.css')) {
                return (
                  await postcss([cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })]).process(content, { from: undefined })).css;
              }
              return content;
            },
          },
        ]
      })
    );
  }

  // --- Development モード設定 (dist_uncompressed向け) ---
  if ('development' == mode) {
    if (serve) {
      // BrowserSync
      config.plugins.push(
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          https: true,
          server: {
            baseDir: [DIST_UNCOMPRESSED_DIR],
            middleware: [
              function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
              }
            ]
          },
          socket: {
            domain: 'https://localhost:3000'
          },
          files: [
            DIST_UNCOMPRESSED_DIR + '/**/*.css',
            DIST_UNCOMPRESSED_DIR + '/**/*.js',
            DIST_UNCOMPRESSED_DIR + '/**/*.html',
          ],
          startPath: '/_pagelist.html',
          // open: false,
          notify: false,
        })
      );
    }

    // CSS (SCSS)
    glob.sync('**/*.scss', { cwd: SRC_PATH, ignore: '**/_*.scss' }).forEach(key => {
      config.entry[key.replace('.scss', '.css')] = path.resolve(SRC_PATH, key);
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            url: {
              filter: url => {
                if (/(--pc|--sp|--exc)\.(jpg|jpeg|png|webp|svg|gif)(\?\d+)?$/i.test(url)) {
                  return false;
                }
                if (url.startsWith('/')) {
                  return false;
                }
                return true;
              },
            },
          }
        },
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              outputStyle: 'expanded'
            }
          }
        }
      ],
    });
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name]',
      })
    );
  }

  return config;
};

module.exports = env => {
  const isWatch = Boolean(env && env.watch);
  const shouldServe = Boolean(env && env.serve);

  return [
    // ① 非圧縮版ビルド (CSS, JS, HTML) -> dist_uncompressed
    createConfig({
      name: 'development',
      outputPath: DIST_UNCOMPRESSED_PATH,
      mode: 'development',
      watch: isWatch,
      serve: shouldServe,
    }),
    // ② 圧縮版ビルド (JS, HTML, 画像変換, CSSコピー) -> dist
    createConfig({
      name: 'production',
      dependencies: ['development'],
      outputPath: DIST_PATH,
      mode: 'production',
    }),
  ];
};
