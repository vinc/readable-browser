$('a').on('click', function(e) {
  var url = $(this).attr('href');
  var link = '/article?url=' + encodeURIComponent(url);

  console.log(link);
  window.location = link;
  e.preventDefault();
});

$('.navbar-toggler').on('click', function(e) {
  $('html').toggleClass('navbar-expanded');
});

$(document).on('click', function(e) {
  var navbar = $('.navbar');
  if (!navbar.is(e.target) && navbar.has(e.target).length === 0) {
    $('html').removeClass('navbar-expanded');
  }
});
