$('.flow_open').on('click',function () {
	$('.flow').slideToggle();
})

$('#form .tel').focus(function () {
  if($(this).val() == '电话'){
    $(this).val('');
  }
}).blur(function () {
  if($(this).val() == ''){
    $(this).val('电话');
  }
});
$('#form .verify').focus(function () {
  if($(this).val() == '验证码'){
    $(this).val('');
  }
}).blur(function () {
  if($(this).val() == ''){
    $(this).val('验证码');
  }
});



var times = 120;
var isinerval;
/*获取验证码*/
$('#form .getVerify').click(function () {
  get_verify();
});
function get_verify() {
  var mobile = $("#form .tel").val();
  var partten = /^1[3-9]\d{9}$/;
  if(!partten.test(mobile)){
    $('#form .hint').text("请输入正确的手机号码").css('color','red');
    $('#form .tel').focus();
    return false;
  }
  $.get("http://www.cy177.com/api.php?op=sms&callback=?",{ mobile: mobile,type:'参与配资',random:Math.random()}, function(data){
    if(data=="0") {           
      times = 120;
      $("#form .getVerify").attr("disabled", true);
      isinerval = setInterval( CountDown , 1000);
    }else if(data=="true") {
      $('#form .hint').text("你已注册请勿重复").css('color','red');
    }else if(data=="-1") {
      $('#form .hint').text("你今天获取验证码次数已达到上限").css('color','red');
    }else {
      $('#form .hint').text("短信发送失败").css('color','red');
    }
  },'jsonp');
}
/*验证码禁用*/
function CountDown() {
  if (times < 1) {
    $("#form .getVerify").val("获取验证码").attr("disabled", false);
    clearInterval(isinerval);
    return;
  }
  $("#form .getVerify").val(times+"秒后重获");
  times--;
}
/*验证码是否正确*/
$("#form .verify").blur(function(){
  if($('.verify').val() != '' && $('.verify').val() != '验证码'){
    val = $("#form .verify").val();
    mobile= $("#form .tel").val();
    $.get("http://www.cy177.com/api.php?callback=?",{op:"sms_idcheck",action:"id_code",mobile:mobile,mobile_verify:val,type:'参与配资'}, function(data){
      if( data == "1" ) {
        $('#form .hint').text("验证码正确").css('color','green');
      } else {
        $('#form .hint').text("验证码不正确").css('color','red');
        return false;
      }
    },'jsonp');     
  }
});
/*表单提交*/
$("#form .sub").click(function(){
  val = $("#form .verify").val();
  mobile= $("#form .tel").val();
  username = '配资';
  /*点击提交按钮 验证数据*/
  $.get("http://www.cy177.com/index.php?m=ptjd&c=index&a=register&callback=?",{Cname:username,Mobile:mobile,type:'配资b',mobile_verify:val},function(data){
    if(data == 'success'){
      $('#form .hint').text('感谢您的参与！我们将会尽快与您联系！').css('color','red');
    }else if(data == 'true'){
      $('#form .hint').text('您已成功参与活动报名，请勿重复提交！').css('color','red');
    }else if(data == 'errorcode'){
      $('#form .hint').text("验证码输入错误").css('color','red');
    }else if(data == 'errortel'){
      $('#form .hint').text("手机号码不正确").css('color','red');
    }
  },'jsonp');
  return false;
})