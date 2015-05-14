var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {
		addInfluence: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
		
			models.Exhibit.findOne({_id: req.body.addTo}, function(err, exhibit) {
		
				var influence = new models.Influence({
				
					piece: req.body.piece, 
			
					description: validator.toString(req.body.description)
				});
				influence.save(function(err) {
					if (err) res.status(400).json({err: "Error in creating the influence"});
					exhibit.influences.push(influence);
					exhibit.save(function(err) {
						if (err) res.status(400).json({err: "Error in creating the influence"});
						res.status(200).json(exhibit).end();
					});
				});
			});

		}, 

		getByID: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Influence.findByID(req.body.influenceid, function(err, influence) {
				if (err) {
					res.status(400).json({err: "Something is wrong "});
				}
				res.status(200).json(influence);
			});

		}

	}
}

module.exports = controller();