$(document).ready(function() {
    //scroll
    function scrollHeader(){
        if ($(window).scrollTop() >= 50 || $(window).width() < 576) {
            $('.header').addClass('header_inv');
            $('.header__logo').addClass('header__logo_inv');
            $('.header__link').addClass('header__link_inv');
            $('.burger__span').addClass('burger__span_inv');
            $('.burger').removeClass('active');
        } else {
            $('.header').removeClass('header_inv');
            $('.header__logo').removeClass('header__logo_inv');
            $('.header__link').removeClass('header__link_inv');
            $('.burger__span').removeClass('burger__span_inv');
            $('.burger').removeClass('active');
        }
    }
    scrollHeader();
    $(window).on('scroll', scrollHeader);
    $(window).on('resize', scrollHeader);
    $(window).on('resize', function () {
        burgerDisable();
    });

    //burger
    function burgerDisable(){
        $('.burger').removeClass('active');
        $('.burger__span_top').removeClass('burger__span_rotate');
        $('.burger__span_bottom').removeClass('burger__span_irotate');
        $('.burger__span_middle').css('opacity', '1');
        $('.header__links').removeAttr('style');
    }
    function burgerActive(){
        $('.burger').addClass('active');
        $('.burger__span_top').addClass('burger__span_rotate');
        $('.burger__span_bottom').addClass('burger__span_irotate');
        $('.burger__span_middle').css('opacity', '0');
        $('.header__links').show();
    }

    $('.burger').on('click', function(){
        if($(this).hasClass('active') !== true){
            burgerActive();
        }else{
            burgerDisable();
        }
    });
    //anchors

    $(".header, .banner").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 500);
    });
    //carousels
    $('.portfolio__carousel').owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            }
        }
    });
    $('.review__carousel').owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        items: 1
    });
    $('.partners__carousel').owlCarousel({
        margin: 10,
        loop: true,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            575:{
                items:4
            },
            991:{
                items:5
            }
        }
    });
    $('.blog__carousel').owlCarousel({
        margin: 10,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            991:{
                items:3
            }
        }
    });
});
