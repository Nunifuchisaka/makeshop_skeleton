export default class {

  #$el;
  #$btnEnable;
  #$btnDisable;

  constructor(opts) {
    this.#$el = opts.$el;
    this.#$btnEnable = this.#$el.filter('.is_favorite');
    this.#$btnDisable = this.#$el.filter('.is_not');

    this.#$btnEnable.click(this.#disable);
    this.#$btnDisable.click(this.#enable);
  }

  #enable = () => {
    this.#$btnEnable.removeClass('is_none');
    this.#$btnDisable.addClass('is_none');
  }

  #disable = () => {
    this.#$btnEnable.addClass('is_none');
    this.#$btnDisable.removeClass('is_none');
  }

}