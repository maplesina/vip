$(function() {
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

//悬浮的红包小窗口的时候显示和隐藏
$(function() {
	$(window).scroll(function() {
		var h = $(window).scrollTop();
		if(h >= 230) {
			$(".advertisement").css("top", "-190px");
		} else if(h == 0) {
			$(".advertisement").css("top", "0px");
		}
	})
	$(".list-sider-top").on("click", function() {
		$(this).hide();
		$(".advertisement").show();
	})
	$(".advertisement ul li i").on("click", function() {
		$(".advertisement").hide();
		$(".list-sider-top").show();
	})
	$(".hide-bottom").on("click", function() {
		$(this).hide();
		$(".reveal-bottom").show();
		$(".advertisement-bottom .close").show()
	})
	$(".advertisement-bottom .close").on("click", function() {
		$(".reveal-bottom").hide();
		$(".hide-bottom").show();
		$(".advertisement-bottom .close").hide()
	})
})

//固定顶部菜单
;
(function($) {
	$(function() {
		var $nav = $(".main .sort"); //得到导航对象
		var $h = $(".main .sort").offset().top; //得到导航的高度
		var $win = $(window); //得到窗口对象
		var $sc = $(document); //得到document文档对象。
		$win.scroll(function() {
			if($sc.scrollTop() > $h) {
				$nav.addClass("fixednav")
				$nav.css("marginTop", "0")
			} else {
				$nav.removeClass("fixednav")
			}
		})
	});

	//list上点击下一页请求的Ajax
	$("#nextagio").on("click", function() {
		var $img = $("#listimg"),
			$newprice = $("#newprice"),
			$old = $("#old"),
			$agio = $("#agio"),
			$info = $("#info")
		$.ajax({

			type: "get",
			url: "http://localhost/vip/api/list.php",
			dataType: "json",
			/*data: {
				newprice: $newprice,
				old: $old,
				agio: $agio,
				info: $info,
				img: $img
			},*/
			success: function(data) {
				var result = data.result;
				var html = "";
				for(var i = 0; i < result.length; i++) {
					html += `
			<li>
                    <a href="Prodocts.html">
                        <img src="${result[i].img}" alt="" id="listimg">
                        <div>
                            <span>￥
                                <big id="newprice">${result[i].newprice}</big>
                            </span>
                            <del id="old">${result[i].old}</del>
                            <span class="agio" id="agio">${result[i].agio}</span>
                        </div>
                        <p id="info"> ${result[i].info}</p>
                    </a>
                </li>
			
			`
				}
				$("#shows>ul").html(html);
			}
		});
	})

})(jQuery);

//点击下一页转换
function doMove(direction) {
	var llength = list.length; //li的个数，用来做边缘判断
	var lwidth = $(list[0]).width(); //每个li的长度，ul每次移动的距离
	var uwidth = llength * lwidth; //ul的总宽度
	//向右按钮
	if(direction == "next") {
		index++;
		if(index < llength) {
			uwidth = lwidth * index;
			ulist.css('left', -uwidth);
			//ulist.animate({left: -uwidth}, 1000);
		} else {
			ulist.css('left', '0px');
			index = 0;
		};
		//向左按钮           
	} else if(direction == "prev") {
		index--;
		if(index < 0) {
			index = llength - 1;
		}
		uwidth = lwidth * index;
		ulist.css('left', -uwidth);
		//ulist.animate({left: -uwidth}, "slow");    
	}
}