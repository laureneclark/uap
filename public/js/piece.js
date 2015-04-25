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
  		loadPiecePage(piece_id);
});
  });

// //Add A Contribution 
// $(".add-contribution-btn").each(function(){
//   $(this).on(click, function(evt) {
//       console.log("I clicked add contribution");
//   evt.preventDefault();
//     //console.log("I clicked this");
//     var question_id = $(this).attr('id');
//     console.log(question_id);
//     var formData = helpers.getFormData($("#add-contribution-form"));
//     formData.question_id = question_id;
//     //formData.author = currentUser;
//     //console.log(formData);
//     $.post(
//       '/contribution/', 
//       formData
//     ).done(function(response) {
//       //console.log('OMG');
//       //console.log(response);
//       loadPiecePage(response);
// });

//   });
// });


//Add A Contribution 
$(document).on('click', '.add-contribution-btn', function(evt) {
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
      //console.log('OMG');
      //console.log(response);
      loadPiecePage(response);
  });
});

// //Add A Contribution 
// $(document).on('click', '.add-contribution-btn').each(function(evt) {
//   console.log("I clicked add contribution");
//   //evt.preventDefault();
//     //console.log("I clicked this");
//     var question_id = $(this).attr('id');
//     console.log(question_id);
//     var formData = helpers.getFormData($("#add-contribution-form"));
//     formData.question_id = question_id;
//     //formData.author = currentUser;
//     //console.log(formData);
//     $.post(
//       '/contribution/', 
//       formData
//     ).done(function(response) {
//       //console.log('OMG');
//       //console.log(response);
//       loadPiecePage(response);
//   });
// });


var loadPiecePage = function(piece_id) {
	$.get('/piece/' + piece_id, function(piece) {
    //console.log(piece);
		$.get('/piece/conversation/' + piece_id, function(conversation) {
			//console.log("This is the conversations");
			//console.log(conversation);
      //window.location.href = '/';
			loadPage('piece', {piece: piece, conversation: conversation});
		});
	});
};