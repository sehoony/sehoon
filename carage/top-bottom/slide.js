window.onload = function () {
    var pos = 0;
    var len = $('#slide-fade li').length;
    var timer = null
    function play() {
        clearTimeout(timer);
        if (++pos >= len) pos = 0;
        else if (pos < 0) pos = len - 1;
        $('#slide-fade li.active').removeClass('active');
        $('#slide-fade li').eq(pos).addClass('active')
        $('.pos a.active').removeClass('active');
        $('.pos a').eq(pos).addClass('active')
        timer = setTimeout(play, 2000);
    }

    $(document).on('click', 'a', function () {
        if ($(this).hasClass('left')) pos -= 2;
        play();
    });
    timer = setTimeout(play, 2000);

};