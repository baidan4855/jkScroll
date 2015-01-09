/**
 * Created by jack on 2015/1/8.
 * 自动记录上次打开相同页面时的纵向滚动条位置，并自动滚动到那个位置
 * 依赖 jquery ，jquery.cookie
 */
(function($) {
    $.extend({
        jkScroll: function (setting) {
            var loadKey;
            $(function(){
                $.cookie(genKey()) && scroll($.cookie(genKey()));
                loadKey=genKey();
            });
            $(window).bind("beforeunload",function(){
                console.log(loadKey + "\t" + $(window).scrollTop());
                $.cookie(loadKey,$(window).scrollTop());
            });
            var genKey=function(){
                var url=window.location.href;
                var f=setting && setting.form ? $("#"+setting.form):"";
                var p="";
                if(f && f.is('form')){
                    p=$(f).serialize();
                }
                return $.md5(url+p);
            };
            var scroll=function(top){
                $(window).scrollTop(top);
            }
        }
    })
})(jQuery);