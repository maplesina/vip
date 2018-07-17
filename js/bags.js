;
(function($) {
	$(function() {
		var $list = $(".hot-cate-leftbags>ul>li")
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
	});
	$(function  () {
		$(window).on("load",function  () {
			if ($(window).scrollTop()>$(".top-content").offset().top+150) {
				$(".navbar").addClass("shownav")
			}
			else{
				$(".navbar").removeClass("shownav")				
			}
		})
		$(window).scroll(function  () {
			if ($(window).scrollTop()>$(".top-content").offset().top+150) {
				$(".navbar").addClass("shownav")
				
			}else{
				$(".navbar").removeClass("shownav")				
			}
		})
	})
})(jQuery)