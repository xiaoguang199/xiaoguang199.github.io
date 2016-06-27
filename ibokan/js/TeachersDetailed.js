$(function(){
//↓↓↓回到顶部
	(function(){
		var up = document.getElementById('up');
		$(window).scroll(function(){
			var winT = $(window).scrollTop();
			var winH = $(window).height()/2;
			if(winT>winH){
				up.style.display = 'block';
			}else{
				up.style.display = 'none';
			}
		})
		$('#up').click(function(){
			$('html,body').animate({
				scrollTop: '0'
			},'slow')
		})
	})();
	
//↓↓↓zoom
	(function(){
		var wid = document.documentElement.clientWidth;
		var rule= wid/640;
		document.body.style.zoom = rule;
		$("body").css({
			display:"block",
		})
		window.onresize = function(){
			var wid = document.documentElement.clientWidth;
			var rule= wid/640;
			document.body.style.zoom = rule;
		}
	})();
})

