// 品牌分类列表js效果
; (function ($) {
    $(function () {
        $('.g-flagship-more-open').on('click', function () {
            $('.g-flagship-content').height("975");
            $('.g-flagship-more-open').css('display','none');
            $('.g-flagship-more-he').css('display','block');
        })

        $('.g-flagship-more-he').on('click', function () {
            $('.g-flagship-content').height('388');
            $('.g-flagship-more-he').css('display', 'none');
            $('.g-flagship-more-open').css('display', 'block');
        })
    });
})(jQuery)

//懒加载
;(function($){
    $(function(){
        $("img.lazy").lazyload({ 
            // placeholder: "img/af484c7a1d964e129bb7bcf3147835bb_th.gif",     //用图片提前占位
            effect: "fadeIn",    //载入使用何种效果,effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
            // threshold: 50,    //提前开始加载
            // event: "click",      //事件触发时才加载,event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标划过或点击图片才开始加载,后两个值未测试…
            // failurelimit: 1,     //图片排序混乱时 ,
            // failurelimit, 值为数字. 
        });
    })
})(jQuery)

//简单的切换
;(function($){
    $(function(){
        var $item = $('.g-flagship-sort-item');
        var $clothesBox = $('.clothes-box');
        for(var i=0; i<$item.length; i++){
            $item[i].index = i;
            $item[i].onclick = function(){

                //控制字体变化
                $item.removeClass("active");
                $clothesBox.removeClass("active");
                $(this).addClass('active');
                
                var $num = this.index;
                
                // $(this).siblings().hover(
                // function () {
                //     $(this).css("color", "#f43499");
                // },
                // function(){
                //     $(this).css("color", "black");
                // }
                // );
                //控制对应的内容变化
               
                console.log($num);
                $($clothesBox).eq($num).addClass('active')
                
                
            }
        }
    })
    
})(jQuery)