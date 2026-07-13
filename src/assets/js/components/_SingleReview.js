export default class {

  #$li;
  #href;

  constructor(opts) {
    this.#$li = $(opts.li);
    this.#href = this.#$li.find('.singleReviewProductImageWrap > a').attr('href');

    this.#$li.click(this.#click);
  }

  #click = () => {
    console.count('click');
    window.location.href = this.#href;
  };

}
