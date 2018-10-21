//= require particles.js/particles.min.js
//= require gsap/src/minified/TweenMax.min.js

$(document).ready(function() {
  particlesJS.load('particles-js', './particles.json', function() {
  });

  var scroll_start = 0;
  var startchange = $('.author');
  var offset = startchange.offset();
  if (startchange.length){
      $(document).scroll(function() {
          scroll_start = $(document).scrollTop();
          if(scroll_start > offset.top - 200) {
              $(".navbar").removeClass("navbar-rr");
          } else {
              $(".navbar").addClass("navbar-rr");
          }
      });
  }

  function animation(){

    var tl = new TimelineLite();

    tl.to($('.particles-transition'), 0.5, {
      height : '40vh',
      'min-height': '256px',
      ease:Power4.easeIn
  	});

    tl.from($('.particles'), 0.1, {
      opacity : 0,
  	});


    tl.to($('.particles-transition'), 0.5, {
      transform : 'scaleY(0)',
      display: 'none',
      ease:Power4.easeOut
    });

    tl.from($('.author'), 1, {
      transform : 'translateY(75px)',
      ease:Power4.easeInOut
    }, "-=0.6");

    tl.from($('.post'), 1, {
      opacity : 0,
      transform : 'translateY(-25px)',
      ease:Power4.easeInOut
    }, "-=0.6");

    tl.from($('.paragraph'), 1, {
      // opacity : 0,
      'padding-top' : 0,
      'padding-bottom' : 0,
      height : 0,
      // transform : 'translateY(-25px)',
      ease:Power4.easeInOut
    }, "-=0.8");

    tl.staggerFrom($('.paragraph').find('p'), 1, {
      opacity : 0,
    }, 0.3, "-=0.6");

    tl.from($('.localisation .map'), 1, {
      opacity : 0,
      ease:Power4.easeInOut
    }, "-=0.8");

    tl.from($('.localisation .icons-social li'), 1, {
      opacity : 0,
      ease:Power4.easeInOut
    }, "-=0.8");

    tl.from($('.scroll'), 1, {
      opacity : 0,
      transform : 'translateY(-75px)',
      ease:Power4.easeInOut
    }, "-=0.8");

  }

  animation();

});
