$('a').each(function() {
  var link = $(this);
  var href = link.attr('href');

  if (href && href[0] !== '#') {
    link.attr('href', '/article?url=' + encodeURIComponent(href));
  }
});

$('.navbar-toggler').on('click', function(e) {
  $('html').toggleClass('navbar-expanded');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest('.navbar').length) {
    $('html').removeClass('navbar-expanded');
  }
});

$('.cloak').removeClass('cloak');
