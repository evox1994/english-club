$(document).ready(function(){

	$('.b-2-slider').slick({
		speed: 900,
		dots: true
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

});