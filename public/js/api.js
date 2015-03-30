/*
User Things
*/
var addUser = function(email, username, password, callback){
	$.ajax({
		url: "/users/",
		type: "POST",
		data: {email: email, username: username:, password: password},
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error in adding the new user!");
		}
	});
}

var login = function(username, password, callback){
	$.ajax({
		url: "/users/login",
		type: "POST",
		data: {username: username:, password: password},
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error in logging in the user!");
		}
	});
}

var getCurrentUser = function(callback){
	$.ajax({
		url: "/users/current",
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error in getting the current user!");
		}
	});
}

var logout = function(callback){
	$.ajax({
		url: "/users/logout",
		type: "POST",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error in logging out the user!");
		}
	});
}

/*
Exhibit Things
*/

var getAllExhbits = function(callback) {
	$.ajax({
		url: "/exhibit/",
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error in getting all exhibits!");
		}
	});
}

var getSpecificExhibit = function(exhibitid, callback) {
	$.ajax({
		url: "/exhibit/"+exhibitid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error in getting a specific exhibit!");
		}
	});

}

/*
Influence Things
*/

/*
Piece Things
*/

/*
Question Things
*/

/*
Resource Things
*/

/*
Contribution Things
*/

