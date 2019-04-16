//= jquery.min.js
//= jquery.magnific-popup.min.js
//= PageScroll2id.min.js
//= owl.carousel.min.js

// window.onload = function(){
//   // $("body").toggleClass('opacity');
//   $("#overlayer").delay(1000).fadeOut("slow");
//   overlay.toggle();
//   setTimeout(function() {
//     overlay.toggle();
//   }, 800);
// }

$(".burger-menu").on("click", function() {  
  $(this).toggleClass('is-active');
  $(".top-line").toggleClass('is-active');
  $(".menu-header").toggleClass('is-active');
  $("body").toggleClass('overflow');
})

function heightFooter(){
  var heightFoot = $('.section--footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

$(".scroll-section").mPageScroll2id();

$('.slider-events').owlCarousel({
	loop: false,
	margin: 30,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		721:{
			items:2
		},
		1000:{
			items:3
		}
	}
});
$('.recipes-slide').owlCarousel({
	loop: false,
	margin: 40,
	nav:true,
	responsive:{
		0:{
			items: 1
		},
		560:{
			items:2
		},
		855:{
			items:3,
			margin: 30
		},
		1025:{
			items:4,
			margin: 40
		}
	}
});