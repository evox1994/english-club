$(document).ready(function(){
	if ( $(window).width() > 1280 ) {
		$('.b-1 .b-block').height( $(window).height() - 128 );
	} else {
		$('.b-1 .b-block').height( 'auto' );
	}
	$(window).resize(function(){
		if ( $(window).width() > 1280 ) {
			$('.b-1 .b-block').height( $(window).height() - 128 );
		} else {
			$('.b-1 .b-block').height( 'auto' );
		}
	});
});