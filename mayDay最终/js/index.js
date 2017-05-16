$(function () {
	/*ruleDetail规则详情*/ $('.ruleDetail .check').click(function (ev) { ev.preventDefault(); $('.detailTable').slideToggle(600);  });
	/*END ruleDetail规则详情*/
	/*register开户参与*/
	var inpStr = '';
		/*打开*/
	$('.joinIn').click(function (ev) {
		ev.preventDefault();
		$('.register').show();
	});
		/*阻止冒泡*/
	$('.register form').click(function (ev) {
		ev.stopPropagation();
	});
		/*input显示*/
	$('.register input').click(function(ev){
		ev.stopPropagation();
		inpStr = $(this).val();
		if((inpStr == '姓名') || (inpStr == '电话') || (inpStr == '验证码')){
			$(this).val('');
		}
	}).blur(function (ev) {
		ev.stopPropagation();
		if($(this).val() == ''){
			$(this).val(inpStr);
		}
	});
		/*关闭*/
	$('.register a.close').click(function (ev) {
		ev.preventDefault();
		$('.register').slideUp();
	});
	$('.register').click(function () {
		$('.register').slideUp();
	});
	/*END register开户参与*/
	/*register表单验证*/
	var times = 120;
	var isinerval;
	/*获取验证码*/
	$('#GetVerify').click(function () {
		get_verify();
	});
	function get_verify() {
		var mobile = $("#mobile").val();
		var partten = /^1[3-9]\d{9}$/;
		if(!partten.test(mobile)){
			alert("请输入正确的手机号码");
			$('#mobile').focus();
			return false;
		}
		$.get("http://www.cy177.com/api.php?op=sms&callback=?",{ mobile: mobile,random:Math.random()}, function(data){
			if(data=="0") {						
				times = 120;
				$("#GetVerify").attr("disabled", true);
				isinerval = setInterval( CountDown , 1000);
			}else if(data=="true") {
				$('.hint').text("你已注册请勿重复").css('color','red');
			}else if(data=="-1") {
				$('.hint').text("你今天获取验证码次数已达到上限").css('color','red');
			}else {
				$('.hint').text("短信发送失败").css('color','red');
			}
		},'jsonp');
	}
	/*验证码禁用*/
	function CountDown() {
		if (times < 1) {
			$("#GetVerify").html("获取验证码")//.attr("disabled", false);
			clearInterval(isinerval);
			return;
		}
		$("#GetVerify").html(times+"秒后重获验证码");
		times--;
	}
	/*验证码是否正确*/
	$("#mobile_verify").blur(function(){
		val = $("#mobile_verify").val();
		mobile= $("#mobile").val();
		$.get("http://www.cy177.com/api.php?callback=?",{op:"sms_idcheck",action:"id_code",mobile:mobile,mobile_verify:val}, function(data){
			if( data == "1" ) {
				$('.hint').text("验证码正确").css('color','green');
			} else {
				$('.hint').text("验证码不正确").css('color','red');
				return false;
			}
		},'jsonp');					
	});
	/*表单提交*/
	$("button[name=dosubmit]").click(function(){
		val = $("#mobile_verify").val();
		mobile= $("#mobile").val();
		username = $("#name").val();
		/*点击提交按钮 验证数据*/
		$.get("http://www.cy177.com/index.php?m=ptjd&c=index&a=register&callback=?",{Cname:username,Mobile:mobile,type:'五一活动',mobile_verify:val},function(data){
			if(data == 'success'){
				alert('感谢您的参与！我们将会尽快与您联系！');
				$('.register').click();
			}else if(data == 'true'){
				alert('您已成功参与活动报名，请勿重复提交！');
				$('.register').click();
			}else if(data == 'errorcode'){
				$('.hint').text("验证码输入错误").css('color','red');
			}else if(data == 'errortel'){
				$('.hint').text("手机号码不正确").css('color','red');
			}
		},'jsonp');
		return false;
	})
	/*END register表单验证*/
})