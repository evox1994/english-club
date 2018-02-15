$(document).ready(function(){
	$('.events-tabs-btn').click(function(){
		var block = $(this).attr("href");
		$('.events-tabs-btn').parent().removeClass("active");
		$(this).parent().addClass("active");
		$('.tabs-item').animate({'opacity': 0}, 300);
		setTimeout(function(){$('.tabs-item').removeClass("active"); $(block).addClass("active"); $(block).animate({'opacity': 1}, 300);}, 300);
		return false;
	});
});