//详情页关于我们的tab切换
;(function(){
    var divs=document.querySelectorAll(".about-imgtab");
var lis=document.querySelectorAll(".about-img li i");
var len=lis.length;
for(var i=0;i<len;i++){
    lis[i].index = i;
    lis[i].onclick=function(){
        for(var j=0;j<len;j++){
            lis[j].className="";
            divs[j].className="";
        }
        this.className="active";
        divs[this.index].className="about-imgtab active"
    }
}

}());
// 固定导航
;(function($) {
	$(function() {
		var $nav = $(".nav-pr"); //得到导航对象
		var $win = $(window); //得到窗口对象
		var $sc = $(document); //得到document文档对象。
		$win.scroll(function() {
			if($sc.scrollTop() >= 1085) {
				$nav.addClass("fixednav")
				$($nav).css("display","block");
			} else {
                $nav.removeClass("fixednav")
                $($nav).css("display","none");
			}
		})
	});
})(jQuery);


//放大镜效果
$(function(){
    $(".sampleimage").zoomio();
})

//商品详情的tab切换
;(function(){
    var divs=document.querySelectorAll(".product-list>div");
    var lis=document.querySelectorAll(".product-nav li");
    
    var len=lis.length;
    
    $(lis).on("click",function(){
        // 获取点击的li的索引
        // 当li的索引为0时
        if($(this).index()==0){
            // 将所有的div显示出来   display:block;
            $(divs).css("display","block");
        }else{
            // 获取点击li对应索引的div    将其显示出来    将除它之外的所有div隐藏
            $(divs).eq($(this).index()).css("display","block").siblings("div").css("display","none");
        }
        // 将被点击的li改变成激活状态
        $(this).addClass("active-tab").siblings("li").removeClass("active-tab");
       
    })

}());

