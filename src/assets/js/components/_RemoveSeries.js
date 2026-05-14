export default class {

  #$el;
  
  constructor(opts) {
    this.#$el = $(opts.el);

    this.#$el.find('a').each(function() {
      const $this = $(this);
      const originalText = $this.text().trim();

      // 1. 「すべてのシリーズ」ではない
      // 2. 末尾が「シリーズ」で終わる
      if (originalText !== 'すべてのシリーズ' && originalText.endsWith('シリーズ')) {
        // 末尾の「シリーズ」を削除（置換）
        const newText = originalText.replace(/シリーズ$/, '');
        $this.text(newText);
      }
    });
  }

}