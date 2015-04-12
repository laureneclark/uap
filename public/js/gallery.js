currentUser = undefined;

$(document).ready(function() {
  $.get('/users/current', function(response) {
    if (response.content.loggedIn) {
      currentUser = response.content.user;
    }
    loadHomePage();
  });
});

var loadPage = function(template, data) {
  data = data || {};
  $('#gallery').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
  if (currentUser) {
    loadGalleryPage();
  } else {
    window.location.href = '/';
  }
};

var loadGalleryPage = function() {
	$.get('/users/exhibits', function(response) {
		loadPage('gallery');
	});
}