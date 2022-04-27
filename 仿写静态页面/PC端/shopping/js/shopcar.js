$(function () {
    //1、复选框全选或者全不选
    $(".checkall").change(function () {
        //如果全选框被选中，则所有复选框都被选中;如果全选框被取消，则所有复选框都被取消选中状态
        $(".checkall,.j-checkbox").prop("checked", $(this).prop("checked"));
        //全选框被选中，则所有商品简介背景色变为黄色，否则为白色
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
        //复选框选中状态变化后进行一次总计
        getSum();
    });
    //2、如果全部小复选框都被选中，全选按钮才会被选中，否则全不选
    $(".j-checkbox").change(function () {
        //被选中的小复选框个数与小复选框个数相等，全选框才会被选中，否则全选框不被选中
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        //选中的小复选框所在商品栏背景颜色变为黄色，没有选中的小复选框背景为白色
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        //复选框选中状态变化后进行一次总计
        getSum();
    });
    // 3. 增加商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框
    $(".increment").click(function () {
        //声明变量num保存商品数值
        var num = $(this).siblings(".itxt").val();
        num++;
        //num要大于0
        if (num > 0) {
            //num值大于零与对应商品价格数值price相乘后赋值给文本框
            $(this).siblings(".itxt").val(num);
            var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substr(1));
            $(this).parents(".p-num").siblings(".p-sum").text('￥' + (price * num).toFixed(2));
        } else {
            //num值不大于零，则给num赋值为1，再与对应商品价格数值price相乘后赋值给文本框
            num = 1;
            $(this).siblings(".itxt").val(num);
            var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substr(1));
            $(this).parents(".p-num").siblings(".p-sum").text('￥' + (price * num).toFixed(2));
        }
        //判断这个商品是否被选中，确认为true后进行一次总计
        if($(this).parents(".cart-item").find(".j-checkbox").prop("checked")){
            getSum();
        }
    });
    // 4. 减少商品数量模块 首先声明一个变量，当我们点击-号（decrement），就让这个值--，然后赋值给文本框
    $(".decrement").click(function () {
        var num = $(this).siblings(".itxt").val();
        num--;
        if (num > 0) {
            $(this).siblings(".itxt").val(num);
            var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substr(1));
            $(this).parents(".p-num").siblings(".p-sum").text('￥' + (price * num).toFixed(2));
        } else {
            num = 1;
            $(this).siblings(".itxt").val(num);
            var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substr(1));
            $(this).parents(".p-num").siblings(".p-sum").text('￥' + (price * num).toFixed(2));
        }
        //判断这个商品是否被选中，确认为true后进行一次总计
        if($(this).parents(".cart-item").find(".j-checkbox").prop("checked")){
            getSum();
        }
    });
    //5、输入商品数量模块 获取输入的值，判断是否大于0，大于0则将计算结果赋值给小文本框，否则就将数值1赋值给文本框
    $(".itxt").change(function () {
        var num = $(this).val();
        if (num > 0) {
            var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substr(1));
            $(this).parents(".p-num").siblings(".p-sum").text('￥' + (price * num).toFixed(2));
        } else {
            num = 1;
            $(this).val(num);
            var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substr(1));
            $(this).parents(".p-num").siblings(".p-sum").text('￥' + (price * num).toFixed(2));
        }
        //判断这个商品是否被选中，确认为true后进行一次总计
        if($(this).parents(".cart-item").find(".j-checkbox").prop("checked")){
            getSum();
        }
    });
    //6、结账
    getSum();
    function getSum() {
        var count = 0;//总数
        var money = 0;//总价钱
        $(".itxt").each(function (i, ele) {
            if($(this).parents(".cart-item").find(".j-checkbox").prop("checked")){
                count += parseInt($(ele).val());
            }
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele){
            if($(this).parents(".cart-item").find(".j-checkbox").prop("checked")){
                money += parseFloat($(ele).text().substr(1));
            }
        });
        $(".price-sum em").text('￥'+money.toFixed(2));
    }
    //7、点击删除,删除对应的商品
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        //删除某个商品后进行一次总计
        getSum();
    });
    //清理购物车
    $(".clear-all").click(function(){
        $(".cart-item-list").remove();
        getSum();
    });
     //删除被选中的商品
    $(".remove-batch").click(function(){
        $(".cart-item").each(function(i, ele){
            if($(ele).find(".j-checkbox").prop("checked")){
                $(ele).remove();
            }
        });
        getSum();
    });
})