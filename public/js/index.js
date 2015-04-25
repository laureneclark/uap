currentUser = undefined;

//Loads a template into the #main-container div on the page
var loadPage = function(template, data) {
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#main-container').html(temp);
};

//load the login form
$(document).on('click', '#login-btn', function(evt) {
  evt.preventDefault();
  loadPage('login');
});

//load the signup form
$(document).on('click', '#signup-btn', function(evt) {
  evt.preventDefault();
  loadPage('signup');
});

//logout the user
$(document).on('click', '#logout-link', function(evt) {
  evt.preventDefault();
  $.post(
    '/users/logout'
  ).done(function(response) {
    currentUser = undefined;
    $("#nav-items").remove();
    loadPage('welcome');
  }).fail(function(jqxhr) {
    var response = $.parseJSON(jqxhr.responseText);
    loadPage('gallery');
  });
});


//Redirect to that Exhibit Page 
$(document).on('click', '.view-exhibit-btn', function(evt) {
    var exhibit_id = $(this).attr('id');
    $.get('exhibit/' + exhibit_id, function(response) {
      var madeByUser = (response.createdBy === currentUser._id);
      loadPage('exhibit', {exhibit: response, madeByUser: madeByUser})
  });
});

//Redirect to that Piece Page 
$(document).on('click', '.view-piece-btn', function(evt) {
  //console.log("I clicked this");
    var piece_id = $(this).attr('id');
    loadPiecePage(piece_id);
});

//Redirect to user page
$(document).on('click', '#profile-btn', function(evt) {

  loadPage('user',{user: currentUser});
})

//START TO LOAD SCREEN//

$(document).ready(function() {
  //see if the current user is logged in, and if so, redirect to feed page
  $.get('/users/current', function(response) {
    if (response.content.loggedIn && response.content.user.role == 'curator') {
      currentUser = response.content.user;
      loadCuratorPage();
    }
    else if (response.content.loggedIn) {
      currentUser = response.content.user;
      loadGallery(); //redirect to main feed
    }
    else {
      loadPage('welcome');
    }
  });
});


var loadGallery = function() {
  loadNav();
  $.get('/exhibit/', function(response) {
    loadPage('gallery', {user: currentUser, exhibits: response});
  });
};

var loadCuratorPage = function() {
  //$.get('/users/', function(response) {
    loadNav();
    loadPage('curator', {user: currentUser});
  //});
};

var loadNav = function() {
  var template = 'nav';
  var data = {};
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#logged-in-nav').html(temp);
};

var loadPiecePage = function(piece_id) {
  $.get('/piece/' + piece_id, function(piece) {
    $.get('/piece/conversation/' + piece_id, function(conversation) {
      //console.log("This is the conversations");
      //console.log(conversation);
      //console.log(conversation[1].username);
      loadPage('piece', {piece: piece, conversation: conversation});
    });
  });
};