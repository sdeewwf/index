$(document).ready(function() {
    /* simplebar */
    new SimpleBar($('.search-modal')[0]);
    new SimpleBar($('.modal-catalog')[0]);

    /*  basket */
    $('.catalog-modal .form_close--catalog').click(function () {
        $('.catalog-double__left, .form_close__left').addClass('animated slideOutLeft fastest');
        $('.catalog-double__right').addClass('animated slideOutRight fastest');
        setTimeout(function () {
            $('.catalog-double__left, .form_close__left').removeClass('animated slideOutLeft fastest');
            $('.catalog-double__right').removeClass('animated slideOutRight fastest');
            $.fancybox.close();
            return false;
        }, 250);
    });

    /* Mask-Input */
    $(function () {
        $.mask.definitions['~'] = '[1-79]';
        $(".phone").mask("+7 (~99) 999-99-99");
    });
});


$(document).ready(function() {
    $('.phone').on('focusout', function(){
        var chars = $(this).val();
        var number = chars.match( /\d/g );
        number = number ? number = number.length : 0;
        if(number < 11){
            $(this).removeClass('is-active');
        }
    });
    /* validte */
    $('.up-button').click(function() {
        $('body,html').animate({scrollTop:0},800);
        return false;
    });
    $('.form_close__btn').click(function() {
        $.fancybox.close();
        return false;
    });
    $('.menu_click').click(function(){
        if($(this).hasClass('menu-active')){
            $(this).removeClass('menu-active');
        }else{
            $(this).addClass('menu-active');
        }
        $('.form_close__btn').fadeToggle();
        $('.menu_click svg').fadeToggle();
        $('.menu__category').fadeToggle();
    });
});


/* fade input */
$(document).ready(function(){
    $('.txt-input .input-clear').click(function(){
        $(this).siblings('.txt-input__field').val('');
        $(this).siblings('.txt-input__field').removeClass('is-active');
        $(this).siblings('.txt-input__field').removeClass('parsley-success');
        $(this).parents('.txt-input').removeClass('is-active');
        return false;
    });
    $('.txt-input input, .txt-input, .txt-input textarea').on('focusin', function(){
        $(this).addClass('is-active');

    });

    $('.txt-input input, .txt-input, .txt-input textarea').on('focusout', function(){
        if(!$(this).val()){
            $(this).removeClass('is-active');
        }
    });
});

