$(function () {
	//.slideshow
	var imgInfo = [{'name':'xiaomi','url':[1,2,3,4,5,6,7,8,9]},{'name':'Dyson','url':[1,2,3,4,5,6,7]},{'name':'SONY','url':[1,2,4,5,6,7]},{'name':'Mac','url':[1,2,3]}]
	var s = {};
	s.totalWidth = 0;//总宽度
	s.photo = $('.prize .photo');
	s.timer = {};
	s.img = $('.prize .photo img');
	s.img1 = $('.prize .photo img.first');
	s.img2 = $('.prize .photo img.second');
	s.img3 = $('.prize .photo img.third');
	s.imgBoxW = $('.prize .photo').width();
	s.imgWidth = $('.prize .photo img.first').width();//img宽度
	s.img2.css('left',s.imgBoxW);
	s.img3.css('left',-s.imgBoxW);
	
	//轮播动画
	s.photo.each(function (index,ele) {
		var that = index;
		var eachInfo = imgInfo[index];
		var iNow = 0;
		var iPre = eachInfo.url.length - 1;
		var iNext = 1;
		s.timer[index] = setInterval(function () {
			//clearInterval(s.timer[that]);
			s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).animate({'left':-s.imgBoxW},300,'swing',function () {
				iNow =( iNow >= eachInfo.url.length - 1) ? 0 : ++iNow;
				
				s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).css({'left':0})
			});
			s.img2.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNext]+'.jpg'}).animate({'left':0},300,'swing',function () {
				iPre = (iPre >= eachInfo.url.length - 1) ? 0 : ++iPre;
				iNext =( iNext >= eachInfo.url.length - 1) ? 0 : ++iNext;
				s.img2.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNext]+'.jpg'}).css({'left':s.imgBoxW})
			})
		},5000)
		
		s.photo.eq(index).on('taphold',function () {
			clearInterval(s.timer[that]);
		})
		
		s.photo.eq(index).on('swiperight',function () {
			clearInterval(s.timer[that]);
			s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).animate({'left':s.imgBoxW},300,'swing',function () {
				iNow =( iNow <=0 ) ? (eachInfo.url.length - 1) : --iNow;
				
				s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).css({'left':0})
			});
			s.img3.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iPre]+'.jpg'}).animate({'left':0},300,'swing',function () {
				iNext =( iNext <= 0 ) ? (eachInfo.url.length - 1) :--iNext;
				iPre = ( iPre <=0 ) ? (eachInfo.url.length - 1) : --iPre;
				s.img3.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iPre]+'.jpg'}).css({'left':-s.imgBoxW})
			})
		})
		s.photo.eq(index).on('swipeleft',function () {
			clearInterval(s.timer[that]);
			s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).animate({'left':-s.imgBoxW},300,'swing',function () {
				iNow =( iNow >= eachInfo.url.length - 1) ? 0 : ++iNow;
				
				s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).css({'left':0})
			});
			s.img2.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNext]+'.jpg'}).animate({'left':0},300,'swing',function () {
				iPre = (iPre >= eachInfo.url.length - 1) ? 0 : ++iPre;
				iNext =( iNext >= eachInfo.url.length - 1) ? 0 : ++iNext;
				s.img2.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNext]+'.jpg'}).css({'left':s.imgBoxW})
			})
			s.timer[that] = setInterval(function () {
				s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).animate({'left':-s.imgBoxW},300,'swing',function () {
					iNow =( iNow >= eachInfo.url.length - 1) ? 0 : ++iNow;
					
					s.img1.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNow]+'.jpg'}).css({'left':0})
				});
				s.img2.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNext]+'.jpg'}).animate({'left':0},300,'swing',function () {
					iPre = (iPre >= eachInfo.url.length - 1) ? 0 : ++iPre;
					iNext =( iNext >= eachInfo.url.length - 1) ? 0 : ++iNext;
					s.img2.eq(that).attr({'src':'img/'+eachInfo.name+'/'+eachInfo.url[iNext]+'.jpg'}).css({'left':s.imgBoxW})
				})
			},5000)
		})
		
		
		
		
		
	})
	
	
	
	
	
	
	
	
	/*register表单验证*/
	var times = 120;
	var isinerval;
	
	//获取验证码
	$('#GetVerify').click(function () {
		get_verify();
	})
	
	function get_verify() {
		var mobile = $("#mobile").val();
		var partten = /^1[3-9]\d{9}$/;
		if(!partten.test(mobile)){
			$('.hint').text("请输入正确的手机号码").css('color','red');
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
	
	
	//验证码禁用
	function CountDown() {
		if (times < 1) {
			$("#GetVerify").html("获取验证码")//.attr("disabled", false);
			clearInterval(isinerval);
			return;
		}
		$("#GetVerify").html(times+"秒后重获验证码");
		console.log(times);
		times--;
	}
	//验证码是否正确
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
		},'jsonp')					
	})
	
	
	//表单提交
	$("button[name=dosubmit]").click(function(){
		val = $("#mobile_verify").val();
		mobile= $("#mobile").val();
		username = $("#name").val();
		//点击提交按钮 验证数据
		$.get("http://www.cy177.com/index.php?m=ptjd&c=index&a=register&callback=?",{Cname:username,Mobile:mobile,type:'五一活动',mobile_verify:val},function(data){
			console.log(data)
			if(data == 'success'){
				$('.hint').text('感谢您的参与！我们将会尽快与您联系！').css('color','green');
			}else if(data == 'true'){
				$('.hint').text('您已成功参与活动报名，请勿重复提交！').css('color','red');
			}else if(data == 'errorcode'){
				$('.hint').text("验证码输入错误").css('color','red');
			}else if(data == 'errortel'){
				$('.hint').text("手机号码不正确").css('color','red');
			}
		},'jsonp')
		return false;
	})
	
	
	
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
	})
	/*END register表单验证*/
	
	
	
	
	
	
})
