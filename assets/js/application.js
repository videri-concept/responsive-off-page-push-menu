//button opens menu and toggles other element classes
$('.menu-btn').click(function(){
  $('body').toggleClass('menu-is-open');
  $('.left-side-menu').toggleClass('open');
  $('.menu-overlay').toggleClass('open');
  $('.sub.one, .sub.two').removeClass('open-sub');
  $('.fa-angle-down.one, .fa-angle-down.two').removeClass('flip');
});

//button opens menu and toggles other element classes
$('.menu-closer').click(function(){
  $('body').removeClass('menu-is-open');
  $('.left-side-menu').removeClass('open');
  $('.menu-overlay').removeClass('open');
  $('.sub.one, .sub.two').removeClass('open-sub');
  $('.fa-angle-down.one, .fa-angle-down.two').removeClass('flip');
});

//provide body overlay that, when clicked, closes the menu
$('.menu-overlay').click(function(){
  $('body').removeClass('menu-is-open');
  $('.left-side-menu').removeClass('open');
  $('.sub.one, .sub.two').removeClass('open-sub');
  $('.fa-angle-down.one, .fa-angle-down.two').removeClass('flip');
});

//menu arrow down icon - used as button to expand sub menu list
$('.sub-btn').click(function(){
  $(this).parent().children(".sub").toggleClass('open-sub');
  $(this).children(".fa-angle-down").toggleClass('flip');
});
