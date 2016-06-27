			/*页面随着窗口大小变化*/
	function initScale() {
		var width = window.innerWidth;
		document.querySelector("html").style.fontSize = 24 * (width / 640) + "px";
	}
	initScale();
	window.onresize = function() {
		setTimeout(function() {
			initScale();
		}, 100)
	}
$(function(){
	/****************头部右侧点击选项****************/
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









