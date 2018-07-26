// 圆盘等分
// window.onload = function () {
//     [ ].slice.call($(".luck ul li"),0).forEach(function(item,i) {
//         item.style.backgroundColor = '#' + (~~(Math.random() * (1 << 2))).toString(16);
//         item.style.transform = 'rotate(' + 360 / 8 * (i + 1) + 'deg)skewX(45deg)';
//     })
// }


/////////////////////////////////////////////////////////////////////////中奖名单
$(document).ready(function(){
	$('.winning li:even').addClass('lieven');
})
// $(function(){
// 	$("div.winning").myScroll({
// 		speed:40,
// 		rowHeight:68
// 	});
// });
 

//////////////////////////////////////////////////////////////////////////////tab切换
;(function(obj1,obj2){
	var len = obj1.length;
	for(var i=0;i<len;i++){
		obj1[i].index = i;
		obj1[i].onclick = function(){
			for(var j = 0; j < len ; j++){
				obj1[j].className = "";
				obj2[j].className = "";
			}
			if(this.index == 1){//当点击“抽大奖”的时候才执行中奖名单滚动的操作
				$("div.winning").myScroll({
					speed:40,
					rowHeight:68
				});
				// flag = false;
			}
			this.className = "first-page";
			var n = this.getAttribute("index");
			obj2[n].className = "active";
		}
	}
}($(".head-inner>ul>li"),$(".wrapper>div")))



/////////////////////////////////////////////////////////////////////////////////// 懒加载
;(function($){
    $(function(){
        $("img.lazy").lazyload({ 
            placeholder_data_img: "../img/xy-club-lazy.gif",     //用图片提前占位
            effect: "fadeIn",    //载入使用何种效果,effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
            // threshold: 50,    //提前开始加载
            // event: "click",      //事件触发时才加载,event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标划过或点击图片才开始加载,后两个值未测试…
            // failurelimit: 1,     //图片排序混乱时 ,
            // failurelimit, 值为数字. 
        });
    })
})(jQuery)

