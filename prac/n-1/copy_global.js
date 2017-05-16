$(function () {
	/*var oForm = {};
	oForm.name = $('form .name');
	oForm.tel = $('form .tel');
	oForm.ty = $('form .type');
	oForm.sub = $('form .sub');
	oForm.bg = $('.form_bg');*/
	/*弹出表单背景*/
//	oForm.closeBtn = $('.form_closeBtn');
	/*弹出表单关闭按钮*/
//	oForm.wrap = $('.form_wrap');
	/*弹出表单最外层*/
	/*oForm.bg.on('click',function () {
		oForm.wrap.hide();
	})
	oForm.closeBtn.on('click',function () {
		oForm.wrap.hide();
	})
	oForm.sub.on('click',function () {
		uploadInfo(oForm);
	})*/
	/*动态改变表单.type.val() -- tckbox*/
	$('.tckbox [type=radio]').on('change',function () {
		$('.tckbox .type').val($(this).val());
	})
	/*动态改变表单.type.val() -- sidebar*/
	$('.sidebar [type=radio]').on('change',function () {
		$('.sidebar .type').val($(this).val());
	});
	/*表单Input:focus-blur*/
	var str = '';
	$('.name').on('focus',function () {
		str = $(this).val();
		if(str == '姓名'  ||str == '您的姓名'){
			$(this).val('');
		}
	})
	$('.name').on('blur',function () {
		if($(this).val() == '' &&(str == '姓名'  ||str == '您的姓名')){
			$(this).val(str);
		}
	})
	$('.tel').on('focus',function () {
		str = $(this).val();
		if(str == '电话' ||str == '联系方式'||str == '联系电话'||str == '您的电话'){
			$(this).val('');
		}
	})
	$('.tel').on('blur',function () {
		if($(this).val() == '' && (str == '电话' ||str == '联系方式'||str == '联系电话'||str == '您的电话')){
			$(this).val(str);
		}
	})
	$('.verify').on('focus',function () {
	  str = $(this).val();
    if($(this).val() == '验证码'){
      $(this).val('');
    }
  });
	$('.verify').on('blur',function () {
		if($(this).val() == ''){
		  $(this).val('验证码');
		}
	});
	/****** nextpage******/
	/*$('.nextpage .button3').click(function () {
		$('.tckbox').show();
	})*/
	/****** sideBar ******/
	$('.sidebar').mouseover(function () {
		$('.sidebar').stop(true,false)
		$('.sidebar').animate({'right':'0px'},'linear');
	});
	$('.sidebar').mouseleave(function () {
		$('.sidebar').stop(true,false)
		$('.sidebar').animate({'right':'-301px'},'linear');
	});
	$('.sidebar .tab_nav li').click(function () {
		$('.sidebar .tab_nav li').removeClass('on').eq($(this).index()).addClass('on');
		$('.sidebar .tab_show .tab_list').hide().eq($(this).index()).show();
	})
	/*打开弹出层*/
	/*nextPage  #tcka*/
	$('.tcka').on('click',function () {
		easyDialog.open({
		  container:'tcka'
		})
	})
	/*关闭弹出层*/
	$('.closeBtn').on('click',function () {
		easyDialog.close();
	})
	
	
	/*DONE 表单验证*/
	
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
      alert("请输入正确的手机号码");
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
        /*Todo 待删除*/
        times[index] = 120;
        $(".getVerify").eq(index).attr("disabled", true);
        $(".getVerify").eq(index).isinerval = setInterval( function () {
          CountDown(that)
        } , 1000);
        /*Todo END 待删除*/
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
    username = $("#name").val();
    type = $('ty').val();
    /*点击提交按钮 验证数据*/
    $.get("http://www.cy177.com/index.php?m=ptjd&c=index&a=register&callback=?",{Cname:username,Mobile:mobile,type:type,mobile_verify:val},function(data){
      if(data == 'success'){
        alert('感谢您的参与！我们将会尽快与您联系！');
      }else if(data == 'true'){
        alert('您已成功参与活动报名，请勿重复提交！');
      }else if(data == 'errorcode'){
        $('.hint').eq(index).text("验证码输入错误").css('color','red');
      }else if(data == 'errortel'){
        $('.hint').eq(index).text("手机号码不正确").css('color','red');
      }
    },'jsonp');
    return false;
  })
	
	
	
})







//表单验证函数
/*function uploadInfo(obj) {
	var index = obj.sub.index(this);
		if(obj.name.eq(index).val() == '' || obj.tel.eq(index).val() == ''){
		alert('请填写完整后再提交。');
	}else{
		if(obj.tel.eq(index).val().length != 11){
			alert('手机号码位数不正确。');
		}else{
			var formData = 'Cname='+ obj.name.eq(index).val() +'&Mobile='+obj.tel.eq(index).val() +'&type='+obj.ty.eq(index).val()+'&callback=tcCallback';
			$.ajax({
				type:"get",
				url:"http://www.cy177.com/index.php?m=ptjd&",
				async:false,
				data:formData,
				dataType: "jsonp",
		 		jsonp: "callback",
	            jsonpCallback:"tcCallback",
	            success: function(data){
	               	if(data =='true'){
					    alert("请勿重复提交");
					    obj.bg.click();
				  	}
					if(data =='errortel'){
						alert("请输入正确的手机号码");
					}
				   	if(data =='success'){
				    	alert("提交成功");
				    	obj.bg.click();
				  	}
	            },
	            error: function(){
	                alert('错误');
	            }
			});
		}
	}
}*/