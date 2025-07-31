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

$(window).on('scroll', function () {
    console.log(window.scrollY);
});

$(window).on('scroll', function () {
    const baseOffsets = [100, 1000];
    const spacing = 30;

    $('.project-info').each(function (projectIndex) {
        const triggerScroll = baseOffsets[projectIndex];
        const children = $(this).children();

        children.each(function (childIndex) {
            const scrollTrigger = triggerScroll + (childIndex * spacing);

            if (window.scrollY >= scrollTrigger) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    });

    $('.project-images').each(function (projectIndex) {
        const triggerScroll = baseOffsets[projectIndex];
        const children = $(this).children();

        children.each(function (childIndex) {
            const scrollTrigger = triggerScroll + (childIndex * spacing);

            if (window.scrollY >= scrollTrigger) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    });
});