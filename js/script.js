// On your marks, get set...
$(document).ready(function(){
	
	$("img[rel]").overlay();
	
	$(".fancybox").fancybox();
    
						
	$('#weekendlist2').hide();					
	// Cache the Window object
	$window = $(window);
	
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
	
	
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
		
		// When the window is scrolled...
	    $(window).scroll(function() {
	
			redrawDotNav();
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
	
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 
				
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					
					// Cache the sprite
					var $sprite = $(this);
					
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					
					$sprite.css({ backgroundPosition: coords });													
					
				}); // sprites
			
			
			}; // in view
	
		}); // window scroll
			
	});	// each data-type

	/* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );

	/* Next/prev and primary nav btn click handlers */
	$('a.first').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
		});
    	return false;
	});
    $('a.second').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#second').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
     $('a.third').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#third').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
    $('a.fourth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#fourth').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
	$('a.fifth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#fifth').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
 	$('a.sixth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#sixth').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
    $('a.seventh').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#seventh').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
    $('a.eighth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#eighth').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
    $('a.ninth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#ninth').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
    $('a.tenth').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#tenth').offset().top
    	}, 1000, function() {
		});
    	return false;
    });


}); // document ready

function nextList() {
	$('#weekendlist2').fadeIn();	
	$('#weekendlist1').hide();												
}

function prevList() {
	$('#weekendlist1').fadeIn();	
	$('#weekendlist2').hide();												
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#second').offset().top - (($('#third').offset().top - $('#second').offset().top) / 2);
	var section3Top =  $('#third').offset().top - (($('#fourth').offset().top - $('#third').offset().top) / 2);
	var section4Top =  $('#fourth').offset().top - (($('#fifth').offset().top - $('#fourth').offset().top) / 2);
	var section5Top =  $('#fifth').offset().top - (($('#sixth').offset().top - $('#fifth').offset().top) / 2);
	var section6Top =  $('#sixth').offset().top - (($('#seventh').offset().top - $('#sixth').offset().top) / 2);
	var section7Top =  $('#seventh').offset().top - (($('#eighth').offset().top - $('#seventh').offset().top) / 2);
	var section8Top =  $('#eighth').offset().top - (($('#ninth').offset().top - $('#eighth').offset().top) / 2);
	var section9Top =  $('#ninth').offset().top - (($('#tenth').offset().top - $('#ninth').offset().top) / 2);
	var section10Top =  $('#tenth').offset().top - (($(document).height() - $('#tenth').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.first').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.second').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.third').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.fourth').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.fifth').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.sixth').addClass('active');
	} else if ($(document).scrollTop() >= section7Top && $(document).scrollTop() < section8Top){
		$('nav#primary a.seventh').addClass('active');
	} else if ($(document).scrollTop() >= section8Top && $(document).scrollTop() < section9Top){
		$('nav#primary a.eighth').addClass('active');
	} else if ($(document).scrollTop() >= section9Top && $(document).scrollTop() < section10Top){
		$('nav#primary a.ninth').addClass('active');
	} else if ($(document).scrollTop() >= section10Top){
		$('nav#primary a.tenth').addClass('active');
	} 
	
}