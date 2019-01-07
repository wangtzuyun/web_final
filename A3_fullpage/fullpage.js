$(function () {
    var winheight = $(window).height();
    $('section').css({
        'height': ((winheight)) + 'px'
    });

    // Now bind the event to the desired element
    $('section').on('mousewheel', function (e) {
        e.preventDefault();
        if (e.originalEvent.wheelDelta < 0) {
            if (!$(this).is(':last-child'))
                $('body').stop().animate({
                    scrollTop: $(this).next().offset().top
                }, '500', 'swing');
        } else {
            if (!$(this).is(':first-child')) {
                $('body').stop().animate({
                    scrollTop: $(this).prev().offset().top
                }, '500', 'swing');
            }
        }
    });


    var n = $("section").length;
    var current = 0;
    console.log(n);


    //        e.preventDefault();
    $(document).keydown(function (e) {
        var winpos = $(window).scrollTop();
        var winheight = $(window).height();
        for (i = 0; i < n; i++) {
            if (i * winheight <= winpos && winpos < (i+1)*winheight) {
                current = i;
            }
        }
        console.log(current);
        $('section:eq('+current+')').addClass('current');
        if (e.keyCode == 40 || e.keyCode == 32 || e.keyCode == 34) {
            console.log('down');
            if (current < n){
                var $current = $('section.current');
                var $next = $current.next();
                $('body').stop().animate({
                    scrollTop: $next.offset().top
                }, '500', 'swing');
                $current.removeClass('current');
                $next.addClass('current');
            }
        }
        if (e.keyCode == 38 || e.keyCode == 33) {
            console.log('up');
            if (current>0) {
                var $current = $('section.current');
                var $prev = $current.prev();

                $('body').stop().animate({
                    scrollTop: $prev.offset().top
                }, '500', 'swing');
                $current.removeClass('current');
                $prev.addClass('current');
            }
        }
    });


    $(window).resize(function () { // On resize
        $('section').css({
            'height': (($(window).height())) + 'px'
        });
    });



});