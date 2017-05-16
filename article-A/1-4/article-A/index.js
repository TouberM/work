$(function () {
	$('.tel').on('focus',function () {
    if($(this).val() == '电话'){
      $(this).val('');
    }
  })
  $('.tel').on('blur',function () {
    if($(this).val()==''){
      $(this).val('电话');
    }
  })
  $('.verify').on('focus',function () {
    if($(this).val() == '验证码'){
      $(this).val('');
    }
  });
  $('.verify').on('blur',function () {
    if($(this).val() == ''){
      $(this).val('验证码');
    }
  });
  
  var times = {};/*多组表单需要对应多组times[index]*/
  var isinerval;
  /*获取验证码*/
  $('.getVerify').click(function () {
    var index = $('.getVerify').index(this);
    console.log(index);
    get_verify(index);
  });
  function get_verify(index) {
    var that = index;
    var mobile = $(".tel").eq(index).val();
    var partten = /^1[3-9]\d{9}$/;
    if(!partten.test(mobile)){
      $('.hint').eq(index).text("请输入正确的手机号码").css('color','red');
      $('.tel').eq(index).focus();
      return false;
    }
    $.get("http://www.cy177.com/api.php?op=sms&callback=?",{ mobile: mobile,type:'参与配资',random:Math.random()}, function(data){
      if(data=="0") {           
        times[index] = 120;
        $(".getVerify").eq(index).attr("disabled", true);
        $(".getVerify").eq(index).isinerval = setInterval( function () {
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
      $(".getVerify").eq(that).val("获取验证码").attr("disabled", false);
      clearInterval(isinerval);
      return;
    }
    $(".getVerify").eq(that).val(times[that]+"秒后重获");
    times[that]--;
  }
  /*验证码是否正确*/
  
    $(".verify").blur(function(){
      var index = $(".verify").index(this);
      if($('.verify').eq(index).val() != '' && $('.verify').eq(index).val() != '验证码'){
        val = $(".verify").eq(index).val();
        mobile= $(".tel").eq(index).val();
        $.get("http://www.cy177.com/api.php?callback=?",{op:"sms_idcheck",action:"id_code",mobile:mobile,mobile_verify:val,type:'参与配资'}, function(data){
          if( data == "1" ) {
            $('.hint').eq(index).text("验证码正确").css('color','green');
          } else {
            $('.hint').eq(index).text("验证码不正确").css('color','red');
            return false;
          }
        },'jsonp');        
      }
    });
  
  /*表单提交*/
  $(".sub").click(function(){
    var index = $(".sub").index(this);
    val = $(".verify").eq(index).val();
    mobile= $(".tel").eq(index).val();
    /*点击提交按钮 验证数据*/
    $.get("http://www.cy177.com/index.php?m=ptjd&c=index&a=register&callback=?",{Cname:'配资c',Mobile:mobile,type:'配资c',mobile_verify:val},function(data){
      if(data == 'success'){
        $('.hint').eq(index).text('感谢您的参与！我们将会尽快与您联系！').css('color','green');
      }else if(data == 'true'){
        $('.hint').eq(index).text('您已成功参与活动报名，请勿重复提交！').css('color','red');;
      }else if(data == 'errorcode'){
        $('.hint').eq(index).text("验证码输入错误").css('color','red');
      }else if(data == 'errortel'){
        $('.hint').eq(index).text("手机号码不正确").css('color','red');
      }
    },'jsonp');
    return false;
  })
  
  
  $('body').on('touchmove',function (ev) {
    var top= $('body').scrollTop();
  	/*var vScale = top/($('body').outerHeight(true)-window.screen.availHeight)*0.8 + 0.2;
  	console.log(vScale);
    $('.jump').css({'transform':'scale('+vScale+')'});
  	
  	*/
  	if(top >= $('body').outerHeight(true)-2*window.screen.availHeight){
  	  $('.jump').stop(true,true);
  	  $(".jump").shake(3, 6, 400);
  	}
//	$(".jump").shake(2, 10, 400);
  	
  })
  jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {  
    this.each(function () {  
        var jqNode = $(this);  
        jqNode.css({ position: 'relative' });  
        for (var x = 1; x <= intShakes; x++) {  
            jqNode.animate({ left: (intDistance * -1) }, (((intDuration / intShakes) / 4)))  
            .animate({ left: intDistance }, ((intDuration / intShakes) / 2))  
            .animate({ left: 0 }, (((intDuration / intShakes) / 4)));  
        }  
    });  
    return this;  
}  
  
  
})
