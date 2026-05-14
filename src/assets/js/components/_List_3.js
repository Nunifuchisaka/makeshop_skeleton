export default class {

  // #$el;
  #$li;
  #href;

  constructor(opts) {
    // const self = this;
    // this.#$el = $(opts.el);
    // this.#$li = this.#$el.children();
    this.#$li = $(opts.li);
    this.#href = this.#$li.find('.list_3__img > a').attr('href');

    this.#$li.click(this.#click);

    this.#$li.children('.list_3__category a').click(function(event){
      event.stopPropagation();
    });
  }

  #click = () => {
    window.location.href = this.#href;
  }

}