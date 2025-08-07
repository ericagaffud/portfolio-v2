$(window).on('scroll', function () {
    console.log("Y", window.scrollY);
});

$(window).on('scroll', function () {
    const scrollY = window.scrollY;
    const baseOffsets = [400, 1400];
    const aboutBaseOffsets = [3000, 3300, 3600, 3900]
    const spacing = 30;
    const aboutSections = $('.about-me');

    $('.project-info').each(function (projectIndex) {
        const triggerScroll = baseOffsets[projectIndex];
        const children = $(this).children();

        children.each(function (childIndex) {
            const scrollTrigger = triggerScroll + (childIndex * spacing);

            if (scrollY >= scrollTrigger) {
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

            if (scrollY >= scrollTrigger) {
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

        if (scrollY >= triggerStart && scrollY < triggerEnd) {

            $(this).addClass('active').removeClass('prev');

            aboutSections.slice(0, index).addClass('prev').removeClass('active');
            
            aboutSections.slice(index + 1).removeClass('active prev');
        }
    });

    if (scrollY >= 4200) {
        $('.about-section').css("position", "relative");
    } else {
        $('.about-section').css("position", "sticky");
    }

    const $items = $('.header-menu-scroll > li > a');
    const thresholds = [0, 2400, 5000];
    let activeIndex = -1;

    thresholds.forEach((threshold, index) => {
        if (scrollY >= threshold) {
            activeIndex = index;
        }
    });

    $items.each(function(index) {
        const $item = $(this);
        if (index <= activeIndex) {
            $item.css("display", "block");
        } else {
            $item.css("display", "none");
        }

        $item.css("color", index === activeIndex ? "var(--primary-color)" : "#fff");
    });
});