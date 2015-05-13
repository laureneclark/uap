var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {
		addExhibit: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			var exhibit =  new models.Exhibit({
				title: validator.toString(req.body.title),
				dateStart: moment(req.body.dateStart).format("D-M-YYYY H:mm:ss"), 
				dateEnd: moment(req.body.dateEnd).format("D-M-YYYY H:mm:ss"), 
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

		// getInfluences: function(req, res) {
		// 	if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
		// 	models.Exhibit.findById(req.exhibitid, function(err, exhibit) {
		// 		if (err) return re.status(400).send(err);
		// 		res.status(200).json(exhibit.influences);
		// 	});
		// },

		// getResources: function(req, res) {
		// 	if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
		// 	models.Exhibit.findById(req.exhibitid, function(err, exhibit) {
		// 		if (err) return re.status(400).send(err);
		// 		res.status(200).json(exhibit.resources);
		// 	});

		// }, 

		getMetrics: function(req, res) {
			var numVisitors = 0;
			var numSaved = 0;
			var numContributed = 0;
			var exhibit_id = req.params.exhibit_id
			console.log(exhibit_id)
			models.Exhibit.findOne({_id: exhibit_id}).populate('pieces').exec(function(err, exhibit) {
				console.log(exhibit.pieces);
				for (var k=0; k<(exhibit.pieces).length; k++) {
					console.log(k)
					var piece = exhibit.pieces[k]
					models.Question.find({piece: piece._id}, function(err, questions) {
						console.log(questions)
						for (var q=0; q<questions.length; q++) {
							var quest = questions[q];

							numContributed += quest.contributions.length
							console.log(numContributed);
						}
					} )
				}
				models.User.find({}, function(err, allUsers) {
					for (var i=0; i<allUsers.length; i++) {
						if (allUsers[i].visited.indexOf(exhibit._id >= 0)) {
							numVisitors +=1
						}
						for (var j=0; j<exhibit.resources.length; j++) {
							if (allUsers[i].saved.indexOf(exhibit.resources[j]) >=0) {
								numSaved +=1
							}

						}
					}

					res.status(200).json({numSaved:numSaved, numVisitors: numVisitors, numContributed:numContributed})
				})
			})
		},


		getPieces: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Exhibit.find({_id: req.exhibitid}, function(err, exhibit) {
				if (err) return re.status(400).send(err);
				res.status(200).json(exhibit.pieces);
			});

		}
	}	
}

module.exports = controller();