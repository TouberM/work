
//复制事件执行
var copyfun=function(cCompanyId,cwxnumber,cRemark){
	//获取URL
	var LinkUrl =window.location.href;
	var jindata={'CompanyId':''+cCompanyId,'Number': ''+cwxnumber,'LinkUrl':''+LinkUrl,'Type': 1,'Remark':''+cRemark,NiceName:""}
	cgeturks(jindata);
}
//提交
function cgeturks(jindata){
	$.get('http://zy1.dyrt99.com/api/weixin2/add-copy',jindata, function(data, status) {
		var datas=data;
		var statuss=status;
	});
}