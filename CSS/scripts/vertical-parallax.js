$(document).ready(function() { //when the document is ready
				
						
	redrawDotNav();		
	parallaxScroll();	
	
	$(window).scroll(function() {
    parallaxScroll();
	redrawDotNav();
    });

	$('#navfirst').click(function(event) {
		event.preventDefault();
		scrollToID('#first', 1000);
	});	
	$('#navsecond').click(function(event) {
		event.preventDefault();
		scrollToID('#second', 1000);
	});
	$('#navthird').click(function(event) {
		event.preventDefault();
		scrollToID('#third', 1000);
	});
	$('#navfourth').click(function(event) {
		event.preventDefault();
		scrollToID('#fourth', 1000);	
	});

	$('#navigation a').hover(function(e) {
		$(this).hoverFlow(e.type, { opacity: 1.0 }, hoverSpeed);
	}, function(e) {
		if( $(this).hasClass('current') || $('html, body').is(':animated') ) return false;
		$(this).hoverFlow(e.type, { opacity: 0.2 }, hoverSpeed);
	});		
	
	
	$("#contact form").validate({
		rules : {
			email : {
				required : true,
				email : true
			},
		}
	});
	
	
});


function redrawDotNav(){	
$('#navfirst').removeClass('current');
$('#navsecond').removeClass('current');
			$('#navthird').removeClass('current');		
			$('#navfourth').removeClass('current');		
	
	var navOffset 	= 15,
		fadeSpeed 	= 300,
		hoverSpeed 	= 200;	
	
	var winScroll = $(window).scrollTop();
		

	var minTop = $('body').offset().top,
		maxTop = $('body').height()+minTop-$('#navigation').height();		
	
	var currentScroll = $(window).scrollTop();
	$('#navigation').css({'top' : minTop});
	
	if( currentScroll > minTop && currentScroll < maxTop ) {
		
		$('#navigation').css({'top' : navOffset+'px'});		
	}
	if( currentScroll <= minTop ) {
		
		$('#navigation').css({'top' : minTop-currentScroll});
	}
	if( currentScroll >= maxTop ) {
		
		$('#navigation').css({'top' : maxTop-currentScroll});
	}
	
		
	var secondTop 	= Math.floor($('#second').offset().top),
		thirdTop 	= Math.floor($('#third').offset().top),
		fourthTop 	= Math.floor($('#fourth').offset().top);	
	console.log(secondTop+" "+thirdTop+" "+fourthTop);	
		
		if( winScroll > minTop && winScroll < maxTop ) {
			
			$('#navigation').css({'top' : navOffset+'px'});		
		}
		if( winScroll <= minTop ) {
			
			$('#navigation').css({'top' : minTop-winScroll});
		}
		if( winScroll >= maxTop ) {
			
			$('#navigation').css({'top' : maxTop-winScroll});
		}

		
		if(	(winScroll + navOffset) < secondTop ) {
			$('#navfirst').css({'color' : '#E71D73'});
			$('#navsecond').css({'color' : '#666'});
			$('#navthird').css({'color' : '#666'});
			$('#navfourth').css({'color' : '#666'});

			$('#navfirst').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 0.5 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 0.5 }, fadeSpeed);
			$('#navfourth').stop().animate({ opacity: 0.5 }, fadeSpeed);
		
			$('#navfirst').addClass('current');
			$('#navsecond').removeClass('current');
			$('#navthird').removeClass('current');		
			$('#navfourth').removeClass('current');		
			
		} else if ( (winScroll + navOffset) < thirdTop && (winScroll <= maxTop) ) {
			$('#navfirst').css({'color' : '#666'});
			$('#navsecond').css({'color' : '#E71D73'});
			$('#navthird').css({'color' : '#666'});
			$('#navfourth').css({'color' : '#666'});
			
			$('#navsecond').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navfirst').stop().animate({ opacity: 0.5 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity: 0.5 }, fadeSpeed);
			$('#navfourth').stop().animate({ opacity: 0.5 }, fadeSpeed);
			
			$('#navsecond').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navthird').removeClass('current');		
			$('#navfourth').removeClass('current');			
		} else if ( (winScroll + navOffset) < fourthTop && (winScroll <= maxTop) ){
			$('#navfirst').css({'color' : '#666'});
			$('#navsecond').css({'color' : '#666'});
			$('#navthird').css({'color' : '#E71D73'});
			$('#navfourth').css({'color' : '#666'});
			
			$('#navthird').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 0.5 }, fadeSpeed);			
			$('#navfirst').stop().animate({ opacity: 0.5 }, fadeSpeed);
			$('#navfourth').stop().animate({ opacity: 0.5 }, fadeSpeed);
			
			$('#navthird').addClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').removeClass('current');		
			$('#navfourth').removeClass('current');			
		} else {
			$('#navfirst').css({'color' : '#666'});
			$('#navsecond').css({'color' : '#666'});
			$('#navthird').css({'color' : '#666'});
			$('#navfourth').css({'color' : '#E71D73'});
			
			$('#navfourth').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity:  0.5 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 0.5 }, fadeSpeed);			
			$('#navfirst').stop().animate({ opacity: 0.5 }, fadeSpeed);
			
			$('#navfourth').addClass('current');
			$('#navthird').removeClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').removeClass('current');				
		}
		
		if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
			$('#navfirst').css({'color' : '#666'});
			$('#navsecond').css({'color' : '#666'});
			$('#navthird').css({'color' : '#666'});
			$('#navfourth').css({'color' : '#E71D73'});
			
			$('#navfourth').stop().animate({ opacity: 1.0 }, fadeSpeed);
			$('#navthird').stop().animate({ opacity:  0.5 }, fadeSpeed);
			$('#navsecond').stop().animate({ opacity: 0.5 }, fadeSpeed);			
			$('#navfirst').stop().animate({ opacity: 0.5 }, fadeSpeed);
			
			$('#navfourth').addClass('current');
			$('#navthird').removeClass('current');
			$('#navfirst').removeClass('current');
			$('#navsecond').removeClass('current');			
		}	
}


function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.20))+'px');
}

function scrollToID(id, speed){
	var offSet = 15;
	var targetOffset = $(id).offset().top-offSet;
	$('html, body').animate({scrollTop:targetOffset}, speed);
}
