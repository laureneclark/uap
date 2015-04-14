currentUser = undefined;
Handlebars.registerPartial('exhibit-preview', Handlebars.templates['exhibit-preview']);
Handlebars.registerPartial('resource-panel', Handlebars.templates['resource-panel']);
Handlebars.registerPartial('influence-panel', Handlebars.templates['influence-panel']);
Handlebars.registerPartial('piece-preview', Handlebars.templates['piece-preview']);

var loadPage = function(template, data) {
	console.log("loading a page");
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#main-container').html(temp);
};

$(document).on('click', '#add-resource-btn', function(evt) {
  evt.preventDefault();
  var formData = helpers.getFormData($("#add-resource-form"));
  formData.addTo = $(this).attr('exhibit_id');
  $.post(
    '/resource/',
    formData
  ).done(function(response) {
    //window.location.href = '/';
    var madeByUser = (response.createdBy === currentUser._id);
    loadPage('exhibit', {exhibit: response, madeByUser: madeByUser})
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    //loadPage('exhibit', {exhibit:  }
  });
});

$(document).on('click', '#add-influence-btn', function(evt) {
  evt.preventDefault();
  var formData = helpers.getFormData($("#add-influence-form"));
  formData.addTo = $(this).attr('exhibit_id');
  $.post(
    '/influence/',
    formData
  ).done(function(response) {
    //window.location.href = '/';
    var madeByUser = (response.createdBy === currentUser._id);
    loadPage('exhibit', {exhibit: response, madeByUser: madeByUser})
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    //loadPage('exhibit', {exhibit:  }
  });
});

$(document).on('click', '#add-piece-btn', function(evt) {
  evt.preventDefault();
  var formData = helpers.getFormData($("#add-piece-form"));
  formData.addTo = $(this).attr('exhibit_id');
  $.post(
    '/piece/',
    formData
  ).done(function(response) {
    window.location.href = '/';
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    //loadPage('exhibit', {exhibit: }
  });
});

//Publish Exhibit
$(document).on('click', '#publish', function(evt) {
    var exhibit_id = $(this).attr('exhibit_id');
    $.post('/exhibit/publish', {exhibit_id: exhibit_id}).done(function(response) {
      var madeByUser = (response.createdBy === currentUser._id);
      loadPage('exhibit', {exhibit: response, madeByUser: madeByUser})
  });
});