/*$(function () {
	$('.kernel_key li').on('click',function () {
		var index = $('.kernel_key li').index(this);
		$('.kernel_key li span').removeClass('choice').eq(index).addClass('choice');
		$('.kernel_val').hide().eq(index).show();
	})
})*/
//window.onload = function () {
	var index = 0;
	var oKey = document.getElementById('js_key').getElementsByTagName('li');
	var oSpan = document.getElementById('js_key').getElementsByTagName('span');
	var oVal = document.getElementById('js_val').getElementsByTagName('div');
	for(var i = 0; i < oKey.length; i++){
	  oKey[i].index = i;
	  oKey[i].onclick = function () {
	    if(index != this.index){
	      oSpan[index].className = '';
	      oVal[index].style.display = 'none'
        index = this.index;
        oSpan[index].className = 'choice';
        oVal[index].style.display = 'block';
	    }
	  }
	}
//}