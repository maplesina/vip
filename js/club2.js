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
 
// tab切换
// liTab($(".first-page"),$(".wrapper>div"));