var express = require('express');
var passport = require('passport');
var models = require('../model/artapp-model.js');
var router = express.Router();
var validator = require('validator');
var controller = require('../controller/piece-controller.js');
var multer = require('multer');
var done = false;

/*
POST creates new piece-controller
*/
router.post('/', function(req, res) {
	controller.addPiece(req, res);
});

/*
POST add image to piece
*/
router.post('/image/:piece_id',[ multer({ dest: './public/images'}), function(req, res){
    if (req.files.uploadedImage.extension === 'jpg' || req.files.uploadedImage.extenstion === 'png'){
        var file = req.files.uploadedImage
        var piece_id = req.params.piece_id
        models.Piece.findOne({_id: piece_id}, function(err, piece) {
        	if (piece.image === 'images/blankImage.jpg') {
        		piece.image = 'images/' + file.name;
        		piece.save(function(err) {
        			res.status(204).end();//json(piece);
        		})
        	}
        	else {
        		res.status(204).end();//json({'error': "This piece alreday has an image"});
        	}
        });
    } 
    else {
        res.status(204).end();//.json({'error': "That is not a valid file type"});
    }
}]);

/*
GET retrieves piece by ID
*/
router.get('/:piece_id', function(req, res) {
	controller.getPiece(req, res);
});

/*
POST adds a favorite to a user
*/
router.post('/favorite', function(req, res) {
    controller.favoritePiece(req, res);
});

/*
GET contributions that make up conversation response is made up of an array of objects of the form {question: , contributions: []}
*/
router.get('/conversation/:piece_id', function(req, res) {
	controller.getConversation(req, res); //implement this 
});


module.exports = router;
