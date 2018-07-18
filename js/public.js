function lxfEndtime(){
  $(".lxftime").each(function(){
        var lxfday=$(this).attr("lxfday");//用来判断是否显示天数的变量
        var endtime = new Date($(this).attr("endtime")).getTime();//取结束日期(毫秒值)
        var nowtime = new Date().getTime();        //今天的日期(毫秒值)
        var youtime = endtime-nowtime;//还有多久(毫秒值)
        var seconds = youtime/1000;
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
        var CDay= days ;
        var CHour= hours % 24;
        var CMinute= minutes % 60;
        var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
        if(endtime<=nowtime){
          $(this).html("<span>活动已经结束</span>")//如果结束日期小于当前日期就提示过期啦
        }else{
          $(this).html("<span>剩余</span><span>"+days+"</span><span>天</span><span>"+CHour+"</span><span>时</span><span>"+CMinute+"</span><span>分</span><span>"+CSecond+"</span><span>秒</span>");          //输出有天数的数据
        }
  });
setTimeout("lxfEndtime()",1000);
};


// 购物袋
$(".side .shop").on("mouseenter",function(){
  $(".gouwu").show();
})
//当鼠标进入shop的时候gouwu出现，当鼠标离开的时候gouwu隐藏
$(".side .shop").on("mouseleave",function(){
  $(".gouwu").hide();
})
$(".side .gouwu").on("mouseenter",function(){
  $(".gouwu").show();
})
$(".side .gouwu").on("mouseleave",function(){
  $(".gouwu").hide();
})
// 进入登录窗口的时候让他的父元素上的hover样式消失
$(".login").on("mouseenter",function(){
  $(this).parents(".user").css("backgroundColor","#333")
})
// 当浮上右边的图标的时候让他对应的p出来
$(".side i").on("mouseenter",function(){
  $(this).children().css("display","block")
  $(this).children().css("right","40px")
})
$(".side  i").on("mouseleave",function(){
  $(this).children().css("display","none")
  $(this).children().css("right","-60px")
})
$(".side .shop").on("click",function(){
  $(this).children(".head-portrait").css("display","block")
})
$(".side .shop").on("mouseleave",function(){
  $(this).children(".head-portrait").css("display","none")
})

//回到顶部
$('#top').click(function () {
  $('html,body').animate({ 
      scrollTop: 0 
  }, 500);
});
//购物袋结束


//Tab列表切换
//对应的列表切换函数
function liTab(obj1, obj2, obj3, obj4) {
	function init() {
		for(var i = 0; i < obj1.length; i++) {
			obj2[0].style.display = "block";
			obj1[0].className = "active";
		}
	};
	init();
	for(var i = 0; i < obj1.length; i++) {
		obj1[i].index = i;
		obj1[i].onclick = function() {
			for(var j = 0; j < obj1.length; j++) {
				obj2[j].style.display = "none";
				obj1[j].className = "";
			}
			obj2[this.index].style.display = "block";
			this.className = "active";
		};
	}
};











