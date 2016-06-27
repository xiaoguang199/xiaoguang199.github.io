window.onload=function(){
	var arr=[[],[],[],[],[],[]];
	$.ajax({
		type:"get",
		url:"http://180.76.185.227/lj/zepto/zeptoPhp1.php",
		success:function(data){
			console.log(data)
			arr.push(data.msg,data.msg1,data.msg2,data.msg3,data.msg4,data.msg5);
			arr[0].push(data.msg.dot,data.msg.dot2,data.msg.icon);
			arr[1].push(data.msg1.photo,data.msg1.title);
			arr[2].push(data.msg2.btn,data.msg2.btn2,data.msg2.people,data.msg2.photo,data.msg2.photo2,data.msg2.title);
			arr[3].push(data.msg3.btn,data.msg3.btn2,data.msg3.people,data.msg3.photo,data.msg3.photo2,data.msg3.title);
			arr[4].push(data.msg4.btn,data.msg4.btn2,data.msg4.people,data.msg4.photo,data.msg4.photo2,data.msg4.title);
			arr[5].push(data.msg5.btn,data.msg5.photo);
			console.log(arr)
			
		}	
	})
}