var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');
var async = require('async');

var controller = function() {
	return {
		addPiece: function(req, res) {
			//if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			var piece = new models.Piece({
				title: validator.toString(req.body.title),
				year: validator.toString(req.body.year),
				artist: validator.toString(req.body.artist),
				description: validator.toString(req.body.description), 
				image: req.body.image,
				exhibit: req.body.addTo
			});
			piece.save(function(err) {
				if(err) return res.status(400).json({err: "Couldn't add piece"});
				models.Exhibit.findOne({_id: req.body.addTo}, function(err, foundExhibit) {
					foundExhibit.pieces.push(piece);
					foundExhibit.save(function(err){
						if (err) return res.status.json({'error': err});
					});
					if (err) return res.status.json({'error': err});	
					res.status(200).json(foundExhibit);
				});

			});

		},

		getConversation: function(req, res) {
			responseArray = []
			models.Question.find({piece: req.params.piece_id}).populate('author contributions').sort({ "time" : "desc"}).exec(function(err, questions) {
				async.forEach(questions, function(item, callback) {
					models.User.populate(item.contributions, {"path": "author"}, function(err, output) {
						models.Piece.populate(item.contributions, {"path": "piece"}, function(err, output2) {
							callback();

						})
					});
				}, function(err) {
				res.status(200).json(questions);
				})
			});
		},

		favoritePiece: function(req, res) {
			var piece_id = req.body.piece_id;
			models.User.findOne({_id: req.user._id}, function(err, user) {
				user.favorites.push(piece_id);
				user.save(function(err) {
			
					if (err) return res.status.json({'error': err});
					res.status(200).json(piece_id);
				})
			})

		},

		getPiece: function(req, res) {
			//if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Piece.findOne({_id:req.params.piece_id}).populate('questions exhibit').exec(function(err, piece) {
				if (err) {
					res.status(400).json({'error': "Something is wrong "});
				}
				res.status(200).json(piece);
			});		

		}
	}
}

module.exports = controller();