Handlebars.registerPartial('question-panel', Handlebars.templates['question-panel']);
Handlebars.registerPartial('contribution-panel', Handlebars.templates['contribution-panel']);

currentUser = undefined;

//Loads a template into the #main-container div on the page
var loadPage = function(template, data) {
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#main-container').html(temp);
};

//Add A Question 
$(document).on('click', '#add-question-btn', function(evt) {
	//console.log("I clicked add question");
	evt.preventDefault();
  	//console.log("I clicked this");
    var piece_id = $(this).attr('piece_id');
  	var formData = helpers.getFormData($("#add-question-form"));
  	formData.piece_id = piece_id;
  	//formData.author = currentUser;
  	//console.log(formData);
  	$.post(
  		'/question/', 
  		formData
  	).done(function(response) {
  		//console.log(response);
  		loadPiecePage(response);
});
  });

//Add A Contribution 
$(document).on('click', '.add-contribution-btn', function(evt) {
  //$(document).modal('hide');
  console.log("I clicked add contribution");
  evt.preventDefault();
    //console.log("I clicked this");
    var question_id = $(this).attr('id');
    console.log(question_id);
    var formData = helpers.getFormData($("#add-contribution-" + question_id + "-form"));
    formData.question_id = question_id;
    console.log(formData);
    //formData.author = currentUser;
    //console.log(formData);
    $.post(
      '/contribution/', 
      formData
    ).done(function(response) {
      var cString = '#add-contribution-' + question_id + '-modal';
      $(cString).modal('hide');
      //window.location.href = '/';
      console.log("The contribution is compelted!!");
      loadPiecePage(response);
  });
});

$(document).on('click', '.back-to-exhibit', function(evt) {
  evt.preventDefault();
  var exhibit_id = $(this).attr('id');
  console.log(exhibit_id);
  $.get('/exhibit/' + exhibit_id, function(response) {
    console.log(response);
      var madeByUser = (response.createdBy === currentUser._id);
      var visitor = (currentUser.role =='visitor');
      loadPage('exhibit', {exhibit: response, madeByUser: madeByUser, visitor: visitor})

  })
})



var loadPiecePage = function(piece_id) {
  console.log("Trying to load the piece page");
  console.log(piece_id);
  if (piece_id.error) {
    loadPage('piece', piece_id);
  }
  else {
	$.get('/piece/' + piece_id, function(piece) {
    console.log(piece);
		$.get('/piece/conversation/' + piece_id, function(conversation) {
			//console.log("This is the conversations");
			//console.log(conversation);
      //window.location.href = '/';
      var createdBy = (currentUser._id === piece.exhibit.createdBy)
			loadPage('piece', {piece: piece, conversation: conversation, createdBy: createdBy});
		});
	});
}
};