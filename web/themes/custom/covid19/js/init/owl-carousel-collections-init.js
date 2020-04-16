(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselCollections = {
    attach: function (context, settings) {
      $(context).find('.chs-carousel-collections').once('mtowlCarouselCollectionsInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:2,
            },
            480:{
              items:2,
            },
            768:{
              items:2,
            },
            992:{
              items:2,
            },
            1200:{
              items:4,
            },
            1680:{
              items:4,
            }
          },
          autoplay: drupalSettings.covid19.owlCarouselCollectionsInit.owlCollectionsAutoPlay,
          autoplayTimeout: drupalSettings.covid19.owlCarouselCollectionsInit.owlCollectionsEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
