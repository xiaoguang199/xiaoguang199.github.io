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