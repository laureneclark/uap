var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {
		addExhibit: function(req, res) {
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
				if (err) {
					console.log("There was an error saving");
					return res.status(400).json({'error': 'Something went wrong creating the exhibit'});
				}
				res.status(200).json(exhibit);
			});
		}, 

		publish: function(req, res) {
			var e_id = req.body.exhibit_id;
			models.Exhibit.findOne({_id: e_id}).populate('resources influences pieces').exec(function(err, foundExhibit) {
				foundExhibit.published = true;
				foundExhibit.save(function(err){
					if (err) {
						console.log("There was an error saving exhibit");
						return res.status(400).json({'error': 'Something wen wrong updating the exhibit'});
					}
					res.status(200).json(foundExhibit);
					
				});
			});
		},


		visit: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.User.findById(req.user._id, function(err, user) {
				if (err) return res.status(400).send(err);
				models.Exhibit.findOne({_id: req.body.exhibit_id}, function(err, exhibit) {
					if (user.visited.indexOf(exhibit._id) < 0) {
						//console.log(exhibit);
						user.visited.push(exhibit);
						user.save(function(err) {
							if (err) return res.status(400).send(err);
							res.status(200).json(exhibit);
						});
					}
					else {
						res.status(200).json(exhibit);
					}
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