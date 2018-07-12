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

// 购物袋
$(".side .shop").on("mouseenter",function(){
    $(".gouwu").show();
})
//当鼠标进入shop的时候gouwu出现，当鼠标离开的时候gouwu隐藏
$(".side .shop").on("mouseleave",function(){
    $(".gouwu").hide();
})
$(".side .gouwu").on("mouseenter",function(){
    $(".gouwu").show();
})
$(".side .gouwu").on("mouseleave",function(){
    $(".gouwu").hide();
})
$(".login").on("mouseenter",function(){
    $(this).parents(".user").css("backgroundColor","#333")
})
// 当浮上右边的图标的时候让他对应的p出来
$(".side i").on("mouseenter",function(){
    $(this).children().css("display","block")
    $(this).children().css("right","40px")
})
$(".side  i").on("mouseleave",function(){
    $(this).children().css("display","none")
    $(this).children().css("right","-60px")
})
$(".side .shop").on("click",function(){
    $(this).children(".head-portrait").css("display","block")
})
$(".side .shop").on("mouseleave",function(){
    $(this).children(".head-portrait").css("display","none")
})


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

//回到顶部
$('#top').click(function () {
    $('html,body').animate({ 
        scrollTop: 0 
    }, 500);
});
