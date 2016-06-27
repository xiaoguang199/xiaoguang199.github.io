$(function(){
	$('table .change').each(function(i){
		var maxH = $(this).height()*3;
		var H = $(this).height();
		var time=null;
		var stop=0;
		var _this=this;

//		console.log(maxH)
		clearInterval(time);
		time = setInterval(move,2000)
		function move(){
			if(stop==maxH){
				if(H>0){H=-H;};
			}else if(stop==0){
				if(H<0){H=-H;};
			}
			stop+=H
			$(_this).animate({
				scrollTop: stop
			},600)
		}
	})
})
