window.addEventListener("load",function(){
    //1、获取元素
    var phone = document.querySelector(".phone_number");
    var message = document.querySelector(".message");
    var password = document.querySelector(".password");
    var confirm = document.querySelector(".confirm");
    //2、手机号验证
    var phoneRegex = /0?(13|14|15|18|17)[0-9]{9}/;
    phone.onblur = function() {
        if(phoneRegex.test(this.value)){
           this.nextElementSibling.className = "success";
           this.nextElementSibling.innerHTML = "<img src='images/success.png' >手机号输入正确";
        }else {
           this.nextElementSibling.className = "error";
           this.nextElementSibling.innerHTML = "<img src='images/error.png' >手机号码格式不正确，请重新输入";
        }
    };
    //3、短信验证码验证
    var messageRegex = /[0-9]{6}/;
    message.onblur = function() {
        if(messageRegex.test(this.value)){
           this.nextElementSibling.className = "success";
           this.nextElementSibling.innerHTML = "<img src='images/success.png' >验证码输入正确";
        }else {
           this.nextElementSibling.className = "error";
           this.nextElementSibling.innerHTML = "<img src='images/error.png' >验证码格式不正确，请重新输入";
        }
    };
    //4、密码验证
    var passwordRegex = /[a-zA-Z0-9]{6,}/;
    password.onblur = function() {
        if(passwordRegex.test(this.value)){
           this.nextElementSibling.className = "success";
           this.nextElementSibling.innerHTML = "<img src='images/success.png' >密码输入正确";
        }else {
           this.nextElementSibling.className = "error";
           this.nextElementSibling.innerHTML = "<img src='images/error.png' >密码不少于6位字符，请重新输入 ";
        }
    };
     //4、密码第二次确认
     confirm.onblur = function() {
         if(this.value === password.value){
            this.nextElementSibling.className = "success";
            this.nextElementSibling.innerHTML = "<img src='images/success.png' >密码输入正确";
         }else {
            this.nextElementSibling.className = "error";
            this.nextElementSibling.innerHTML = "<img src='images/error.png' >密码不一致，请重新输入 ";
         }
     };
})