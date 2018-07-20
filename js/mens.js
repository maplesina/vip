var obj=$(".lxftime span");
var err=$(".lxftime");
function lxfEndtime() {
	var s1 = "2018/8/1";
	var endtime = new Date(s1);
	var nowtime = new Date(); //今天的日期(毫秒值)
	var youtime = endtime - nowtime; //还有多久(毫秒值)
	var seconds = youtime / 1000;
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var CDay = days;
	var CHour = hours % 24;
	var CMinute = minutes % 60;
	var CSecond = Math.floor(seconds % 60); //"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
	if(endtime <= nowtime) {
		err.html("<span>活动已经结束</span>") //如果结束日期小于当前日期就提示过期啦
		clearInterval(m1);
	} else {
		obj[1].innerHTML = CDay;
		obj[3].innerHTML=CHour;
		obj[5].innerHTML = CMinute;
		obj[7].innerHTML = CSecond;
	}
	
};
lxfEndtime();
m1= setInterval(lxfEndtime, 1000);


(function($) {
	
	$(function  () {
		$(window).on("load",function  () {
			if ($(window).scrollTop()>175) {
				$(".mst-nav-global").addClass("fixsidenav")
			}
			else{
				$(".mst-nav-global").removeClass("fixsidenav")				
			}
		})
		$(window).scroll(function  () {
			if ($(window).scrollTop()>175) {
				$(".mst-nav-global").addClass("fixsidenav")
				
			}else{
				$(".mst-nav-global").removeClass("fixsidenav")		
			}
		})
		$(".mst-ng-top").on("click",function  () {
			$(window).scrollTop(0)
		})
	})
})(jQuery)

//电梯导航部分
;(function($){
	$(function () {
		LiftEffect({
			"control1": ".mst-nav", 						  //侧栏电梯的容器
			"control2": ".mst-nav-list",                           //需要遍历的电梯的父元素
			"target": [".t1", ".t2", ".t3", ".t4"], //监听的内容，注意一定要从小到大输入
			"current": "current" 						  //选中的样式
		});
	})
})(jQuery)

//懒加载部分
;(function($){
    $(function(){
        $("img.lazy").lazyload({ 
            placeholder_data_img: "img/w-00408.gif",     //用图片提前占位
            effect: "fadeIn",    //载入使用何种效果,effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
            // threshold: 50,    //提前开始加载
            // event: "click",      //事件触发时才加载,event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标划过或点击图片才开始加载,后两个值未测试…
            // failurelimit: 1,     //图片排序混乱时 ,
            // failurelimit, 值为数字. 
        });
    })
})(jQuery)