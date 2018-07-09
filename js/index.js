;(function($){
    $(function () {
        var $nav = $(".top-menu"); //得到导航对象
        var $win = $(window); //得到窗口对象
        var $sc = $(document);//得到document文档对象。
        $win.scroll(function () {
            if ($sc.scrollTop() >= 108) {
                $nav.addClass("fixednav")
                // .animate({
                //     height: "40"
                // }, 300)
            } else {
                $nav.removeClass("fixednav")
            }
        })
    });
})(jQuery)