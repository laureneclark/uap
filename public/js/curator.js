currentUser = undefined;
Handlebars.registerPartial('exhibit-preview', Handlebars.templates['exhibit-preview']);

var loadPage = function(template, data) {
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#main-container').html(temp);
};

$(document).on('click', '#create-curator-btn', function(evt) {
  var user = currentUser;
  evt.preventDefault();
  var formData = helpers.getFormData($("#curator-creation-form"));
  formData.role = 'curator';

  if (formData.password !== formData.confirm) {
    $('.error').text('The passwords do not match!');
    return;
  }
  if (!(formData.username.match(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]?)*$/))){
      $('.error').text('Your username is of an invalid format! Your username must begin with a letter and can contain numbers, letters, periods and underscores.');
      return;
  }
  delete formData['confirm'];
  $.post(
    '/users/curator',
    formData
  ).done(function(response) {
    currentUser = user;
    //window.location.href = '/';
    window.location.reload(true);
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
  });
});

$(document).on('click', '#create-exhibit-btn', function(evt) {
	evt.preventDefault();
	var formData = helpers.getFormData($("#exhibit-creation-form"));
	formData.dateStart = moment(formData.startDate).toDate();
	formData.dateEnd = moment(formData.endDate).toDate();
	$.post(
		'/exhibit/',
		formData
	).done(function(response) {
    window.location.reload(true);
	}).fail(function(jqxhr) {
		var response = $.parseJSON(jqxhr.responseText);
		loadPage('curator', {user: currentUser});
	});
});

$(document).on('click', '#curator-panel-btn', function(evt) {
  loadCuratorPage();
})

//Redirect to that Exhibit Page 
$(document).on('click', '#view-exhibit-btn', function(evt) {
  	var exhibit_id = $(this).attr('id');
  	$.get('exhibit/' + exhibit_id, function(response) {
  		var madeByUser = (response.createdBy === currentUser);
  		loadPage('exhibit', {exhibit: response, madeByUser: madeByUser})
	});
});

var loadCuratorNav = function() {
  var template ='curator-nav';
  var data = {}
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#logged-in-nav').html(temp);
}

var loadCuratorPage = function() {
	$.get('users/created', function(response) {
      loadCuratorNav();
    	loadPage('curator', {user: currentUser, exhibits: response});
	});
}