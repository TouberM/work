/**
 * Created by ming.yu on 2015/7/17.
 * User For Add Baidu and GA Code.
 */

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://"),str;
 
function getDomain(){
	var win98 = /win\.98\.cn/.test(location.href),
		winBaidao = /win\.baidao\.com/.test(location.href),
		winTiantong99 = /win\.tiantong99\.com/.test(location.href),
		winTiantong999 = /win\.tiantong999\.com/.test(location.href),
		winShiyou66 = /win\.shiyou66\.com/.test(location.href),
		winYinrui99 = /win\.yinrui99\.com/.test(location.href),
		winYintx = /win\.yintx\.cn/.test(location.href),
		wwwdx168 = /www\.dx168\.com/.test(location.href),
		winDx168 = /win\.dx168\.com/.test(location.href),
		zhiboDx168 = /zhibo\.dx168\.com/.test(location.href),
		ygappDx168 = /ygapp\.dx168\.com/.test(location.href),
		dx5800 = /dx\.5800\.com/.test(location.href),
		www5800 = /www\.5800\.com/.test(location.href),
		wwwBaidao = /www\.baidao\.com/.test(location.href),
		wwwTiantong99 = /www\.tiantong99\.com/.test(location.href),
		wwwTiantong999 = /www\.tiantong999\.com/.test(location.href),
		www98cn = /www\.98\.cn/.test(location.href),
		m98cn = /m\.98\.cn/.test(location.href),
		adYinrui99 = /ad\.yinrui99\.com/.test(location.href),
		wwwYinrui99 = /www\.yinrui99\.com/.test(location.href),
		win5800 = /win\.5800\.com/.test(location.href),
		ygbaidao = /yg\.baidao\.com/.test(location.href),
		wwwYintx = /www\.yintx\.cn/.test(location.href),
		win95049 = /win\.95049\.net/.test(location.href),
		newwinner = /newwinner\.net\.cn/.test(location.href),
		win2yinrui99 = /win2\.yinrui99\.com/.test(location.href),
		win298 = /win2\.98\.cn/.test(location.href),
		win35800 = /win3\.5800\.com/.test(location.href),
		win25800 = /win2\.5800\.com/.test(location.href),
		wwwShiyou66 = /www\.shiyou66\.com/.test(location.href),
		winyueyin99 = /win\.yueyin99\.com/.test(location.href),	
		jrybaidao=/jry\.baidao\.com/.test(location.href),
		m5800 = /m\.5800\.com/.test(location.href),
		win02195049 = /win\.02195049\.com/.test(location.href),
		winxingzoux = /win\.xingzoux\.com/.test(location.href),
		wwwyiqicaifu = /www\.yiqicaifu\.cn/.test(location.href),
		winyiqicaifu = /win\.yiqicaifu\.cn/.test(location.href),
		wwwxingzoux = /www\.xingzoux\.com/.test(location.href),
		win53ytx = /win\.53ytx\.com/.test(location.href),
		wpb168 = /www\.wpb168\.com/.test(location.href),
		chaochaojin = /win\.chaochaojin\.com/.test(location.href),
		winyin5800 = /win\.yin5800\.com/.test(location.href),
		winyk5800 = /win\.yk5800\.com/.test(location.href),
		winhd5800 = /win\.hd5800\.com/.test(location.href),
		winBojin9 = /win\.bojin9\.com/.test(location.href),
		winDxCn = /win\.dx\.cn/.test(location.href);
		win99Ytx = /win\.99ytx\.com/.test(location.href);
		jinyi999=/win\.jinyi999\.cn/.test(location.href);
		qiandashi=/win\.qiandashi\.net/.test(location.href);

	if(win98 || win298){return 1;}
	else if(winBaidao){return 2;}
	else if(winTiantong99){return 3;}
	else if(winTiantong999){return 4;}
	else if(winShiyou66){return 5;}
	else if(winYinrui99 || win2yinrui99){return 6;}
	else if(www5800){return 7;}
	else if(wwwBaidao){return 8;}
	else if(wwwTiantong99){return 9;}
	else if(wwwTiantong999){return 10;}
	else if(www98cn){return 11;}
	else if(m98cn){return 12;}
	else if(adYinrui99){return 13;}
	else if(wwwYinrui99){return 14;}
	else if(win5800 || win35800 || win25800){return 15;}
	else if(ygbaidao){return 16;}
	else if(wwwYintx){return 17;}
	else if(winYintx){return 18;}
	else if(winDx168 || zhiboDx168 || ygappDx168 || wwwdx168){return 19;}
	else if(dx5800){return 20;}
	else if(win95049){return 21;}
	else if(newwinner){return 22;}
	else if(wwwShiyou66){return 23;}
	else if(winyueyin99){return 24;}
	else if(jrybaidao){return 25;}
	else if(m5800){return 26;}
	else if(win02195049){return 27;}
	else if(winxingzoux){return 28;}
	else if(wwwxingzoux){return 29;}
	else if(wwwyiqicaifu){return 30;}
	else if(winyiqicaifu){return 31;}
	else if(win53ytx){return 32;}
	else if(wpb168){return 33;}
	else if(chaochaojin){return 34;}
	else if(winyin5800){return 35;}
	else if(winyk5800){return 36;}
	else if(winhd5800){return 37;}
	else if(winBojin9){return 38;}
	else if(winDxCn){return 39;}
	else if(win99Ytx){return 40;}
	else if(jinyi999){return 41;}
	else if(qiandashi){return 42;}
	else{return 0;}
}

var url = document.location.href,agentWap=null,agentWeb=null;
	agentWap = /wap/.test(url);
	agentWeb = /web/.test(url);
	var flag = getDomain();
	/* 用于98.cn 官网增加统计代码 */
	_addTJCode(url);
	
	switch(flag){
		case 0 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			ga=function(){
				//console.log('不存在GA代码');
				}
			break;
		case 1 : 
			if(agentWap){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-5', 'auto');
				ga('send', 'pageview');
			}
			else if(agentWeb){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-10', 'auto');
				ga('send', 'pageview');
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			//ga=function(){console.log('不存在GA代码');}
			str = "hm.baidu.com/h.js%3F58ee9278acdcddc932922ebdefd4d126' type='text/javascript'%3E%3C/script%3E";
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + str));
			break;
		case 2 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			//ga=function(){console.log('不存在GA代码');}
			str = "hm.baidu.com/h.js%3Fc727128822780d61db467572ff6675c5' type='text/javascript'%3E%3C/script%3E"
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + str));
			break;
		case 3 :  
			if(agentWap){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

			  ga('create', 'UA-55836882-11', 'auto');
			  ga('send', 'pageview');

				//ga=function(){console.log('不存在GA代码');}
				}
			else if(agentWeb){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

			  ga('create', 'UA-55836882-11', 'auto');
			  ga('send', 'pageview');

				//ga=function(){console.log('不存在GA代码');}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			//ga=function(){console.log('不存在GA代码');}
			str = "hm.baidu.com/h.js%3F54b9871e40c53f392524f191268831f6' type='text/javascript'%3E%3C/script%3E"
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + str));
			break;
		case 4 :  
			if(agentWap){
				  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

				  ga('create', 'UA-55836882-12', 'auto');
				  ga('send', 'pageview');
				}
			else if(agentWeb){
				  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

				  ga('create', 'UA-55836882-12', 'auto');
				  ga('send', 'pageview');
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			//ga=function(){console.log('不存在GA代码');}
			str = "hm.baidu.com/h.js%3Fe6c26675e9c064b6a3a9940183ac19d7' type='text/javascript'%3E%3C/script%3E"
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + str));
			break;
		case 5 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			ga=function(){
					//console.log('不存在GA代码');
					}
			str = "hm.baidu.com/h.js%3F9f23e37fe076950f140f4cd1824f0897' type='text/javascript'%3E%3C/script%3E"
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + str));
			break;
		case 6 :  
			if(agentWap){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-4', 'auto');
				ga('send', 'pageview');
			}
			else if(agentWeb){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
			  ga('create', 'UA-55836882-13', 'auto');
			  ga('send', 'pageview');
				// ga=function(){console.log('不存在GA代码');}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			//ga=function(){console.log('不存在GA代码');}
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-53828dfeae95bb37018f72a09d820db1"/*tpa=http://hm.baidu.com/hm.js?53828dfeae95bb37018f72a09d820db1*/;
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 7 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				//ga=function(){console.log('不存在GA代码');}
				}
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
			ga('create', 'UA-55836882-8', 'auto');
			ga('send', 'pageview');	
			str = "hm.baidu.com/h.js%3F2d881ca3eb669f9d12383e9582066db3' type='text/javascript'%3E%3C/script%3E"
			document.write(unescape("%3Cscript src='" + _bdhmProtocol + str));
			break;
		case 8 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				//ga=function(){console.log('不存在GA代码');}
				}
			/* google ga */
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
			ga('create', 'UA-55836882-7', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function(){
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-1c2e871dced17f7b43f26c5783ea79ce"/*tpa=http://hm.baidu.com/hm.js?1c2e871dced17f7b43f26c5783ea79ce*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 9 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			ga=function(){
					//console.log('不存在GA代码');
					}
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-e30ab4b19b3afe4f4df4f63abab564fb"/*tpa=http://hm.baidu.com/hm.js?e30ab4b19b3afe4f4df4f63abab564fb*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 10 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			ga=function(){
					//console.log('不存在GA代码');
					}
			break;
		case 11 :  
			if(agentWap){
				//ga=function(){console.log('不存在GA代码');}
				}
			else if(agentWeb){
				//ga=function(){console.log('不存在GA代码');}
				}
			else{
				//ga=function(){console.log('不存在GA代码');}
				}
			/* google 统计代码 */	
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
			ga('create', 'UA-55836882-1', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  	var hm = document.createElement("script");
			  	hm.src = "http://hm.baidu.com/hm.js?dc226db6b425cbf23eac7b6d9ece4828";
			  	var s = document.getElementsByTagName("script")[0]; 
			 	s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 12 :  
			if(agentWap){
				//ga=function(){console.log('不存在GA代码');}
				}
			else if(agentWeb){
				//ga=function(){console.log('不存在GA代码');}
				}
			else{
				//ga=function(){console.log('不存在GA代码');}
				}
			/* google 统计代码 */
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
			ga('create', 'UA-55836882-1', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-c1b2f5cc627502206c835c8b79a6627c"/*tpa=http://hm.baidu.com/hm.js?c1b2f5cc627502206c835c8b79a6627c*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 13 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			ga=function(){
					//console.log('不存在GA代码');
					}
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-ca4e55d734b73886642fedff72db7d23"/*tpa=http://hm.baidu.com/hm.js?ca4e55d734b73886642fedff72db7d23*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 14 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			ga=function(){
					//console.log('不存在GA代码');
					}
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-1dc38a2e725b221c72d78890d5c00431"/*tpa=http://hm.baidu.com/hm.js?1dc38a2e725b221c72d78890d5c00431*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 15 :  
			if(agentWap){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-3', 'auto');
				ga('send', 'pageview');
			}
			else if(agentWeb){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

				ga('create', 'UA-55836882-3', 'auto');
				ga('send', 'pageview');
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			//ga=function(){console.log('不存在GA代码');}
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-2263964e5124ecbcd92c19522b12f4f6"/*tpa=http://hm.baidu.com/hm.js?2263964e5124ecbcd92c19522b12f4f6*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 16 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
			}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
			}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
			}
			ga=function(){
					//console.log('不存在GA代码');
					}	
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-f1363f4d8500d015b01e854382f74fbc"/*tpa=http://hm.baidu.com/hm.js?f1363f4d8500d015b01e854382f74fbc*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 17 :  
			if(agentWap){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-6', 'auto');
				ga('send', 'pageview');
			}
			else if(agentWeb){
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-6', 'auto');
				ga('send', 'pageview');
			}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			//ga=function(){console.log('不存在GA代码');}
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-a4e19192dc2b5deb78beb184dd8899c9"/*tpa=http://hm.baidu.com/hm.js?a4e19192dc2b5deb78beb184dd8899c9*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			document.write("<!-- Google Tag Manager --><noscript><iframe src='http://www.googletagmanager.com/ns.html?id=GTM-KH6MCZ'	height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'/*tpa=http://jin808.com/sina1/mvcg/轻松抓好股_files/gtm.js*/});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KH6MCZ');</script><!-- End Google Tag Manager -->");
			break;
		case 18 :  
			if(agentWap){
				//ga=function(){console.log('不存在GA代码');}
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-9', 'auto');
				ga('send', 'pageview');
				}
			else if(agentWeb){
				/* google ga */
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
				ga('create', 'UA-55836882-9', 'auto');
				ga('send', 'pageview');
				}
			else{				
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function(){
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-020ae81c79f725b25b12993407e58604"/*tpa=http://hm.baidu.com/hm.js?020ae81c79f725b25b12993407e58604*/;
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 19 :  
			// if(agentWap){
			// 	/* google ga */
			// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			// })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

			// ga('create', 'UA-55836882-15', 'auto');
			// ga('send', 'pageview');
			// 	}
			// else if(agentWeb){
			// 	 //google ga 
			// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			// })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

			// ga('create', 'UA-55836882-15', 'auto');
			// ga('send', 'pageview');
			// 	}
			// else{
			// 	ga=function(){
			// 		//console.log('不存在GA代码');
			// 		}
			// 	}
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

			ga('create', 'UA-55836882-15', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-a47d28b2b587076b9ccef37522f65095"/*tpa=http://hm.baidu.com/hm.js?a47d28b2b587076b9ccef37522f65095*/;
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 20 :  
			if(agentWap){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else if(agentWeb){
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			else{
				ga=function(){
					//console.log('不存在GA代码');
					}
				}
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-19adfa4100bc4647d3519e0ef799d9f4"/*tpa=http://hm.baidu.com/hm.js?19adfa4100bc4647d3519e0ef799d9f4*/;
				var s = document.getElementsByTagName("script")[0]; 
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 21 :  
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

		  ga('create', 'UA-55836882-16', 'auto');
		  ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-19380fa80c1a764e8974edfae3222e29"/*tpa=http://hm.baidu.com/hm.js?19380fa80c1a764e8974edfae3222e29*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 22 :  
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

			ga('create', 'UA-55836882-17', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-c657530a42cfd4c867143c279ec84124"/*tpa=http://hm.baidu.com/hm.js?c657530a42cfd4c867143c279ec84124*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 23 :  
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		    })(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

		    ga('create', 'UA-55836882-18', 'auto');
		    ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-4f270e8941894d535774cfdde6e99db5"/*tpa=http://hm.baidu.com/hm.js?4f270e8941894d535774cfdde6e99db5*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 24 :  
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');

			ga('create', 'UA-55836882-19', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-b5396d6d8767e93d916229751e07df6e"/*tpa=http://hm.baidu.com/hm.js?b5396d6d8767e93d916229751e07df6e*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 25:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-20', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			 var _hmt = _hmt || [];
				(function() {
				  var hm = document.createElement("script");
				  hm.src = "../../../../hm.baidu.com/hm.js-f69592bc386d5ddd1d09f7d97a8843cf"/*tpa=http://hm.baidu.com/hm.js?f69592bc386d5ddd1d09f7d97a8843cf*/;
				  var s = document.getElementsByTagName("script")[0];
				  s.parentNode.insertBefore(hm, s);
				})();
			  break;
		case 26:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-21', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-3b1d7c55f546c45e85e82bf072030b4b"/*tpa=http://hm.baidu.com/hm.js?3b1d7c55f546c45e85e82bf072030b4b*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 27:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-23', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-11e6a50c0c83b52b78203db599328480"/*tpa=http://hm.baidu.com/hm.js?11e6a50c0c83b52b78203db599328480*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 28:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-24', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-81e3db640c4a896c526d3b007c429311"/*tpa=http://hm.baidu.com/hm.js?81e3db640c4a896c526d3b007c429311*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 29:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-25', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-94cf443ac05752c2d3fa2b029f312c7c"/*tpa=http://hm.baidu.com/hm.js?94cf443ac05752c2d3fa2b029f312c7c*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 30:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-26', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-3c615a922ea9da804b3fe37a7bb54365"/*tpa=http://hm.baidu.com/hm.js?3c615a922ea9da804b3fe37a7bb54365*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 31:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-27', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-ee6126e73a4da46302e230a161215a39"/*tpa=http://hm.baidu.com/hm.js?ee6126e73a4da46302e230a161215a39*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 32:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-28', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-cef321b3d24ef2b55fcc4cc5e0291f84"/*tpa=http://hm.baidu.com/hm.js?cef321b3d24ef2b55fcc4cc5e0291f84*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 33:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-33', 'auto');
			  ga('send', 'pageview');
			  /* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-846a01f022ae963b3c68879ec9be86c1"/*tpa=http://hm.baidu.com/hm.js?846a01f022ae963b3c68879ec9be86c1*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 34:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
			ga('create', 'UA-55836882-34', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "../../../../hm.baidu.com/hm.js-739e8dae4ac3d813fd28021621a828e1"/*tpa=http://hm.baidu.com/hm.js?739e8dae4ac3d813fd28021621a828e1*/;
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 35:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-35', 'auto');
			  ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-fbc408682f0f69ddd10ac72e1b42965f"/*tpa=http://hm.baidu.com/hm.js?fbc408682f0f69ddd10ac72e1b42965f*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 36:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-36', 'auto');
			  ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-bcbdbbe77a0feb87a9f7f3f892a604ec"/*tpa=http://hm.baidu.com/hm.js?bcbdbbe77a0feb87a9f7f3f892a604ec*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 37:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-37', 'auto');
			  ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-624ccb5c4379af2bbf097a44f606157f"/*tpa=http://hm.baidu.com/hm.js?624ccb5c4379af2bbf097a44f606157f*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;
		case 38:
			 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-38', 'auto');
			  ga('send', 'pageview');
			/* baidu 统计代码 */
			  var _hmt = _hmt || [];
			  (function() {
			    var hm = document.createElement("script");
			    hm.src = "../../../../hm.baidu.com/hm.js-a51ef4457b4df7da77e6763b5555f3a9"/*tpa=http://hm.baidu.com/hm.js?a51ef4457b4df7da77e6763b5555f3a9*/;
			    var s = document.getElementsByTagName("script")[0]; 
			    s.parentNode.insertBefore(hm, s);
			  })();
			break;
		case 39:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-39', 'auto');
			  ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-b53cfb08e76a03bc3b34960e6560d171"/*tpa=http://hm.baidu.com/hm.js?b53cfb08e76a03bc3b34960e6560d171*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
			break;			
		case 40:
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-55836882-41', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			var hm = document.createElement("script");
			hm.src = "../../../../hm.baidu.com/hm.js-7b5cdefaa04117604ee63fdf9651e1ca"/*tpa=http://hm.baidu.com/hm.js?7b5cdefaa04117604ee63fdf9651e1ca*/;
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(hm, s);
			})();

			break;
		case 41:
			  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-55836882-14', 'auto');
			  ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-6078826a5c1c35f9c74b2b695b376ba9"/*tpa=https://hm.baidu.com/hm.js?6078826a5c1c35f9c74b2b695b376ba9*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();

			break;
		case 42:
			  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			  ga('create', 'UA-55836882-32', 'auto');
			  ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "../../../../hm.baidu.com/hm.js-3a998aa9937c2e31fed8d2e0fe6f5437"/*tpa=http://hm.baidu.com/hm.js?3a998aa9937c2e31fed8d2e0fe6f5437*/;
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();

			break;
		default : ga=function(){
					//console.log('不存在GA代码');
					}
	}

	
function createUrlStr(opts){
	if(opts){
		return parent.window.location.pathname.replace('http://jin808.com/sina1/mvcg/轻松抓好股_files/index.html','');
	}else{
		return window.location.pathname.replace('http://jin808.com/sina1/mvcg/轻松抓好股_files/index.html','');		
	}
}

/* 用于98.cn 官网增加统计代码 */
function _addTJCode(url){
	url = url.split(".")[0];
	url = url.split('//')[1];
	
	switch(url){
		case "kh" :
		case "lsp" : 
		case "diagnosis" :
		case "taijiline" :  
		case "liveroom" : 
		case "quote" : 
		case "services" : 
		case "guide" : 
		case "aboutytx" : 
			/* google 统计代码 */	
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','../../../../www.google-analytics.com/analytics.js'/*tpa=http://www.google-analytics.com/analytics.js*/,'ga');
			ga('create', 'UA-55836882-1', 'auto');
			ga('send', 'pageview');
			/* baidu 统计代码 */
			var _hmt = _hmt || [];
			(function() {
			  	var hm = document.createElement("script");
			  	hm.src = "http://hm.baidu.com/hm.js?dc226db6b425cbf23eac7b6d9ece4828";
			  	var s = document.getElementsByTagName("script")[0]; 
			 	s.parentNode.insertBefore(hm, s);
			})();
		break;
	}	
}