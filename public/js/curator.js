currentUser = undefined;
Handlebars.registerPartial('exhibit-preview', Handlebars.templates['exhibit-preview']);

var loadPage = function(template, data) {
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#main-container').html(temp);
};

$(document).on('click', '#create-curator-btn', function(evt) {
  console.log("I clicked create curator");
  var user = currentUser;
  console.log(user);
  evt.preventDefault();
  var formData = helpers.getFormData($("#curator-creation-form"));
  console.log(formData);
  formData.role = 'curator';
  console.log(formData);

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
    console.log(response);
    console.log(currentUser);
    currentUser = user;
    //window.location.href = '/';
    console.log("load curator page I just fucking created a new curator");
    console.log(currentUser);
    window.location.reload(true);
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
  });
});

$(document).on('click', '#create-exhibit-btn', function(evt) {
	//console.log("I Clicked Create");
	evt.preventDefault();
	var formData = helpers.getFormData($("#exhibit-creation-form"));
	formData.dateStart = moment(formData.startDate).toDate();
	formData.dateEnd = moment(formData.endDate).toDate();
	//console.log(formData);
	$.post(
		'/exhibit/',
		formData
	).done(function(response) {
		//console.log("I am done creating");
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
	//console.log("I clicked this");
  	var exhibit_id = $(this).attr('id');
  	$.get('exhibit/' + exhibit_id, function(response) {
  		//console.log(response.createdBy);
  		//console.log(currentUser);
  		//console.log(response.resources);
    //console.log(response.resources);
  		var madeByUser = (response.createdBy === currentUser);
  		//console.log(madeByUser);
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
  console.log("I am loading the curator page");
  console.log(currentUser);
	$.get('users/created', function(response) {
		console.log(response);
      loadCuratorNav();
    	loadPage('curator', {user: currentUser, exhibits: response});
	});
}