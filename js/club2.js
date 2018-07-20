// 圆盘等分
window.onload = function () {
    [ ].slice.call($(".luck ul li"),0).forEach(function(item,i) {
        item.style.backgroundColor = '#' + (~~(Math.random() * (1 << 2))).toString(16);
        item.style.transform = 'rotate(' + 360 / 8 * (i + 1) + 'deg)skewX(45deg)';
    })
}