$(document).ready(function(){

	$('.b-4-slider').slick({
		infinite: true,
		speed: 900,
		dots: true
	});

	$('.levels-button').click(function(){
		var block = $(this).attr("href");
		$('.levels-button').parent().removeClass("active");
		$(this).parent().addClass("active");
		$('.levels-tabs-item').animate({'opacity': 0}, 300);
		setTimeout(function(){$('.levels-tabs-item').removeClass("active"); $(block).addClass("active"); $(block).animate({'opacity': 1}, 300);}, 300);
		return false;
	});

});