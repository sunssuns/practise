$(function () {

    function scroll() {
        var tooltop = $(".recom").offset().top;
        if ($("html,body").scrollTop() >= tooltop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    //点击每个小li页面滑动到相应的楼层区域
    //利用节流阀当我们点击小li时，排除滚动事件添加current类的干扰
    var flag = true;
    $(".fixedtool li").click(function () {
        flag = false;
        $("html,body").stop().animate({
            scrollTop: $(".floor .w").eq($(this).index()).offset().top
        }, function () {
            flag = true;
        });
        //为点击的小li添加current类,为它的兄弟去掉current类
        $(this).addClass("current").siblings().removeClass("current");

    });



    $(window).scroll(function () {
        scroll();//i==$(this).index()
        //滚动到某个区域时，为对应的小li添加current类
        if (flag) {
            $(".fixedtool li").each(function (i, ele) {
                if ($("html,body").scrollTop() >= $(".floor .w").eq(i).offset().top) {
                    $(ele).addClass("current").siblings().removeClass("current");
                }
            });
        }
    });

    //图片懒加载
    lazyLoadInit({
        showTime: 1100,
        onLoadBackEnd: function (i, e) {
            console.log("onLoadBackEnd:" + i);
        }
        , onLoadBackStart: function (i, e) {
            console.log("onLoadBackStart:" + i);
        }
    });

})