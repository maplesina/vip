;
(function($) {
	$(function() {
		var $list = $(".hot-cate-left-cont>ul>li")
		var $listItem = $(".hot-cate-right-cont-wrap")
		var $mgtop = $(".right-cont-inner").height()
		$list.on("click", function() {
			$(this).addClass("active1");
			$(this).find(".left-cont-icon").addClass("active2")
			$(this).siblings().removeClass("active1")
			$(this).siblings().find(".left-cont-icon").removeClass("active2")
			$listItem.stop().animate({
				marginTop: -($mgtop * $(this).index()) + "px"
			}, 200);

		})
	})
})(jQuery)