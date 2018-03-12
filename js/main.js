$(document).ready(function(){

    var st = $(this).scrollTop();
    $(window).scroll(function(){
        st = $(this).scrollTop();
        if (st > 0) {
            $('.header').css({
                'background-color': '#ffffff',
                'border-bottom': '1px solid #cccccc',
            });
        } else {
            $('.header').css({
                'background-color': 'transparent',
                'border-bottom': '0',
            });
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
    	
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();

});