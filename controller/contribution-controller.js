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
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Contribution.findById(req.user._id, function(err, user) {
				if (err) return res.status(400).send(err);
				var contribtion = models.Contribution({
					time: moment(), 
					author: req.user_id, 
					text: validator.toString(req.body.text), 
					question: req.body.quest
				});
				contribution.save(function(err) {
					if (err) return res.status(400).json({'error': 'Something went wrong with creating the contribution!'});
				});
			res.status(200).json(contribution).end();
			});
		}
	}
}

module.exports = controller();

