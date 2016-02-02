var $container = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('.control').on( 'click', 'a', function(e) {
  var filterValue = $(this).attr('data-filter');
  e.preventDefault();
  $container.isotope({ filter: filterValue });
});