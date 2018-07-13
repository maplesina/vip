//电梯导航
; (function ($) {
    $(function () {
        LiftEffect({
            "control1": ".c-floor-goods-nav",    //侧栏电梯的容器
            "control2": ".c-floor-goods-nav-list",     //需要遍历的电梯父元素
            "target": [".t1", ".t2", ".t3", ".t4", ".t5", ".t6", ".t7", ".t8", ".t9", ".t10", ".t11", ".t12", ".t13", ".t14", ".t15", ".t16", ".t17", ".t18", ".t19"],     //监听的内容 注意一定要从小到大输入
            "current": "current"  //选中的样式
        });
    })
})(jQuery)