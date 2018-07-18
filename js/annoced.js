//电梯导航
; (function ($) {
    $(function () {
        LiftEffect({
            "control1": ".content-main-left",    //侧栏电梯的容器
            "control2": ".content-main-left-list",     //需要遍历的电梯父元素
            "target": [".t1", ".t2", ".t3", ".t4", ".t5", ".t6", ".t7"],     //监听的内容 注意一定要从小到大输入
            "current": "main-active"  //选中的样式
        });
    })
})(jQuery)


//懒加载
; (function ($) {
    $(function () {
        $("img.lazy").lazyload({
            placeholder_data_img: "img/loading-gray-hash-baf77a65.gif",     //用图片提前占位
            effect: "fadeIn",    //载入使用何种效果,effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
            // threshold: 50,    //提前开始加载
            // event: "click",      //事件触发时才加载,event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标划过或点击图片才开始加载,后两个值未测试…
            // failurelimit: 1,     //图片排序混乱时 ,
            // failurelimit, 值为数字. 
        });
    })
})(jQuery)