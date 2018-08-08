$(document).ready(function () {
   $(".nav>li").mouseenter(function () {
       $(this).children(".submenu").stop().slideDown();
   });
    $(".nav>li").mouseleave(function () {
        $(this).children(".submenu").stop().slideUp();
    });

    $(".imgs>img").each(function (i) {
        $(this).css("top","-400px");
    });

    var i=0;
    setInterval(function () {
        $(".imgs>img").eq(i).css("top","0px");
        i++;
        if (i==6){
            i=0;
            $(".imgs>img").each(function (i) {
                $(this).css("top","-400px");
            });
            }
    },2000);
    $(".partner img").click(function () {
        $("#partner_up").addClass("active");
    });
    $("#btn-close").click(function () {
        $("#partner_up").removeClass("active");
    })
});