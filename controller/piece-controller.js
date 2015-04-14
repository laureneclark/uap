var models = require('../model/artapp-model.js');
var moment = require('moment');
var validator = require('validator');

var controller = function() {
	return {
		addPiece: function(req, res) {
			//if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			var piece = new models.Piece({
				title: validator.toString(req.body.title),
				year: validator.toString(req.body.year),
				artist: validator.toString(req.body.artist),
				description: validator.toString(req.body.description), 
				image: req.body.image
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
			//implement me!! 
		},

		getPiece: function(req, res) {
			if (!req.isAuthenticated()) return res.status(401).send({'error' : 'You are not logged in'});
			models.Piece.findByID(req.body.pieceid, function(err, piece) {
				if (err) {
					res.status(400).json({err: "Something is wrong "});
				}
				res.status(200).json(piece);
			});		

		}
	}
}

module.exports = controller();