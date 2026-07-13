# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

makeshop（クリエイターモード）用のECサイトテンプレート。makeshopはlocalにインストールできないため、ビルドしたHTMLを管理画面にコピペし、CSS/JS/画像はgigaplus（`ASSET_PATH`）にアップロードして運用する。

具体的なテンプレートタグは[クリエイターモード タグリファレンス](https://reference.makeshop.jp/creator-mode/contents/common/index.html)を参照。

## コマンド

```
npm start
```

開発監視とBrowserSyncを起動する。非圧縮のHTML・CSS・JSを`dist_uncompressed/`へ出力し、https://localhost:3000で配信する。

```
npm run build
```

lint、非圧縮版ビルド、圧縮版ビルド、成果物検証を順番に実行する。`webpack.config.js`のproduction設定はdevelopment設定に依存させ、CSS生成後に必ず実行する:

1. **developmentモード** → `dist_uncompressed/` に非圧縮のCSS(SCSS)・JS・HTMLを出力。`npm start`ではファイル監視し、BrowserSync（https://localhost:3000、CORS許可付き）が`dist_uncompressed/`を配信する
2. **productionモード** → `dist/` に圧縮済みのJS・HTML、webp変換画像、cssnanoで圧縮したCSS（`dist_uncompressed`からコピー）を出力

テストスイートはない。lintと成果物の存在検証はビルドに統合されている。単体で実行する場合は `npm run lint` / `npm run lint:fix` / `npm run verify:dist`。

`dist/`と`dist_uncompressed/`はコミット対象（成果物を管理画面・gigaplusへ反映するため）。

## アーキテクチャ

### エントリの自動収集
`src/`直下から`glob`で収集する。**アンダースコア始まりのファイル（`_*.ejs`, `_*.scss`, `_*.js`）はパーシャル扱いでエントリにならない。**

- `src/**/*.ejs` → 同名`.html`（HtmlWebpackPluginで生成、`inject: false`）
- `src/**/*.scss` → 同名`.css`（developmentビルドのみ）
- `src/**/*.js` → 同名`.js`（productionビルドのみ、babel + terser。node_modules由来は`assets/js/vendor.js`に分離）

### ディレクトリ
- `src/*.ejs` — 各ページテンプレート（`index.ejs`, `single-product.ejs`など。makeshopのページ種別に対応）
- `src/single-product/_*.ejs` — 商品詳細ページのパーシャル群
- `src/assets/html/` — 共通パーシャル（head, header, footer, nav等）
- `src/assets/css/` — SCSS（base / layout / module / extra / state / tool / animation / makeshop / ukomi に分類）
- `src/assets/js/components/_*.js` — クラス単位のコンポーネント。`common.js`等のエントリからimportして初期化
- `img2webp/` — ここにjpg/pngを置くとproductionビルド時にsharpで同階層に`.webp`（quality 90）を生成

### webpack.config.js冒頭の定数
案件ごとに`BASE_SITE_DATA`（`ASSET_PATH`, `SITE_URL`, `MY_MEMBER_ID`など）を書き換える。これらはtemplate-ejs-loader経由で全EJSにグローバル変数として渡される。

## makeshop固有の注意点

- **`<{...}>`はmakeshopタグ**。EJS内にそのまま書き、HTML圧縮時も`ignoreCustomFragments`で保護される。EJSの`<%- %>`（ビルド時展開）と混在するので区別すること
- **localファイル読み込みの仕組み**: `MY_MEMBER_ID`または`Developer`グループでログイン中のときだけ`LOCAL_PATH`（BrowserSync）のCSS/JSを読み込む条件分岐を各ページの`<head>`に書く（README参照）
- **jQueryはシステムJSに破棄される**（`$.noConflict(true)`される）ため、自前で読み込み直す前提。webpackでは`jquery`を`window.jQuery`のexternalsとして扱う
- 任意カテゴリの商品一覧タグは存在しないため、jQueryの`.load()`でカテゴリページからHTMLを取得して表示する
- グループ一覧の表示は不可。商品一覧でのカテゴリ表示はオリジナルアイコンで代用
- makeshop自体のinclude（`<{$module.xxx}>`）があるのでSSIは使わない

## CSS/画像の扱い

- SCSSのcss-loaderは、ファイル名が`--pc` / `--sp` / `--exc`で終わる画像とルート相対（`/`始まり）のURLを解決しない（＝そのままのパスで出力）。それ以外の画像はdata URIとしてインライン化される
- `assets/css/common.scss`が全ページ共通、ページ別に`home.scss`等を用意
