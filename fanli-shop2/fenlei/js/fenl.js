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



 
$(function(){
	/*ajax 动态获取article的内容*/
	oUrl("fenl2.html");/*页面加载完成时调用一下fenl2.html*/
	$(".celan").find("a").click(function(){
		oUrl($(this).attr("href"));
		$(".celan").find("li").css({background:"#f5f5f5"});
		$(".celan").find("a").css("color","#969696");/*去掉默认的颜色*/
		$(this).css({color:"#fe6e50"});
		$(this).parents("li").css({background:"white"});/*添加新的背景及字体颜色*/
		return false;
	});
	function oUrl(Url){
		$.get(Url, function(data){
		  	$(".artc").html(data);
		});
	}
	
	/*youce*/
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