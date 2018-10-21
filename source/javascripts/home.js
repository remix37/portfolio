//= require particles.js/particles.min.js

$(document).ready(function() {
  particlesJS.load('particles-js', './particles.json', function() {
  });

  var scroll_start = 0;
  var startchange = $('.author');
  var offset = startchange.offset();
  console.log(offset);
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

});
