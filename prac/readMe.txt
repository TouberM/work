commit n-1
2017-5-11
	重构168gz
	BUG表单提交
	使用easyDialog弹出插件会使每个弹出框移动到HTML最后
	从而使jq获取多个form的index会重复
	例如:总共有4个form
	第一次弹出A 则A的index为3
	再弹出B 则B的index为3
	此时B的一系列操作就会影响到a
	
	解决办法
	点击表单内按钮时  获取到其父元素form  var parent = $(this).parent('form');
	需要保证其上只有一层
	传入parent到内部函数中使用
	获取其子元素 parent.find('className');

	jq .val()和.attr('value')的区别http://www.jb51.net/article/55695.htm
	.val()设置的是input输入框的内容;但不能改变所有浏览器行内元素的value值
	.attr可以改变其值
	
	
	/*Done 2017-5-12 */
	sidebar 的radio按钮有问题
	上访的元素浮动影响
	solve:在radio父元素上方加了一层空的div
commit n-2
2017-5-15
	修改链接地址问题
	Done
		1.banner分页table中'点击申请模拟账户'添加链接
		2.交易产品 栏目页 table '点击申请模拟账户'添加链接