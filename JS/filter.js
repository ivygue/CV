$(document).ready(function() {
	
	$('#all').addClass('current-li');
	$(this).removeClass('current-li');
	
	$('subnav > ul > li').click(function() {
		
		$('#all').removeClass('current-li');
		$('#uiux').removeClass('current-li');
		$('#web').removeClass('current-li');
		$('#logo').removeClass('current-li');
		$('#print').removeClass('current-li');
		$('#personal').removeClass('current-li');
		$('subnav > ul > li .current').removeClass('current');
		$(this).addClass('current-li');

		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('.portfolio > category.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('.portfolio > category').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
		
	});
	
});

