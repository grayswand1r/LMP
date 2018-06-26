(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
					$("nav").css('background-color', 'white');
					$(".navbar-nav>li>a").css('color', 'black');
					$(".navbar-nav>li>a").css('text-shadow', '4px 4px 8px white');
	
			} else {
					$("nav").css('background-color', 'transparent');
					$(".navbar-nav>li>a").css('color', 'white');
					$(".navbar-nav>li>a").css('text-shadow', '4px 4px 8px black');
			}
			
			
		});

	
	});

});
  }(jQuery));