	var html = document.getElementsByTagName("html")[0];
		function getFontSize(){
			var width=document.documentElement.clientWidth
			||document.body.clientWidth+"px";
			var fontSize=(24/640)*width;
			return fontSize;
		}
		html.style.fontSize=getFontSize()+"px";
		window.onresize=function(){
			setTimeout(function(){
			html.style.fontSize=getFontSize()+"px";
			},100)
	 	}

	/*youce*/	
$(function(){
	var j=false;
	$(".right").on("click",function(){
		if(j!==true) {
			$(this).css("background", "#f75b42");
			$(".tankuang").css("display","block");
			j=true;
		}else{
			$(this).css("background", "");
			$(".tankuang").css("display","none");
			j=false;
		}
			//console.log(j);

	})
	/***********点击除了class=dian的地方时让tankuang隐藏*************/
	$(document).click(function(event){
		var dj=event.target.className;
		console.log(dj);
		if(dj!="right" && dj!="img"){
			if(dj!="dian"){
				$(".right").css("background", "");
				$(".tankuang").css("display","none");
				j=false;
			}
		}
	})
		
		
})		