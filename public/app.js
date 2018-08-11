var init = function() {
  var typeface = localStorage.getItem('typeface') || 'Roboto Slab';
  $('#input-typeface').val(typeface);
  if (typeface !== 'Roboto Slab') {
    WebFont.load({ google: { families: [typeface + ':400,700'] } });
    $('body').css('font-family', typeface);
  }

  switch (localStorage.getItem('alignment')) {
  case 'justify':
    $('article p').css('text-align', 'justify');
    $('#input-alignment').val('justify');
    break;
  default:
    $('article p').css('text-align', 'left');
    $('#input-alignment').val('left');
    break;
  }

  switch (localStorage.getItem('theme')) {
  case 'dark':
    $('body').addClass('bg-dark');
    $('body').removeClass('bg-white');
    $('#input-alignment').val('dark');
    break;
  default:
    $('body').addClass('bg-white');
    $('body').removeClass('bg-dark');
    $('#input-alignment').val('light');
    break;
  }

  console.log('Settings loaded');
};

$(function() {
  init();

  $('.cloak').removeClass('cloak');

  $('article a').each(function() {
    var link = $(this);
    var href = link.attr('href');

    if (href && href[0] !== '#') {
      link.attr('href', '/article?url=' + encodeURIComponent(href));
    }
  });

  $('input[name=theme]').on('change', function(e) {
    localStorage.setItem('theme', $(e.target).val());
    init();
  });

  $('input[name=typeface]').on('change', function(e) {
    localStorage.setItem('typeface', $(e.target).val());
    init();
  });

  $('input[name=alignment]').on('change', function(e) {
    localStorage.setItem('alignment', $(e.target).val());
    init();
  });

  $('.navbar-toggler').on('click', function(e) {
    $('html').toggleClass('navbar-expanded');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.navbar').length) {
      $('html').removeClass('navbar-expanded');
    }
  });
});
