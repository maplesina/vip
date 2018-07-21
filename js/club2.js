// 圆盘等分
// window.onload = function () {
//     [ ].slice.call($(".luck ul li"),0).forEach(function(item,i) {
//         item.style.backgroundColor = '#' + (~~(Math.random() * (1 << 2))).toString(16);
//         item.style.transform = 'rotate(' + 360 / 8 * (i + 1) + 'deg)skewX(45deg)';
//     })
// }

//中奖名单
function autoScroll() { 
    $(".winning").find("ul").animate({ 
        marginTop: "-30px" 
    }, 1000, function() { 
        $(this).css({marginTop: "0px"}).find("li:first").appendTo(this); 
    }) 
} 
$(function() { 
    var scroll = setInterval('autoScroll(".winning")', 1500); 
    $(".winning").hover(function() { 
        console.log("aaa"); 
        clearInterval(scroll); 
    }, function() { 
        scroll = setInterval('autoScroll(".winning")', 1500); 
    }); 
});