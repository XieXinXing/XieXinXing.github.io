// reference: https://fancyapps.com/fancybox/3/docs/
$(document).ready(function() {
    $('img').each(function() {
        if ($(this).parent().hasClass('fancybox')) return;
        if ($(this).hasClass('nofancybox')) return;
        var alt = this.alt;
        $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" data-fancybox="gallery"' + ' data-caption="' + alt + '" class="fancybox"></a>');
    });
    $(this).find('.fancybox').each(function(){
        $(this).attr('rel', 'article');
    });
});
$(document).ready(function() {
    $('[data-fancybox=gallery]').fancybox({
        buttons : [
          'zoom',
          //'share',
          'slideShow',
          'fullScreen',
          //'download',
          'thumbs',
          'close'
        ],
        // Transition effect between slides
        //
        // Possible values:
        //   false            - disable
        //   "fade'
        //   "slide'
        //   "circular'
        //   "tube'
        //   "zoom-in-out'
        //   "rotate'
        //
        transitionEffect: "slide",
    });
});

// Caption
  // $('.content').each(function(i) {
  //   $(this).find('img').each(function() {
  //     if (!$(this).hasClass('nofancybox')) {
  //       var alt = this.alt;
  //       if (alt) {
  //         $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + i + '" />');
  //       } else {
  //         $(this).wrap('<a href="' + this.src + '" class="fancybox" rel="gallery' + i + '" />');
  //       }
  //     }
  //   });
  // });