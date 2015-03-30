var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {

		getExhibits: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.User.findOne({'local.username': req.body.username}, function(err, user) {
				if (err) res.status(400).json({err: "There is no user with this username"});
				res.status(200).json(user.visited).end();
			});

		}, 

		getSavedResources: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.User.findOne({'local.username': req.body.username}, function(err, user) {
				if (err) res.status(400).json({err: "There is no user with this username"});
				res.status(200).json(user.saved).end();
			});

		}, 

		getQuestions: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.User.findOne({'local.username': req.body.username}, function(err, user) {
				if (err) res.status(400).json({err: "There is no user with this username"});
				models.Question.find({author: user._id}, function(err, questions) {
					if (err) res.status(400).json({err: "There was an issue getting this user's questions"});
					res.status(200).json(questions).end();
				});
			});

		}, 

		getContributions: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.User.findOne({'local.username': req.body.username}, function(err, user) {
				if (err) res.status(400).json({err: "There is no user with this username"});
				models.Contribution.find({author: user._id}, function(err, contributions) {
					if (err) res.status(400).json({err: "There was an issue getting this user's contributions"});
					res.status(200).json(contributions).end();
				});
			});

		}
 	}
}

module.exports = controller();