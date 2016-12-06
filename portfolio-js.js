
	$(function(){

		var scroll_pos = 0;
		var scroll_time;

		$(window).scroll(function() {
    		clearTimeout(scroll_time);
    		var current_scroll = $(window).scrollTop();

    		if (current_scroll >= $('#header').outerHeight()) {
        		if (current_scroll <= scroll_pos) {
            		$('.hidden-menu').removeClass('hidden');    
        		}
        			else {
            			$('.hidden-menu').addClass('hidden');  
        			}
        			
   				 }else{
    				$(".hidden-menu").addClass("hidden");
   	 				}

   


    scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
    }, 100);
});

	});
