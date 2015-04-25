var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {
		getByQuest: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({"error" : "You are not logged in"});
			models.Contribution.find({question: req.body.questid}).exec(function(err, doc) {
				if (err) return res.status(400).json({err: "There was an error"});
				res.status(200).json(doc);
			});
		},

		getByID: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({"error" : "You are not logged in"});
			models.Contribution.findById(req.body.contibutionid, function(err, doc) {
				if (err) return res.status(400).json({err: "There was an error"});
				res.status(200).json(doc);
			});

		},

		addContribution: function(req, res) {
			//if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
				//if (err) return res.status(400).send(err);
			models.User.findOne({_id: req.user._id}, function(err, user) {

				var contribution = models.Contribution({
					time: moment(), 
					author: req.user._id, 
					text: validator.toString(req.body.text)
				});
				contribution.save(function(err) {
					if (err) return res.status(400).json({'error': 'Something went wrong with creating the contribution!'});
					models.Question.findOne({_id: req.body.question_id}, function(err, question) {
						question.contributions.push(contribution);
						question.save(function(err) {
							if (err) {
								return res.status(400).json({'error': err});
							}
							if (user.contributed.indexOf(question._id) <0 ) {
								user.contributed.push(question);
								user.save(function(err) {
									if (err) {
										return res.status(400).json({'error': err});
									};
									res.status(200).json(question.piece);
								});
							}
							else {
								res.status(200).json(question.piece);
							}

						});
							

					});
				});
			});
			}
		}
}

module.exports = controller();

