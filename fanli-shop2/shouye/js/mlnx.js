
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
		/********淡入淡出********/
		var i=1;/*图片个数减一*/
		setInterval( function(){
			if(! $(".imgs img").eq(i).is(":hidden")){
                    $(".imgs img").eq(i).fadeOut("slow")
                }else{
                     $(".imgs img").eq(i).fadeIn("slow")
                }
            i--;
            if(i == 0){
                i = 1;
            };
		},3000)


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