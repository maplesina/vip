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
