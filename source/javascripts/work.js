//= require magnific-popup/dist/jquery.magnific-popup.js

$(document).ready(function() {
  $(".work-body-inner strong").addClass("text-uppercase");
  // $(".work-body-inner ul").addClass("list-inline");
  $(".work-body-inner img").height(30);
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
