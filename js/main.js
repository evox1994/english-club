$(document).ready(function(){

    var st = $(this).scrollTop();
    $(window).scroll(function(){
        st = $(this).scrollTop();
        if (st > 0) {
            $('.header').css({
                'background-color': '#ffffff',
                'border-bottom': '1px solid #cccccc',
            });
            if ( $(window).width() > 1280 ) {
                $('.header-logo').width(151);
                $('.header-test').css('display','inline-block');
                $('.header-interview').css('display','inline-block');
                $('.header-nav-button').css('font-size','14px');
                $('.header-tel-wrap').css({
                    'font-size': '14px',
                    'width': '181px',
                });
                $('.header-nav-wrap').width(181);
            }
        } else {
            $('.header').css({
                'background-color': 'transparent',
                'border-bottom': '0',
            });
            if ( $(window).width() > 1280 ) {
                $('.header-logo').width(290);
                $('.header-test').css('display','none');
                $('.header-interview').css('display','none');
                $('.header-nav-button').css('font-size','16px');
                $('.header-tel-wrap').css({
                    'font-size': '18px',
                    'width': '232px',
                });
                $('.header-nav-wrap').width(232);
            }
        }
    });

    $(window).resize(function(){
        if ( $(window).width() < 1280 ) {
            $('.header-logo').width(200);
            $('.header-test').css('display','none');
            $('.header-interview').css('display','none');
            $('.header-nav-button').css('font-size','16px');
            $('.header-tel-wrap').css({
                'font-size': '16px',
                'width': '240px',
            });
            $('.header-nav-wrap').width(240);
        }
    });

    $('.header-nav-button').click(function(){
        if ( $('.header-menu').hasClass("active") ) {
            $('.header-menu').removeClass("active");
        } else {
            $('.header-menu').addClass("active");
        }
    });

    $('#popup-test-1 .button').click(function(){
        $.fancybox.close();
        return false;
    });
    $('#popup-test-2 .button').click(function(){
        $.fancybox.close();
        return false;
    });
    $('.answer span').click(function(){
        $('.answer span').removeClass("active");
        $(this).addClass("active");
    });

});