/* loading */
$(window).on('load', function() {
  $('.load').animate({
    'opacity': 0
  }, 1000, function() {
    $(this).hide();
  });
});

$(function() {
  /* 햄버거 메뉴 */
  $('.menu-trigger').each(function (index) {
    var $this = $(this);
    $this.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active-' + (index + 1));
    });
  });
});

/* 햄버거 메뉴 사이드 */
function openSide() {
  $('#side').css({
    'width': '100%',
    'padding': '75px'
  });
  var height = $('#side a').height() - 37.5 + 'px';
  $('#side a').css({
    'opacity': '1',
    'line-height': height
  });
  $('.fixed').css({
    'background-color': 'transparent'
  });
  $('.menu-trigger').attr('onclick', 'closeSide()');
}

function closeSide() {
  $('#side').css({
    'width': '0',
    'padding': '0'
  });
  $('#side a').css({'opacity': '0'});
  $('.fixed').css({
    'background-color': '#fff'
  });
  $('#index .fixed').css({
    'background-color': 'transparent'
  });
  $('.menu-trigger').attr('onclick', 'openSide()');
}