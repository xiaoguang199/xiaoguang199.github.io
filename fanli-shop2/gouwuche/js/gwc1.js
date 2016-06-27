			/*页面随着窗口大小变化*/
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
	$(".right1").on("click",function(){
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
		if(dj!="right1" && dj!="img"){
			if(dj!="dian"){
				$(".right1").css("background", "");
				$(".tankuang").css("display","none");
				j=false;
			}
		}
	})
})






