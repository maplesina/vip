$(function(){
    lxfEndtime();
});

//让导航条固定在顶部
// ;(function($){
//     $(function(ele,){
//         window.scroll(function(){
//             if($(".ele").scroll());
//             console.log($(".ele").scroll());
//         })
//     }(count-down))
// }(window))




//悬浮的红包小窗口的时候显示和隐藏
$(function(){
    $(window).scroll(function(){
        var h = $(window).scrollTop();
        if(h >=230){
            $(".advertisement").css("top","-190px");
        }else if(h == 0){
            $(".advertisement").css("top","0px");
        }
    })
    $(".list-sider-top").on("click",function(){
        $(this).hide();
        $(".advertisement").show();
    })
    $(".advertisement ul li i").on("click",function(){
        $(".advertisement").hide();
        $(".list-sider-top").show();
    })
    $(".hide-bottom").on("click",function(){
        $(this).hide();
        $(".reveal-bottom").show();
        $(".advertisement-bottom .close").show()
    })
    $(".advertisement-bottom .close").on("click",function(){
        $(".reveal-bottom").hide();
        $(".hide-bottom").show();
        $(".advertisement-bottom .close").hide()
    })
})


