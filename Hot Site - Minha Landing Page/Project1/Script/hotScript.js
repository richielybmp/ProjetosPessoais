$(document).ready(function() {
    $(document).scroll(function() {
        var topWindow = $(window).scrollTop();
        if (topWindow > 60) {
            $("header").addClass('header_fixed');
            $("#icone_photo").addClass('icone_photo_menor');
        } else {
            $("header").removeClass('header_fixed');
            $("#icone_photo").removeClass('icone_photo_menor');
        };
    });

    $("nav").mouseover(function() {
        $(".nav-itens").addClass("nav-show");
    });

    $("nav").mouseout(function() {
        $(".nav-itens").removeClass("nav-show");
    });

    $("a.tooltip").mouseover(function() {
        var texto = $(this).attr('data-tooltip');
        $(this).children(".text_tooltip").html(texto);
        $(this).children(".text_tooltip").css('opacity', '1');
    });

    $("a.tooltip").mouseout(function() {
        $(this).children(".text_tooltip").css('opacity', '0');
    });

    $(".text_tooltip").mouseover(function(e) {
        e.stopPropagation();
    });

    var page = $('html, body');
    $('a.tooltip').click(function() {
        page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $('.parallax').parallax();
});