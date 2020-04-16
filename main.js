//action de la sidebar
$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 500) {
			$('.sidebar').css({"opacity" : "1"})
		}else {
			$('.sidebar').css({"opacity" : "0.5"})
		}
	})
})
