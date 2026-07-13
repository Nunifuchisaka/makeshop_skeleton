export default class {

  #$el;
  #$input;
  // #max;

  constructor(opts) {
    // const self = this;
    this.#$el = $(opts.el);
    console.log( this.#$el );

    this.#$input = this.#$el.find('input');
    console.log( this.#$input );
    // this.#max = parseInt(this.#$input.attr('max'));

    this.#$el.find('.up').on('click', this.#up);
    this.#$el.find('.down').on('click', this.#down);
  }

  #up = () => {
    let current = parseInt(this.#$input.val()) || 0;
    // if (!isNaN(this.#max) && current >= this.#max) return;
    this.#$input.val(current + 1);
  };

  #down = () => {
    let current = parseInt(this.#$input.val()) || 0;
    if (current <= 1) return;
    this.#$input.val(current - 1);
  };

}
