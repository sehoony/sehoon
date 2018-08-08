window.onload = function () {
    var pos = 0;
    var len = $('#slide li').length;
    var timer = 0;

    function play() {
        clearTimeout(timer);
        if (++pos >= len) pos = 0;
        else if (pos < 0) pos = len - 1;
        $('#slide ul').css('margin-left', -pos * 100 + '%')
        $('.pos a.active').removeClass('active')
        $('.pos a').eq(pos).addClass('active')
    }

    $(document).on('click', 'a', function () {
        if ($(this).hasClass('left')) pos -= 2;
        play();
    });
    setInterval(play, 2000);

}