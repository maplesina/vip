;(function($) {
	var divs = $(".tab-rig>div");
	var lis = $(".center-subnav li");
	var len = lis.length;

	$(lis).on("click", function() {

		// 获取点击li对应索引的div    将其显示出来    将除它之外的所有div隐藏
		$(divs).eq($(this).index()).css("display", "block").siblings("div").css("display", "none");
	})
	//点击加减号的实现
	var n = 0,
	m=0,
	j=0;
	$(".list-item1").on("click", function() {
		n = n + 1;
		if(n % 2) {
			$(this).css("background-position-y", "-33px");
			$(this).parent().siblings().css("display","none");
		} else {
			$(this).css("background-position-y", "-49px")
			$(this).parent().siblings().css("display","block");
		}
	})
	$(".list-item2").on("click", function() {
		m= m + 1;
		if(m % 2) {
			$(this).css("background-position-y", "-33px");
			$(this).parent().siblings().css("display","none");
		} else {
			$(this).css("background-position-y", "-49px")
			$(this).parent().siblings().css("display","block");
		}
	})
	$(".list-item3").on("click", function() {
		j= j + 1;
		if(j % 2) {
			$(this).css("background-position-y", "-33px");
			$(this).parent().siblings().css("display","none");
		} else {
			$(this).css("background-position-y", "-49px")
			$(this).parent().siblings().css("display","block");
		}
	})
}(jQuery));


