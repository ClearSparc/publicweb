(function($){
    "use strict";

	$(document).ready(function(){
		
	    $('#slider1').revolution({
	    	sliderLayout:"fullscreen",
			delay:12000,
			startwidth:1170,
			startheight:680,
			hideThumbs:10,

			navigation: {
				onHoverStop: "off",
				touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
	        	arrows:{
	        		enable:true,
	        		style: "hades",
	        		tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div></div>',
	        		left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },

	        		hide_onmobile:true
	        	},
	        	bullets:{
		        	enable:false
		        },
	      	},

	      	parallax:{
	      	   type:"scroll",
	      	   levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
	      	   origo:"enterpoint",
	      	   speed:400,
	      	   bgparallax:"on",
	      	   disable_onmobile:"on"
	      	},

			spinner:"spinner4"
		});

		// Youtube bg
	    $('#slider2').revolution({
	    	sliderLayout:"fullscreen",
			delay:12000,
			gridwidth:1600,
			gridheight:600,
			hideThumbs:10,

			navigation: {
				onHoverStop: "off",

				touch: {
                    touchenabled: "false",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
	        	arrows:{enable:false},
	        	bullets:{enable:false},
	      	},

			parallax:{
			   type:"scroll",
			   levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
			   origo:"enterpoint",
			   speed:400,
			   bgparallax:"on",
			   disable_onmobile:"on"
			},

			spinner:"spinner4",
			stopLoop:"off",
			stopAfterLoops:0
		});

	});

	
})(jQuery);