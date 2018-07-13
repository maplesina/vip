// 品牌分类列表js效果
; (function ($) {
    $(function () {
        $('.g-flagship-more-open').on('click', function () {
            $('.g-flagship-content').height("auto");
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