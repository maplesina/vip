;
(function($) {
	
	$(function() {
		//	列表切换
//		liTab($(".hot-cate-left-cont>ul>li"), $(".right-cont-inner"));
		var timer;
		var n=0;
		//		初始化
		$(".hot-cate-left-cont>ul>li").eq(0).addClass("active");
		$(".right-cont-inner").eq(0).css("display", "block");
		
		$(".hot-cate-left-cont>ul>li").on("click",function  () {
			console.log($(this).index());
			n=$(this).index();
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			$(".right-cont-inner").eq($(this).index()).css("display","block")
			$(".right-cont-inner").eq($(this).index()).siblings().css("display","none")
		})
		
		function autoclick () {
			timer = setInterval(function() {
			n++;
			console.log(n)
			$(".hot-cate-left-cont>ul>li").eq(n).click();
			if (n==7) {
				n=-1;
			}
		}, 3000)
		}
		autoclick();
		$(".hot-cate-wrap").on("mouseenter",function  () {
			clearInterval(timer);
		})
		$(".hot-cate-wrap").on("mouseleave",function  () {
			autoclick();
		})
	});
})(jQuery);