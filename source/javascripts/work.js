//= require magnific-popup/dist/jquery.magnific-popup.js



$(document).ready(function() {

  $(".tool").text(function(index, text) {
    return text.replace(/\-/g, ' ');
  });

  // $(".work-body-inner strong").addClass("text-uppercase");
  // $(".work-body-inner ul").addClass("list-inline");
  $(".work-body-inner img").addClass("img-responsive");
  $(".work-body-inner img").parent().addClass("image-link");
  $('.image-link').magnificPopup({
    type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: false
		},
		zoom: {
			enabled: true,
			duration: 500,
      easing: 'ease-in-out'
		}
  });
});
