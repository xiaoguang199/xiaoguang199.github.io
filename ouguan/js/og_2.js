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
	$("#down").on("click",function(){
		$.ajax({
			url:'http://sjz.bokanedu.com/tgr/api/?day=52-2&type=zj',
			success:function(d){
				var data=eval("("+d+")")
				console.log(data);
				window.localStorage.setItem("data",d);
				var HTML="";
				var arr=[];
				for (var i = 0; i <data.data.length; i++) {
					arr.push(data.data[i].tele);
					console.log(arr)
					var ss=arr[i].replace(arr[i].slice(4,6),"***")
					if (i<10) {
						HTML+="<li><span class='number'>0"+i+"</span><span class='qi'>期</span><span class='name'>"+data.data[i].name+"</span><span class='phone'>"+ss+"</span><span class='jiang'>"+data.data[i].gift+"</span></li>";
					}else{
						HTML+="<li><span class='number'>"+i+"</span><span class='qi'>期</span><span class='name'>"+data.data[i].name+"</span><span class='phone'>"+ss+"</span><span class='jiang'>"+data.data[i].gift+"</span></li>";
					}
					$("#form").html(HTML);
					$("#form li:lt(9)").hide();
				};
			}
		})
	})
	$("#up").on("click",function(){
		var data2=window.localStorage.getItem("data");
		var data=data=eval("("+data2+")")
		var HTML="";
		var arr=[];
		for (var i = 0; i <data.data.length; i++) {
			arr.push(data.data[i].tele);
			console.log(arr)
			var ss=arr[i].replace(arr[i].slice(4,6),"***")
				if (i<10) {
					HTML+="<li><span class='number'>0"+i+"</span><span class='qi'>期</span><span class='name'>"+data.data[i].name+"</span><span class='phone'>"+ss+"</span><span class='jiang'>"+data.data[i].gift+"</span></li>";
				}else{
					HTML+="<li><span class='number'>"+i+"</span><span class='qi'>期</span><span class='name'>"+data.data[i].name+"</span><span class='phone'>"+ss+"</span><span class='jiang'>"+data.data[i].gift+"</span></li>";
				}

		};
		$("#form").html(HTML);
		$("#form li:gt(8)").hide();		
	
	})
}