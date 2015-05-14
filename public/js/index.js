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
  console.log("View Exhibit Button");
    var exhibit_id = $(this).attr('id');
    console.log(exhibit_id);
    $.get('exhibit/' + exhibit_id, function(response) {
      console.log(response);
      var madeByUser = (response.createdBy === currentUser._id);
      var visitor = (currentUser.role =='visitor');
      response.dateStart = moment(response.dateStart).format("MMM Do YYYY");
      response.dateEnd = moment(response.dateEnd).format("MMM Do YYYY");
      console.log(response.published);
      if (madeByUser && response.published) {
        $.get('exhibit/metrics/' + exhibit_id, function(metrics) {
          loadPage('exhibit', {exhibit: response, madeByUser: madeByUser, visitor: visitor, metrics:metrics})   
        })
      }
      loadPage('exhibit', {exhibit: response, madeByUser: madeByUser, visitor: visitor})
  });
});

//Redirect to that Piece Page 
$(document).on('click', '.view-piece-btn', function(evt) {
    var piece_id = $(this).attr('id');
    loadPiecePage(piece_id);
});

//Redirect to user page
$(document).on('click', '#profile-btn', function(evt) {
  $.get('users/current', function(response) {
    console.log(response);
      loadPage('user',{user: response.content.user});
  });
});

//Redirect to gallery
$(document).on('click', '#gallery-link', function(evt) {
  loadGallery();
})


$(document).ready(function() {
  //see if the current user is logged in, and if so, redirect to feed page
  $.get('/users/current', function(response) {
    //console.log(response.content.user.favorites);
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




var loadNav = function() {
  var template = 'nav';
  var data = {};
  data = data || {};
  var temp = Handlebars.templates[template](data)
  $('#logged-in-nav').html(temp);
};

