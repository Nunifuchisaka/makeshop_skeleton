// import $ from 'jquery';

export default class {

  #option;
  #$el;
  #$swiper;
  #$nav;
  #$navItems;
  #$links;
  #$modal;
  #$modalImage;
  #$modalCaption;
  #swiperInstance;
  #remodalInstance;
  #currentIndex = 0;
  #namespace; // ★ 追加：キーボードイベントの重複を防ぐための名前空間

  constructor(opts) {
    const self = this;
    this.#option = $.extend({}, opts);

    this.#$el = $(this.#option.el);
    this.#$swiper = this.#$el.children('.swiper');
    this.#$nav = this.#$el.children('ul');
    this.#$navItems = this.#$nav.children('li');

    this.#$modal = this.#$el.next('.js-carousel-modal'); 
    this.#$modalImage = this.#$modal.find('.js-modal-image');
    this.#$modalCaption = this.#$modal.find('.js-modal-caption');

    this.#$modal.removeAttr('style').addClass('remodal');
    this.#remodalInstance = this.#$modal.remodal({ hashTracking: false });

    // ★ 追加：このインスタンス固有のイベント名前空間を作成
    this.#namespace = `modalKeydown_${Math.random().toString(36).substring(2, 9)}`;

    this.#swiperInstance = new Swiper(this.#$swiper.get(0), {
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      on: {
        slideChange: function(){
          self.#$navItems
            .removeClass("is_active")
            .eq(this.realIndex)
            .addClass("is_active");
        }
      }
    });

    this.#$navItems.click(function(){
      const index = self.#$navItems.index(this);
      self.#swiperInstance.slideToLoop(index);
    });

    this.#$navItems.eq(0).addClass("is_active");

    this.#$links = this.#$swiper.find('.swiper-slide:not(.swiper-slide-duplicate) a');
    
    this.#$el.on('click', '.swiper-slide a', (e) => {
      e.preventDefault();
      const $me = $(e.currentTarget);
      this.#currentIndex = $me.closest('.swiper-slide').data('swiper-slide-index') || 0;
      
      this.#updateModal();
      this.#remodalInstance.open();
    });

    this.#$modal.on('click', '.js-modal-prev', () => this.#prev());
    this.#$modal.on('click', '.js-modal-next', () => this.#next());

    // ==========================================
    // ★ 追加：キーボードイベントの登録と解除
    // ==========================================
    this.#$modal.on('opened', () => {
      // モーダルが開いた時だけキーボード操作を監視する
      $(document).on(`keydown.${this.#namespace}`, this.#handleKeyDown);
    });

    this.#$modal.on('closed', () => {
      // モーダルが閉じたら監視を解除する
      $(document).off(`keydown.${this.#namespace}`);
    });
  }

  // ★ 追加：キーボード操作のハンドラー
  #handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      this.#next();
    } else if (e.key === 'ArrowLeft' || e.keyCode === 37) {
      this.#prev();
    }
  };

  #updateModal = () => {
    const $target = this.#$links.eq(this.#currentIndex);
    const url = $target.data('img');
    const caption = $target.data('caption');

    this.#$modalImage.attr('src', url);
    this.#$modalCaption.text(caption);
    this.#swiperInstance.slideToLoop(this.#currentIndex);
  };

  #next = () => {
    this.#currentIndex = (this.#currentIndex + 1) % this.#$links.length;
    this.#updateModal();
  };

  #prev = () => {
    this.#currentIndex = (this.#currentIndex - 1 + this.#$links.length) % this.#$links.length;
    this.#updateModal();
  };
}
