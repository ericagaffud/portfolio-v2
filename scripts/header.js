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
    console.log("Y", window.scrollY);
});

$(window).on('wheel', function (e) {
    const delta = e.originalEvent.deltaY;

    console.log("Delta", delta);
    if (window.scrollY > 3600 && window.scrollY < 3900) {
        if (delta < 0) {
            $('.about-spacer').css("height", "800px");
        }
    }
});

$(window).on('scroll', function () {
    const baseOffsets = [400, 1400];
    const aboutBaseOffsets = [3000, 3300, 3600, 3900]
    const spacing = 30;
    const aboutSections = $('.about-me');

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

     aboutSections.each(function (index) {
        const triggerScroll = aboutBaseOffsets[index];
        const triggerStart = triggerScroll + (index * spacing);
        const triggerEnd = triggerScroll + ((index + 1) * spacing);

        if (window.scrollY >= triggerStart && window.scrollY < triggerEnd) {

            $(this).addClass('active').removeClass('prev');

            aboutSections.slice(0, index).addClass('prev').removeClass('active');
            
            aboutSections.slice(index + 1).removeClass('active prev');
        }
    });
});