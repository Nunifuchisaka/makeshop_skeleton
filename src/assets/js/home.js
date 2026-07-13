// import SingleReview from './components/_SingleReview';

$(function() {

  // 
  $('#hoge .list_3').load('/view/category/hoge #main-list > li', function(response, status, xhr) {
    if (status === "error") {
      console.error("読み込みエラーが発生しました: " + xhr.status + " " + xhr.statusText);
    } else {
      $(this).find('li:gt(3)').remove();
    }
  });

  // 新着ユーザーレビュー
  COMMON.$document.on('click', '.singleReview', function() {
    const href = $(this).find('.singleReviewProductImageWrap > a').attr('href');
    window.location.href = href;
  });

});