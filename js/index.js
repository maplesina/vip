;(function($) {
	$(function() {
		$('.top-menu-hidden').hide();
		var $nav = $(".top-menu"); //得到导航对象
		var $win = $(window); //得到窗口对象
		var $sc = $(document); //得到document文档对象。
		$win.scroll(function() {
			if($sc.scrollTop() >= 108) {
				$('.top-menu-hidden').addClass("fixednav").css("visibility","visible").slideDown();
			} else {
				$('.top-menu-hidden').hide();
			}
		})
	});


})(jQuery);

//电梯导航
;(function($){
	$(function () {
		LiftEffect({
			"control1": ".lift-nav", 						  //侧栏电梯的容器
			"control2": ".lift",                           //需要遍历的电梯的父元素
			"target": [".t1", ".t2", ".t3", ".t4", ".t5", ".t6", ".t7", ".t8", ".t9", ".t10", ".t11"], //监听的内容，注意一定要从小到大输入
			"current": "current" 						  //选中的样式
		});
	})
})(jQuery);

//首页上的banner渐现轮播
;(function($){
	$(function() {
				var n = 0;
				$(".banner-pic").eq(n).css("opacity", 1)//初始化第一张显示
				$(".banner-list-item").eq(n).addClass("active");
				function autoplay() {
					$(".banner-list-item").on("click",function  () {
					var index=$(this).index();
					n=index;
					$(".banner-pic").eq(index).animate({
							opacity: 1
						}, 200)
						$(".banner-list-item").eq(index).addClass("active");
						$(".banner-pic").eq(index).siblings().animate({
							opacity: 0
						}, 200)
						$(".banner-list-item").eq(index).siblings().removeClass("active");
				});	
				if (n==2) {
					n=-1;
				}					
					timer = setInterval(function() {
						n++;
						$(".banner-pic").eq(n).siblings().animate({
							opacity: 0
						}, 300)
						$(".banner-list-item").eq(n).siblings().removeClass("active");
						$(".banner-pic").eq(n).animate({
							opacity: 1
						}, 300)
						$(".banner-list-item").eq(n).addClass("active");
						if(n == 2) {
							n = -1;
						}
					}, 3000)
					
				};
				autoplay();
				$(".banner").on("mouseenter", function() {
					clearInterval(timer);
				});
				$(".banner").on("mouseleave",
					function() {
						autoplay();
					});
			})
})(jQuery)