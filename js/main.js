$(document).ready(function(){
    /* teachers */
    $(function() {
        $(".owl-carousel.owl-carousel-cards").owlCarousel({
            loop: true,
            margin: 25,
            nav: true,
            autoplay: false,
            navText: ["<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>", "<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1366: {
                    items: 3
                }
            }
        });
    });
    /* cards */
    $(function() {
        $(".owl-carousel.owl-carousel-cards-2").owlCarousel({
            loop: true,
            margin: 25,
            nav: true,
            autoplay: false,
            navText: ["<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>", "<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1366: {
                    items: 3
                }
            }
        });
    });
    /* certificate */
    $(function() {
        $(".owl-carousel-certificate.owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            navText: ["<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>", "<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>"],
            responsive: {
                0: {
                    items: 2,
                    margin: 30
                },
                769: {
                    items: 3,
                    margin: 50
                },
                1600: {
                    items: 3,
                    margin: 70
                }
            }
        });
    });
    /* photo */
    $(function() {
        $(".owl-carousel.owl-carousel-photo").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            autoplay: false,
            navText: ["<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>", "<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 25
                },
                1366: {
                    items: 3,
                    margin: 25
                },
                1600: {
                    items: 4
                }
            }
        });
    });
    /* news */
    $(function() {
        $(".owl-carousel.owl-carousel-news").owlCarousel({
            loop: true,
            margin: 25,
            nav: true,
            autoplay: false,
            navText: ["<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>", "<span class='owl-nav_wrapper'><img src='img/shape.svg'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1366: {
                    items: 3
                }
            }
        });
    });


    /* animation leftmenu */
    $('.js-catalog-open').click(function(){
        $('.catalog-double__left, .form_close__left').addClass('animated slideInLeft fastest');
        $('.catalog-double__right').addClass('animated slideInRight fastest');
    });


    /* form */
    $('.txt-input input, .txt-input, .txt-input textarea').on('focusin', function(){
        $(this).addClass('is-active');

    });
    $('.txt-input input, .txt-input, .txt-input textarea').on('focusout', function(){
        if(!$(this).val()){
            $(this).removeClass('is-active');
        }
    });


    /* up */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1500) {
            $('#up').addClass('fixed');
        }
        else {
            $('#up').removeClass('fixed');;
        }
    });
    $('#up').click(function() {
        $('body,html').animate({scrollTop:0},800);
        return false;
    });



    $(".top-menu-mobile_button_right").click(function() {
        $.fancybox.close();
    });
    $(".top-menu-mobile_button_left").click(function() {
        $.fancybox.close();
    });


    /* map */
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 56.0146229235565, lng: 92.84538855000005},
            zoom: 13,
        });
        var image = '../img/marker.svg';
        var beachMarker = new google.maps.Marker({
            position: {lat: 56.0146229235565, lng: 92.84538855000005},
            map: map,
            icon: image
        });
    }

    /* cssmenu */
    $('#cssmenu > ul > li > a').click(function() {
        $('#cssmenu li').removeClass('active');
        $(this).closest('li').addClass('active');
        var checkElement = $(this).next();
        if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            $(this).closest('li').removeClass('active');
            checkElement.slideUp('normal');
        }
        if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#cssmenu ul ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
        }
        if($(this).closest('li').find('ul').children().length == 0) {
            return true;
        } else {
            return false;
        }
    });
});

$(function(){
    $('#contacts, #404, #vacancy, #detail, #streams, #timetable, #teacher, #sale, #callorderForm').validate({
        messages: {
            name: "Поле 'Имя' обязательно к заполнению",
            name1: "Поле 'Имя' обязательно к заполнению",
            phone: "Поле 'Телефон' обязательно к заполнению",
            phone1: "Поле 'Телефон' обязательно к заполнению",
            comment: "Поле 'Сообщение' обязательно к заполнению",
            agree: "Поле 'Соглашение' обязательно к заполнению",
            agree1: "Поле 'Соглашение' обязательно к заполнению",
            time: "Поле 'Удобное время звонка' обязательно к заполнению",
            time1: "Поле 'Удобное время звонка' обязательно к заполнению"
        }
    });
});
$(function(){
    $('#entrycourseForm').validate({
        messages: {
            name1: "Поле 'Имя' обязательно к заполнению",
            phone1: "Поле 'Телефон' обязательно к заполнению",
            comment1: "Поле 'Сообщение' обязательно к заполнению",
            agree1: "Поле 'Соглашение' обязательно к заполнению",
            time1: "Поле 'Удобное время звонка' обязательно к заполнению"
        }
    });
});
$(function(){
    $('#consultationForm').validate({
        messages: {
            name2: "Поле 'Имя' обязательно к заполнению",
            phone2: "Поле 'Телефон' обязательно к заполнению",
            comment2: "Поле 'Сообщение' обязательно к заполнению",
            agree2: "Поле 'Соглашение' обязательно к заполнению",
            time2: "Поле 'Удобное время звонка' обязательно к заполнению"
        }
    });
});

$('.buttonvideo').fancybox({
    toolbar  : false,
    smallBtn : true,
    iframe : {
        preload : false
    }
});