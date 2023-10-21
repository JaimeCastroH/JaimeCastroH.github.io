(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		
			//===== Responsive mainmenu Start
		       $('#mobile-menu-active').meanmenu({
		            meanScreenWidth: "767",
		            meanMenuContainer: '.menu-prepent',
		            onePage: true,
		        });
		       //===== Responsive mainmenu End


		         //===== Sticky Menu-Bar Start
		        $(window).on('scroll',function(event) {    
		            var scroll = $(window).scrollTop();
		             if (scroll < 100) {
		                 $("header").removeClass("sticky");
		             }else{
		                 $("header").addClass("sticky");
		             }
		         });
		        //===== Sticky Menu-Bar End


			
 

		        // Owl-Carousel Plugin Active Start
		        $(".hero-text-slider").owlCarousel({
		            items:1,
		            nav:false,
		            dot:false,
		            loop:true,
		            margin:0,
		            autoplay:true,
		            autoplayTimeout:3000,
					smartSpeed:1000,
					animateOut: 'fadeOut',
       				animateIn: 'fadeIn',

		        });
				// Owl-Carousel Plugin Active End

				

			
			

	});



    jQuery(window).load(function(){


    });


}(jQuery));	





