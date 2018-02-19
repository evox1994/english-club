$(document).ready(function(){

	$('.benefits-slider').slick({
		speed: 900,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2
				},
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.b-6-slider').slick({
		infinite: true,
		speed: 900,
		dots: true
	});

	$('.reviews-slider').slick({
		speed: 900,
		slidesToShow: 2,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 1}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				dots: true}
			}
		]
	});

	$('.b-5-slider').slick({
		speed: 900,
		slidesToShow: 2,
		responsive: [{
			breakpoint: 1280,
			settings: {
				slidesToShow: 1}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				dots: true}
			}
		]
	});

});