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
Schema for exhibit.  
*/ 
var exhibitSchema = mongoose.Schema({
	title: String
	dateStart: Date, 
	dateEnd: Date, 
	location: String, //should this be a physical location object? 
	description: String, 
	resources: [{type: mongoose.Schema.Types.ObjectId, ref: 'Resource'}], 
	influences: [{type: mongoose.Schema.Types.ObjectId, ref: 'Influence'}]
});

/*
Schema for Piece
*/

var pieceSchema = mongoose.Schema({
	title: String, 
	year: String, //number or string?
	artist: String, 
	description: String, 
	image: Link, 
});

/*
Schema for Question
*/
var questionSchema = mongoose.Schema({
	time: Date, 
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
	text: String
	piece: {type: mongoose.Schema.Types.ObjectId, ref: 'Piece'}
});

/*
Schema for Contribution
*/
var contibutionSchema = mongoose.Schema({
	time: Date, 
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
	text: String, 
	question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
});

/*
Schema for Resource
*/
var resourceSchema = mongoose.Schema({
	name: String,
	link: Link, 
	highlight: String, 
	addedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

var influenceSchema = mongoose.Schema({
	name: String, 
	image: Link, 
	artist: String, 
	type: String, //image or artist
	description: String
});