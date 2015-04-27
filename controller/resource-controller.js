var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {

		addResource: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Exhibit.findOne({_id: req.body.addTo}, function(err, exhibit) {
				var resource = new models.Resource({
					name: validator.toString(req.body.name),
					link: "http://" + req.body.link, 
					highlight: validator.toString(req.body.highlight), 
					description: validator.toString(req.body.description), 
					addedBy: req.user._id
				});
				resource.save(function(err) {
					console.log(resource.link);
					if (err) res.status(400).json({err: "Error in creating the resource"});
					exhibit.resources.push(resource);
					exhibit.save(function(err) {
						if (err) res.status(400).json({err: "Error in creating the resource"});
						res.status(200).json(exhibit).end();
					});
				});
			});

		}, 

		getByID: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Resource.findByID(req.body.resourceid, function(err, resource) {
				if (err) {
					res.status(400).json({err: "There is no resource with that id"});
				}
				res.status(200).json(resource);
			});	
		}, 

		//user saves a resource 
		save: function(req, res) {
			models.User.findOne({_id: req.user._id}, function(err, usr) {
				if (err) {
					res.status(400).json({err: "There is no user with that username"});
				}
				models.Resource.findOne({_id: req.body.resource_id}, function(err, resource) {
					if (usr.saved.indexOf(resource._id) < 0) {
						usr.saved.push(resource);
						usr.save(function(err) {
							if (err) res.status(400).json({err: "Error in saving resource"})
								res.status(200).json(resource);
						});
					} 
					else {
						res.status(200).json(resource);
					}

				});
			});

		}
	}
}

module.exports = controller();