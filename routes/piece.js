var express = require('express');
var passport = require('passport');
var models = require('../model/artapp-model.js');
var router = express.Router();
var validator = require('validator');
var controller = require('../controller/piece-controller.js');

/*
POST creates new piece-controller
*/
router.post('/', function(req, res) {
	controller.addPiece(req, res);
});

/*
GET retrieves piece by ID
*/
router.get('/:piece_id', function(req, res) {
	controller.getPiece(req, res);
});

/*
GET contributions that make up conversation
*/
router.get('converstaion/:piece_id', function(req, res) {
	controller.getConversation(req, res); //implement this 
});


module.exports = router;
