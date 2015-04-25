currentUser = undefined;
Handlebars.registerPartial('exhibit-preview', Handlebars.templates['exhibit-preview']);

var loadPage = function(template, data) {
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#main-container').html(temp);
};

/*$(document).on('submit', '#curator-create-submit', function(evt) {
  evt.preventDefault();
  var formData = helpers.getFormData(this);
  formData['type'] = 'curator';
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
    '/users/',
    formData
  ).done(function(response) {
    currentUser = response.user;
    window.location.href = '/';
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    loadPage('signup', {error: response.error});
  });
});*/

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
		window.location.href = '/';
	}).fail(function(jqxhr) {
		var response = $.parseJSON(jqxhr.responseText);
		loadPage('curator', {user: currentUser});
	});
});

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


var loadCuratorPage = function() {
	$.get('users/created', function(response) {
		//console.log(response);
    	loadPage('curator', {user: currentUser, exhibits: response});
	});
}