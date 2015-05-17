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
	evt.preventDefault();
    var piece_id = $(this).attr('piece_id');
  	var formData = helpers.getFormData($("#add-question-form"));
  	formData.piece_id = piece_id;
  	$.post(
  		'/question/', 
  		formData
  	).done(function(response) {
      window.location.reload(true);
  		loadPiecePage(response);
});
  });

//Add A Contribution 
$(document).on('click', '.add-contribution-btn', function(evt) {
  evt.preventDefault();
    var question_id = $(this).attr('id');
    var formData = helpers.getFormData($("#add-contribution-" + question_id + "-form"));
    formData.question_id = question_id;
    $.post(
      '/contribution/', 
      formData
    ).done(function(response) {
      $('.modal-backdrop').remove();
      loadPiecePage(response);
  });
});

$(document).on('click', '#favorite-piece-btn', function(evt) {
  evt.preventDefault();
  var piece_id = $(this).attr('piece_id');
  $.post('/piece/favorite/', {piece_id: piece_id}).done(function(response) {
    loadPiecePage(response);
  });
});

$(document).on('click', '.back-to-exhibit', function(evt) {
  evt.preventDefault();
  var exhibit_id = $(this).attr('id');
  $.get('/exhibit/' + exhibit_id, function(response) {
      var madeByUser = (response.createdBy === currentUser._id);
      var visitor = (currentUser.role =='visitor');
      response.dateStart = moment(response.dateStart).format("MMM Do YYYY");
      response.dateEnd = moment(response.dateEnd).format("MMM Do YYYY");
      loadPage('exhibit', {exhibit: response, madeByUser: madeByUser, visitor: visitor})

  })
})



var loadPiecePage = function(piece_id) {
  if (piece_id.error) {
    loadPage('piece', piece_id);
  }
  else {
	$.get('/piece/' + piece_id, function(piece) {
		$.get('/piece/conversation/' + piece_id, function(conversation) {
      //window.location.href = '/';
		}).then(function(conversation) {
        var createdBy = (currentUser._id === piece.exhibit.createdBy)
        var visited = false;
        var favorite = false;
        if (currentUser.visited.indexOf(JSON.stringify(piece.exhibit)) >= 0) {
          visited = true;
        };
        if (currentUser.favorites.indexOf(piece._id) >=0) {
          favorite = true;
        }
        for (i=0; i< conversation.length; i++) {
          conversation[i].time = moment(conversation[i].time).format("MMM Do YYYY");
          for (j=0; j< (conversation[i].contributions).length; j++) {
            conversation[i].contributions[j].time = moment(conversation[i].contributions[j].time).format("MMM Do YYYY");
          }
        }
        loadPage('piece', {piece: piece, conversation: conversation, createdBy: createdBy, visited: visited, favorite: favorite});

    })
	});
}
};