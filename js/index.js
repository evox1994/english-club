$(document).ready(function(){
	$('.main-slider').slick({
		dots: true,
		speed: 900,
	});

	$('.levels-button').click(function(){
		var block = $(this).attr("href");
		$('.levels-button').parent().removeClass("active");
		$(this).parent().addClass("active");
		$('.levels-tabs-item').animate({'opacity': 0}, 300);
		setTimeout(function(){$('.levels-tabs-item').removeClass("active"); $(block).addClass("active"); $(block).animate({'opacity': 1}, 300);}, 300);
		return false;
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

	$('.fancybox').fancybox();
});