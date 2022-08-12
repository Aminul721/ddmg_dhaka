jQuery(window).scroll(function(){
	if (jQuery(window).scrollTop() >= 24) {
		jQuery('.sticky_header').addClass('is_stuck');
	}
	else {
		jQuery('.sticky_header').removeClass('is_stuck');
	}
});

(function($){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});
	jQuery(".menu_bar").click(function() { 
		jQuery('.mobile_menu').addClass('mobile_menu_open'); 
		jQuery('.mobile_menu').fadeIn('fast'); 
	});
	jQuery(".menu_close").click(function() { 
		jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
		jQuery('.mobile_menu').fadeOut('fast'); 
	});
})(jQuery);



(function($) { "use strict";
	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})	
	});
	
})(jQuery); 

jQuery(function(){
	jQuery('.working_step_menu ul li a').click(function () { 
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top -170
		}, 1500);
		return false;
	});
});


jQuery.fn.isInViewport = function() {
    var elementTop = jQuery(this).offset().top;
    var elementBottom = elementTop + jQuery(this).outerHeight();

    var viewportTop = jQuery(window).scrollTop();
    var viewportBottom = viewportTop + jQuery(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


jQuery(window).on('resize scroll', function() {
    if(jQuery('.sticky-footer-view').length > 0) {
        if (jQuery('.sticky-footer-view').isInViewport()) {
            jQuery('.two_sticky_btn').removeClass('is_stuck_now');
        } else {
            jQuery('.two_sticky_btn').addClass('is_stuck_now');
        }
    }
});


jQuery(function () {
	jQuery(".tab_content").hide();
	jQuery("ul.tabs li:first").addClass("active").show(); 
	jQuery(".tab_content:first").show();
	jQuery("ul.tabs li").click(function() {
		jQuery("ul.tabs li").removeClass("active"); 
		jQuery(this).addClass("active"); 
		jQuery(".tab_content").hide(); 
		var activeTab = jQuery(this).find("a").attr("href"); 
		jQuery(activeTab).fadeIn(); 
		return false;
	});
});

(function(jQuery){
	jQuery(window).on('load', function() {
		handlePreloader();
	});
	function handlePreloader() {
		if(jQuery('.preloader').length){
			// jQuery('body').delay(3000).removeClass('active-preloader-ovh');
			// jQuery('.preloader').delay(4000).fadeOut();
			jQuery('.preloader').delay(3000).fadeOut()
		}
	}	
})(jQuery);

(function($){
	if($(window).width() < 991) {
		$('.rm-mb').html('');
	} else {
		$('.rm-desk').html('');
	}
})(jQuery);