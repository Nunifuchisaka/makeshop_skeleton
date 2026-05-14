import Btn_Favorite from './components/_Btn_Favorite.js';
import Carousel_2 from './components/_Carousel_2.js';
import Quantity from './components/_Quantity.js';

$(function() {

  // 
  $('.carousel_2').each(function(){
    new Carousel_2({
      el: this
    });
  });


  // 
  new Swiper('.carousel_3__inner', {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 3,
      }
    }
  });


  // 
  new Swiper('.carousel_1__inner', {
    loop: true,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false, 
    slidesPerView: 1,
    // modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      enabled: false
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    }
  });


  // 数量
  $('.js_quantity').each(function() {
    new Quantity({
      el: this
    });
  });


  // お気に入りに追加ボタン
  new Btn_Favorite({
    $el: $('.btn-favorite')
  });

});