var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/*
Schema for users. Users will have a email, username, and password associated with their account.
Users have saved resources, visited exhibits, and a role (either vistor or curator )
*/
var userSchema = mongoose.Schema({
	email: {type: String, required: true},
	local:{
		username: {type: String, required: true, unique: true, lowercase: true},
		password: {type: String, required: true}
	},
	saved: [{type: mongoose.Schema.Types.ObjectId, ref: 'Resource'}],
	visited: [{type: mongoose.Schema.Types.ObjectId, ref: 'Exhibit'}],
	role: {type: String, default: "visitor"}
});

/*
Schema for exhibit.  Exhibits are a collection of pieces as well as resources and influences.  
Each exhibit has associated with it: a title, start and end date, location (the name of a museum or gallery), 
a description, a list of resource objects, and a list of influence objects
*/ 
var exhibitSchema = mongoose.Schema({
	title: String
	dateStart: Date, 
	dateEnd: Date, 
	location: String, //
	description: String, 
	resources: [{type: mongoose.Schema.Types.ObjectId, ref: 'Resource'}], 
	influences: [{type: mongoose.Schema.Types.ObjectId, ref: 'Influence'}],
	pieces: [{type: mongoose.Schema.Types.ObjectId, ref: 'Piece'}]
});

/*
Schema for Piece.  Each piece has associated with it: a title, the year the piece was created, 
the artist, a description, and a link to an image of the piece.  
*/

var pieceSchema = mongoose.Schema({
	title: String, 
	year: String, //number or string?
	artist: String, 
	description: String, 
	image: Link, 
});

/*
Schema for Question. Questions are the structure of the conversation.  Every contribution is in response to a question.
Therefore the default question is "what is your reaction to the piece".  Each question has asscoaited with it: 
the time posed, the user asking, the question text, and the piece it is in reference to.

*/
var questionSchema = mongoose.Schema({
	time: Date, 
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
	text: {type: String, default: "What is your reaction to the piece?"}
	piece: {type: mongoose.Schema.Types.ObjectId, ref: 'Piece'}
});

/*
Schema for Contribution.  Each contribution is in response to a question and has associated with it: 
the time posted, the user posting, the contribution text, and the question that it is in response to.  
*/
var contibutionSchema = mongoose.Schema({
	time: Date, 
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
	text: String, 
	question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
});

/*
Schema for Resource.  Resources are written pieces that aim to help a visitor better understand an exhibit.  
Resources have associated with them: a name, a link to the source, a paragraph of text highlighting the resource, 
a description, and the user who added the resource.  
*/
var resourceSchema = mongoose.Schema({
	name: String,
	link: Link, 
	highlight: String, 
	description: String, 
	addedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

/*
Schema for Influence.  Influenes are pieces of art and artists that influenced the collection of pieces in an exhibit.
Associated with each influece are: a name (only if type == image), a link to an image (either the piece or one of the artist's pieces),
the artist's name, a type (image or artist), and a decription of the influence on the exhibit pieces.
*/ 
var influenceSchema = mongoose.Schema({
	name: String, 
	image: Link, 
	artist: String, 
	type: String, //image or artist
	description: String
});

exports.User = mongoose.model('User', userSchema);
exports.Exhibit = mongoose.model('Exhibit', exhibitSchema);
exports.Piece = mongoose.model('Piece', pieceSchema);
exports.Question = mongoose.model('Question', questionSchema);
exports.Contribution = mongoose.model('Contribution', contributionSchema);
exports.Resource = mongoose.model('Resource', resourceSchema);
exports.Influence = mongoose.model('Influence', influenceSchema);
