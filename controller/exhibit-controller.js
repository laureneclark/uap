var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {
		addExhibit: function(req, res) {
			console.log("I am adding an exhibit");
			console.log(req);
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			var exhibit =  new models.Exhibit({
				title: validator.toString(req.body.title),
				dateStart: moment(req.body.dateStart), 
				dateEnd: moment(req.body.dateEnd), 
				location: validator.toString(req.body.location), 
				description: validator.toString(req.body.description), 
				createdBy: req.user._id,
				resources: [], 
				influences: [], 
				pieces: []
			});
			exhibit.save(function(err) {
				console.log("I saved");
				if (err) {
					console.log("There was an error saving");
					return res.status(400).json({'error': 'Something went wrong creating the exhibit'});
				}
				//console.log("This all happened");
				//console.log(exhibit);
				res.status(200).json(exhibit);
				//console.log("WTF");
			});
		}, 


		visit: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.User.findById(req.user._id, function(err, user) {
				if (err) return res.status(400).send(err);
				models.Exhibit.findOne({_id: req.body.exhibitid}, function(err, exhibit) {
					user.visited.push(exhibit);
					user.save(function(err) {
						if (err) return res.status(400).send(err);
					});
				});
			});
		}, 

		getInfluences: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Exhibit.findById(req.exhibitid, function(err, exhibit) {
				if (err) return re.status(400).send(err);
				res.status(200).json(exhibit.influences);
			});
		},

		getResources: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Exhibit.findById(req.exhibitid, function(err, exhibit) {
				if (err) return re.status(400).send(err);
				res.status(200).json(exhibit.resources);
			});

		}, 

		getPieces: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Exhibit.findById(req.exhibitid, function(err, exhibit) {
				if (err) return re.status(400).send(err);
				res.status(200).json(exhibit.pieces);
			});

		}
	}	
}

module.exports = controller();