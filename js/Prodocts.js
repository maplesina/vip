//详情页tab切换
;(function(){
    var divs=document.querySelectorAll(".about-imgtab");
    console.log(divs)
var lis=document.querySelectorAll(".about-img li i");
var len=lis.length;
for(var i=0;i<len;i++){
    lis[i].index = i;
    lis[i].onclick=function(){
        for(var j=0;j<len;j++){
            lis[j].className="";
            divs[j].className="";
        }
        this.className="active";
        divs[this.index].className="about-imgtab active"
    }
}

}());

//放大镜效果
$(function(){
    $(".sampleimage").zoomio();
})

