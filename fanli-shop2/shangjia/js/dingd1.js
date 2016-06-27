			/*页面随着窗口大小变化*/
	function initScale() {
		var width = window.innerWidth;
		document.querySelector("html").style.fontSize = 24 * (width / 640) + "px";
	}
	initScale();
	window.onresize = function() {
		setTimeout(function() {
			initScale();
		}, 100)
	}
	











