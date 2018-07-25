// 圆盘等分
// window.onload = function () {
//     [ ].slice.call($(".luck ul li"),0).forEach(function(item,i) {
//         item.style.backgroundColor = '#' + (~~(Math.random() * (1 << 2))).toString(16);
//         item.style.transform = 'rotate(' + 360 / 8 * (i + 1) + 'deg)skewX(45deg)';
//     })
// }

//中奖名单
$(document).ready(function(){
	$('.winning li:even').addClass('lieven');
})
$(function(){
	$("div.winning").myScroll({
		speed:40, //��ֵԽ���ٶ�Խ��
		rowHeight:68 //li�ĸ߶�
	});
});
 

// ///////////////tab切换
// function liTab(obj1, obj2, obj3, obj4) {
// 	function init() {
// 		for(var i = 0; i < obj1.length; i++) {
// 			obj2[0].style.display = "block";
// 			obj1[0].className = "first-page";
// 		}
// 	};
// 	init();
// 	for(var i = 0; i < obj1.length; i++) {
// 		obj1[i].index = i;
// 		obj1[i].onclick = function() {
// 			for(var j = 0; j < obj1.length; j++) {
// 				obj2[j].style.display = "none";
// 				obj1[j].className = "";
// 			}
// 			obj2[this.index].style.display = "block";
// 			this.className = "first-page";
// 		};
// 	}
// };
;(function(obj1,obj2){
	var len = obj1.length;
	for(var i=0;i<len;i++){
		obj1[i].onclick = function(){
			for(var j = 0; j < len ; j++){
				obj1[j].className = "";
				obj2[j].className = "";
			}
			this.className = "first-page";
			var n = this.getAttribute("index");
			obj2[n].className = "active";
		}
	}
}($(".head-inner>ul>li"),$(".wrapper>div")))


