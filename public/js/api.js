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

/*
User Things
*/
var addCurator = function(email, username, password, callback){
	$.ajax({
		url: "/users/curator",
		type: "POST",
		data: {email: email, username: username:, password: password, type: 'curator'},
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

var createExhibit = function(title, dateStart, dateEnd, location, description, callback) {
	$.ajax({
		url: "/exhibit/"+exhibitid,
		type: "POST",
		data: {title: title, dateStart: dateStart, dateEnd: dateEnd, location: location, description: description}, 
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error creating an exhibit!");
		}
	});
}

var visitExhibit = function(username, exhibitid, callback) {
	$.ajax({
		url: "/exhibit/"+exhibitid,
		type: "POST",
		data: {username: username}, 
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error visiting an exhibit!");
		}
	});
}

var getInfluencesByExhibit = function(exhibitid, callback) {
	$.ajax({
		url: "/exhibit/"+exhibitid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting exhibit influences!");
		}
	});
}

var getResourcesByExhibit = function(exhibitid, callback) {
	$.ajax({
		url: "/exhibit/"+exhibitid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting exhibit resources!");
		}
	});
}

var getPiecesByExhibit = function(exhibitid, callback) {
	$.ajax({
		url: "/exhibit/"+exhibitid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error creating an exhibit!");
		}
	});
}

/*
Influence Things
*/
var createInfluence = function(name, image, artist, type, description, callback) {
	$.ajax({
		url: "/influence/",
		type: "POST",
		data: {name: name, image: image, artist: artist, type: type, description: description}, 
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error creating an influence!");
		}
	});
}

var getInfluenceByID = function(influenceid, callback) {
	$.ajax({
		url: "/influence/"+influenceid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting an influence!");
		}
	});
}

/*
Piece Things
*/
var createPiece = function(title, year, artist, description, image, callback) {
	$.ajax({
		url: "/piece/",
		type: "POST",
		data: {title: title, year: year, image: image, artist: artist, description: description}, 
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error creating a piece!");
		}
	});
}

var getPieceByID = function(pieceid, callback) {
	$.ajax({
		url: "/piece/"+pieceid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting a piece!");
		}
	});
}
/*
Question Things
*/
var createQuestion = function(author, text, pieceid, callback) {
	$.ajax({
		url: "/question/",
		type: "POST",
		data: {author:author, text: text, pieceid: pieceid}, 
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error creating a question!");
		}
	});
}

var getQuestionByID = function(questionid, callback) {
	$.ajax({
		url: "/question/"+questionid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting a question by ID!");
		}
	});
}

var getQuestionByPiece = function(pieceid, callback) {
	$.ajax({
		url: "/question/piece/"+pieceid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting a question by piece!");
		}
	});
}

/*
Resource Things
*/
var createResource = function(name, link, highlight, description, user, callback) {
	$.ajax({
		url: "/resource/",
		type: "POST",
		data: {name: name, link:link, highlight:highlight, description: description, user: user}, 
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error creating a resource!");
		}
	});
}

var getResouceByID = function(resourceid, callback) {
	$.ajax({
		url: "/resource/"+resourceid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting a resource by ID!");
		}
	});
}

var saveResource = function(resourceid, username, callback) {
	$.ajax({
		url: "/resource/"+resourceid,
		type: "POST",
		data: {username: username}
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting a resource by ID!");
		}
	});
}
/*
Contribution Things
*/
var addContribution = function(author, text, question, callback) {
	$.ajax({
		url: "/question/",
		type: "POST",
		data: {author:author, text: text, quest: question}, 
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error adding a contribution!");
		}
	});
}

var getContributionByID = function(contributionid, callback) {
	$.ajax({
		url: "/contribution/"+contributionid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting a contribution by ID!");
		}
	});
}

var getContributionByQuestion = function(questionid, callback) {
	$.ajax({
		url: "/contribution/question/"+questionid,
		type: "GET",
		datatype: "json",
		success:function(data){
			callback(data);
		}
		error: function(xhr, status, err){
			console.log(err);
			console.log("Error getting a question by piece!");
		}
	});
}

