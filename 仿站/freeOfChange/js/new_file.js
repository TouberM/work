$(function(){  
	chage()
	Height()
    var winHeight = $(document).scrollTop(); 
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop(); 
        if (scrollY < 550 || scrollY>1700) {
            $('#win').hide();
        } 
        else {
            $('#win').show();
        }
     });
});

window.onresize=function(){
	chage();
	Height();
}

function chage(){
	var winWidth=document.documentElement.clientWidth||document.body.clientWidth ;	
	var Obj=document.getElementById("win");
	var ObjWidth=Obj.offsetWidth;
	if(winWidth>=1818){		
		Obj.style.left=(winWidth-1000)/2+1000+200+'px';		
	}else{
		Obj.style.left="auto";
		Obj.style.right=0+'px';
	}
}

function Height(){
	var winHeight=document.documentElement.clientHeight||document.body.clientHeight ;
	var This=document.getElementById("win");
	This.style.marginTop=(winHeight/2-201)+'px';	
}