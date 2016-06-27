window.onload=function(){
	var html=document.getElementsByTagName('html')[0];
	function getFontSize(){
		var width=document.documentElement.clientWidth||document.body.clientWidth;
		var fontSize=width*100/640;
		html.style.fontSize=fontSize+"px";
		return fontSize;
	}
 	html.style.fontSize=getFontSize()+"px";
	window.onresize=function(){
		setTimeout(function(){
			html.style.fontSize=getFontSize()+"px";
		},100)
	}
}