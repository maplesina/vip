;
(function($) {
	$(function() {
		var n = 0;
		$(".agree-txt").on("click", function() {
			if(n % 2 == 0) {
				$(".agree-icon").css("background-position", "-24px 0");
				n++;
			} else {
				$(".agree-icon").css("background-position", "-24px -21px");
				n++;
			}
		});
	})
})(jQuery)