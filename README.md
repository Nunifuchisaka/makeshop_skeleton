# Makeshop Skeleton

[ログインページ](https://console.makeshop.jp/login)  


## 開発について

* makeshopはlocalにインストールできません。
* CSVのエクスポートとインポートが正常に動作しない場合があります。
* 具体的なタグは[クリエイターモード タグリファレンス](https://reference.makeshop.jp/creator-mode/contents/common/index.html)を参照ください。

webpackは以下のコマンドで実行してください。
```
npm start
```

### localのファイルを読み込む
特定のメンバーIDまたはメンバーグループ名で条件分岐することでlocalのCSSやJSを読み込ませることができます。  
また、localのときだけ**BrowserSync**が動くようにscriptを埋め込みます。
```
<{if <%- MY_MEMBER_ID %> == $member.id || 'Developer' == $member.group_name}>
<link rel="stylesheet" href="<%- LOCAL_PATH %>assets/css/common.css">
<script id="__bs_script__">
document.write("<script async src='<%- LOCAL_PATH %>browser-sync/browser-sync-client.js?v=2.29.1'><\/script>".replace("HOST", location.hostname));
</script>
<{else}>
<link rel="stylesheet" href="<%- ASSET_PATH %>assets/css/common.css">
<{/if}>
```

### webpackでejsにグローバル定数を設定する
LOCAL_PATHやASSET_PATHは定数にしておきます。
また、全ページ共通で使えるはずの変数（$shop.nameなど）が空になることがあるので、ejsで定数を入れておくという手段もあります。
```
const BASE_SITE_DATA = {
  ASSET_PATH: 'https://gigaplus.makeshop.jp/example/',
  LOCAL_PATH: 'https://localhost:3000/',
  START_PATH: '',
  SITE_URL: 'https://shop.example.co.jp/',
  SITE_NAME: 'サイト名',
  MY_MEMBER_ID: '000000000000'
};
```
```
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
```

### 任意のカテゴリの商品一覧を表示
任意のカテゴリの商品一覧を取得することができません。
JavaScriptでカテゴリページからHTMLを取得して表示させます。
```
$('#hoge .list_3').load(
  '/view/category/hoge #main-list > li',
  function(response, status, xhr) {
    if ("error" === status) {
      console.error("読み込みエラーが発生しました: " + xhr.status + " " + xhr.statusText);
    } else {
      // 不要なら数を減らす
      // 4番目以降のliを削除する
      $(this).find('li:gt(3)').remove();
    }
  }
);
```

### HtmlWebpackPlugin
HtmlWebpackPluginではMakeShopタグを除外します。
```
new HtmlWebpackPlugin({
  template: path.resolve(SRC_PATH, key),
  filename: key.replace('.ejs', '.html'),
  inject: false,
  // productionモードのときのみ圧縮
  minify: 'production' === mode ? {
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
```

### jQueryは破棄される
システムがjQueryを読み込みんでいますが、すぐに
システムが書き出すJS（system-00-0-00-xxx.js）でjQueryが破棄されます。
```
var $jQueryMakeShop = $.noConflict(true);

$jQueryMakeShop = null;
```
新たにjQueryを使いたい場合は読み込み直してください。

### 商品一覧でカテゴリを一覧表示できない
商品アイコンのオリジナルアイコンで代用できます。

### その他
* グループの一覧を表示することはできません
* HTMLは管理画面にコピペします
* Makeshop自体のincludeがあるのでSSIは使用しません
