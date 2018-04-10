// This is where it all goes :)

//= require jquery/dist/jquery.min.js
//= require bootstrap-sass/assets/javascripts/bootstrap.min.js
//= require vegas/index.js

$(function() {

  // Vegas
  $("#slide").vegas({
      slides: [
        { src: "../images/img-cover-1.png" },
        { src: "../images/img-cover-2.png" }
      ]
  });

  // Scroll
  // $('.js-scrollTo').on('click', function() { // Au clic sur un élément
  // 	var page = $(this).attr('href'); // Page cible
  //   $('html, body').animate( { scrollTop: $(page).offset().top }, 750);
  // 	return false;
  // });

  // Carousel
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:3
  //         },
  //         1000:{
  //             items:5
  //         }
  //     }
  // })

});
