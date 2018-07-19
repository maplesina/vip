;(function($){
    var divs=$(".tab-rig>div");
    console.log(divs)
    var lis=$(".center-subnav li");
    console.log(lis)
    var len=lis.length;
    
    $(lis).on("click",function(){
        
            // 获取点击li对应索引的div    将其显示出来    将除它之外的所有div隐藏
            $(divs).eq($(this).index()).css("display","block").siblings("div").css("display","none");
        })    
}(jQuery));