commit 1-1
2017-5-9
	新建移动端页面:article-A
	微信一键加好友?qq一键加好友?======能否实现?
	页面无法实现分享至朋友圈
	一键分享代码可通过百度分享实现http://share.baidu.com/
commit 1-2
	添加了百度分享代码 修改了微信的图标
	测试了JiaThis代码 
commit 1-3
	添加了底部栏
	添加头部信息logo 作者
	完善表单js
	确认无法通过web页面跳转微信客户端(新浪/网易/凤凰网案例)
	新浪做法值得借鉴
commit 1-4
	添加顶部图片
	顶部作者微信图标
	底部图片随滚动变大,最大时抖动(废弃,不好看)
	改为抖动效果
	

	/*废弃部分注释*/
	scrollTop==0     :    20%
	scrollTop == outerHeight(true) - window.screen.availHeight : 100%


	======>>>>

	scale值 = scrollTop/(outerHeight(true)-window.screen.availHeight)*0.8 + 0.2


	scrollTop == outer - 2availHeight  :  0%
	scrollTop == outer - availHeight   :  100%

	scrollTop >= outer - 2availHeight 
	/*END 废弃部分注释*/

	改为jq抖动效果 引用地址:http://blog.csdn.net/u011072139/article/details/70208746
	
	jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, 	intDuration /*Time duration*/) {  
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

	调用方法：
	$("抖动元素").shake(次数, 距离, 持续时间);
	例子:$("#userName").shake(2, 10, 400);
	
	


	表单提交注意事项
	1.Cname
	2.type值
	3.Mobile值