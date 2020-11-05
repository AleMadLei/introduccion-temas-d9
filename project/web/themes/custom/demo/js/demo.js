(function ($) {

  'use strict';

  Drupal.behaviors.inicializar = {
    attach: function (context, settings) {

      // Con error.
/*      $('.field--name-field-imagen').each(function () {
        console.log ('con error');
        var slider = $('.field__items', this);
        slider.css({padding: Math.random() * 100});
        slider.slick();
      });*/

      // Sin error.
      $('.field--name-field-imagen', context).once('inicializado').each(function () {
        console.log('sin error');
        var slider = $('.field__items', this);
        slider.css({padding: Math.random() * 100});
        slider.slick();
      });
    }
  }

}(jQuery))
