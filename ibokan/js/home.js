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
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        autoplay : 2000,
        autoplayDisableOnInteraction:false,


    });
    var partner=document.getElementById('partner_content').getElementsByTagName('a');
    for (var i = 0; i < partner.length; i++) {
    	partner[i].style.background="url(img/qy_"+(i+1)+".png)"
    };
})

