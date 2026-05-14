// import ignite from './components/_ignite';
import List_3 from './components/_List_3';
import RemoveSeries from './components/_RemoveSeries';
import SmoothScroll from './components/_SmoothScroll';

window.COMMON = {};

$(function() {

  COMMON.$document = $(document);


  // ignite();

  $('.nav_3').each(function() {
    new RemoveSeries({
      el: this
    });
  });

  $('.list_3 li').each(function() {
    new List_3({
      li: this
    });
  });

  new SmoothScroll();

});