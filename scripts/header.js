$(document).on('click', '.header-menu', function(){
    $('.header-menu-link')
        .addClass('show')
        .css('animation', 'slideFadeIn 0.5s ease forwards');
    $('body').css("overflow-y", "hidden");
});

$(document).on('click', '.close-menu', function () {
    $('.header-menu-link').fadeOut(800, function () {
        $(this).removeClass('show').css('display', 'none');
    });
    $('body').css("overflow-y", "auto");
});

$(document).on('click', '.header-menu-link > li > a, .header-menu-scroll > li > a', function () {
    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 2000);

    $('.header-menu-link').fadeOut(300, function () {
        $(this).removeClass('show').css('display', 'none');
    });

    $('body').css("overflow-y", "auto");
});