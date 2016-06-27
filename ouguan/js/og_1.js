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
	$("#btn").click(function(){
		if (($("#name").val().length>0)&&($("#mobile").val().length>0)) {
			var x={name:$("#name").val(),mobile:$("#mobile").val()}
			$.ajax({
				type:"post",
				url:"http://sjz.bokanedu.com/tgr/api/?day=52&&type=og",
				data:x,
				success:function(d){
					console.log(d);
					var _d=eval("("+d+")")
					console.log(_d.msg);
					alert(""+_d.msg+"");
					window.location.href="og_4.html";
				}
			})
		};
		
	})
}