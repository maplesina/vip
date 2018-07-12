;(function($) {
	$(function() {
		var $nav = $(".top-menu"); //得到导航对象
		var $win = $(window); //得到窗口对象
		var $sc = $(document); //得到document文档对象。
		$win.scroll(function() {
			if($sc.scrollTop() >= 108) {
				$nav.addClass("fixednav")
				// .animate({
				//     height: "40"
				// }, 300)
			} else {
				$nav.removeClass("fixednav")
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
})(jQuery)