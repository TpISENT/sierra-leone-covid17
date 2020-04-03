jQuery(document).ready(function ($) {
  

  $.fn.chs_init = function () {
    let target = $('.chs-mobile-menu-widget chs-input');
    $.fn.chs_setDirtyness(target);
    $.fn.chs_toggle();
  };

  $.fn.chs_setDirtyness = function (target) {
    if (target.value && target.value.length > 0) {
      $('.chs-mobile-menu-widget').addClass('chs-input-dirty');
    } else {
      $('.chs-mobile-menu-widget').removeClass('chs-input-dirty');
    }
  }

  $.fn.chs_toggle = function () {
    if ($(window).scrollTop() != 0) {
      $('.chs-mobile-menu-widget').addClass('show');
    } else {
      $('.chs-mobile-menu-widget').removeClass('show');
    }
  }

  $.fn.chs_init();

  $('.chs-mobile-menu-widget .chs-menu-button').on('click',
    function () {
      $('.chs-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').addClass('chs-noscroll');
      $('.chs-mobile-menu-overlay .sf-accordion').addClass('sf-expanded').removeClass('sf-hidden');
    });

  $('.chs-mobile-menu-overlay').on('dblclick',
    function () {
      $('.chs-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('chs-noscroll');
    });

  $('.chs-mobile-menu-widget .chs-input').keyup(function (event) {
    
    $.fn.chs_setDirtyness(event.target);
  });

  $('.chs-mobile-menu-widget .chs-clear-icon').on('click',
    function () {
      $('.chs-mobile-menu-widget .chs-input').val('').keyup();
    });

  $('.chs-mobile-menu-overlay .chs-dismiss-button.chs-button').on('click',
    function () {
      $('.chs-mobile-menu-overlay').fadeToggle('fast', 'linear');
      $('body').removeClass('chs-noscroll');
    });

  $(window).scroll(function () {
    $.fn.chs_toggle();
  });
}); 