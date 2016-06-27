//$(function(){
//			/*页面随着窗口大小变化*/
//	function initScale() {
//		var width = window.innerWidth;
//		document.querySelector("html").style.fontSize = 24 * (width / 640) + "px";
//	}
//	initScale();
//	window.onresize = function() {
//		setTimeout(function() {
//			initScale();
//		}, 100)
//	}
//})

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
	/*搜索框获取焦点事件*/
	$("div.header").find("input").focus(function(){
		$("div.sousuo").css("display","block");
		$("div.sousuo div.tou").find("input").focus();
		$("body").css("overflow-y","hidden");
		ShowDiv();
	})
	/*阻止手机端滚动条*/
//	function ShowDiv(){
//      document.ontouchmove=function(e){
//          e.preventDefault && e.preventDefault();
//          e.returnValue=false;
//          e.stopPropagation && e.stopPropagation();
//          return false;
//    }    
// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})