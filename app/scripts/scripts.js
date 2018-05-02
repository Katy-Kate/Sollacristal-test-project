//------------------------------- open aside-right and left blocks START

$('.header_nav__item--aside-left').click(function() {
    $('.aside-left').addClass('aside-left--open');

});
$('.header_nav__item--aside-right').click(function() {
    $('.aside-right').addClass('aside-right--open');

});

$('.aside_close--left').click(function() {
    $('.aside-left').removeClass('aside-left--open');

});

$('.aside_close--right').click(function() {
    $('.aside-right').removeClass('aside-right--open');

});
// ---------------------------------open aside-right and left blocks END


// ----------------------------------fixing right block  START
$(document).ready(function() {
    var isDesktop = (function() {
        return !('ontouchstart' in window) // works on most browsers
            || !('onmsgesturechange' in window); // works on ie10
    })();

    window.isDesktop = isDesktop;
    if( isDesktop ){
        var $menu = $(".header");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 140  ) {
                $(".main_right__wrapper").addClass("fixed");
            }
            else if($(this).scrollTop() <= 140 ) {
                $(".main_right__wrapper").removeClass("fixed");
            }
        });
    }
});
// ----------------------------------fixing right block  END