$('.form .tel').focus(function () {
  if($(this).val() == '电话'){
    $(this).val('');
  }
}).blur(function () {
  if($(this).val() == ''){
    $(this).val('电话');
  }
});
$('.form .verify').focus(function () {
  if($(this).val() == '验证码'){
    $(this).val('');
  }
}).blur(function () {
  if($(this).val() == ''){
    $(this).val('验证码');
  }
});

var times ={};
var isinerval;
/*获取验证码*/
$('.form .getVerify').click(function () {
  var index = $('.form .getVerify').index(this);
  get_verify(index);
});
function get_verify(index) {
  var that = index;
  var mobile = $(".form .tel").eq(index).val();
  var partten = /^1[3-9]\d{9}$/;
  if(!partten.test(mobile)){
    alert("请输入正确的手机号码");
    $('.form .tel').eq(index).focus();
    return false;
  }
  $.get("http://www.cy177.com/api.php?op=sms&callback=?",{ mobile: mobile,type:'参与配资',random:Math.random()}, function(data){
    if(data=="0") {           
      times[index] = 120;
      $(".form .getVerify").eq(index).attr("disabled", true);
      isinerval = setInterval( function () {
      	CountDown(that)
      } , 1000);
    }else if(data=="true") {
      $('.hint').eq(index).text("你已注册请勿重复").css('color','red');
    }else if(data=="-1") {
      $('.hint').eq(index).text("你今天获取验证码次数已达到上限").css('color','red');
    }else {
      $('.hint').eq(index).text("短信发送失败").css('color','red');
    }
  },'jsonp');
}
/*验证码禁用*/
function CountDown(that) {
  if (times[that] < 1) {
    $(".form .getVerify").eq(that).val("获取验证码").attr("disabled", false);
    clearInterval(isinerval);
    return;
  }
  $(".form .getVerify").eq(that).val(times[that]+"秒后重获");
  times[that]--;
}
/*验证码是否正确*/
$(".form .verify").blur(function(){
  var index = $(".form .verify").index(this);
  if($('.verify').eq(index).val() != '' && $('.verify').eq(index).val() != '验证码'){
    val = $(".form .verify").eq(index).val();
    mobile= $(".form .tel").eq(index).val();
    $.get("http://www.cy177.com/api.php?callback=?",{op:"sms_idcheck",action:"id_code",mobile:mobile,mobile_verify:val,type:'参与配资'}, function(data){
      if( data == "1" ) {
        $('.form .hint').eq(index).text("验证码正确").css('color','green');
      } else {
        $('.form .hint').eq(index).text("验证码不正确").css('color','red');
        return false;
      }
    },'jsonp');
  }
  
           
});
/*表单提交*/
$(".form .sub").click(function(){
  var index = $(".form .sub").index(this);
  val = $(".form .verify").eq(index).val();
  mobile= $(".form .tel").eq(index).val();
  /*username = $("#name").val();*/
  username = '配资';
  /*点击提交按钮 验证数据*/
  $.get("http://www.cy177.com/index.php?m=ptjd&c=index&a=register&callback=?",{Cname:username,Mobile:mobile,type:'配资a',mobile_verify:val},function(data){
    if(data == 'success'){
      alert('感谢您的参与！我们将会尽快与您联系！');
    }else if(data == 'true'){
      alert('您已成功参与活动报名，请勿重复提交！');
    }else if(data == 'errorcode'){
      $('.form .hint').eq(index).text("验证码输入错误").css('color','red');
    }else if(data == 'errortel'){
      $('.form .hint').eq(index).text("手机号码不正确").css('color','red');
    }
  },'jsonp');
  return false;
})
