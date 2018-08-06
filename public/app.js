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
  if (!$(e.target).closest('.navbar').length) {
    $('html').removeClass('navbar-expanded');
  }
});
