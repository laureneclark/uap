var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {
		getByID: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Question.findByID(req.body.questionid, function(err, question) {
				if (err) {
					res.status(400).json({err: "Something is wrong "});
				}
				res.status(200).json(question);
			});	

		},

		getByPiece: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Question.find({piece: req.body.pieceid}, function(err, questions) {
				if (err) {
					res.status(400).json({err: "Something is wrong "});
				}
				res.status(200).json(questions);
			});	

		},

		addQuestion: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			var quest = new models.Question({
				time: moment(), 
				author: validator.toString(req.body.author), 
				text: validator.toString(req.body.text),
				piece: req.body.pieceid
			});
			quest.save(function(err) {
				if(err) return res.status(400).json({err: "Couldn't add question"});
			});

		}
	}
}

module.exports = controller();