(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselTeamMembers = {
    attach: function (context, settings) {
      $(context).find('.chs-carousel-team-members').once('mtowlCarouselTeamMembersInit').each(function() {
        $(this).owlCarousel({
          items: 2,
          responsive:{
            0:{
              items:1,
            },
            575:{
              items:1,
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
          autoplay: drupalSettings.covid19.owlCarouselTeamMembersInit.owlTeamMembersAutoPlay,
          autoplayTimeout: drupalSettings.covid19.owlCarouselTeamMembersInit.owlTeamMembersEffectTime,
          nav: true,
          dots: false,
          loop: true,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
