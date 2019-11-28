$(document).ready(function () {
    $(window).scroll(function () {       
        if ($(document).scrollTop() > 240) {
           $('.header-inner').addClass('navbar-shrink');
           $('.header-inner').addClass('header-type-animation');
           $('.igplus-center').removeClass('aa');
           $('.igplus-center').addClass('bb');
        } else {
           $('.header-inner').removeClass('navbar-shrink');
           $('.igplus-center').addClass('aa');
           $('.igplus-center').removeClass('bb');
        }      
    });

    $('.collapse').collapse();
    $("#menu1").on("hide.bs.collapse", function(){
        $(".main-list > li").addClass('on');
    });
    $("#menu1").on("show.bs.collapse", function(){
        $(".main-list > li").removeClass('on');
    });
});

