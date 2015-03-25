var express = require('express');
var passport = require('passport');
var models = require('../model/artapp-model.js');
var router = express.Router();
var controller = require('../controller/influence-controller.js');

/*
POST creates an influence
*/
router.post('/', function(req, res) {
	controller.addInfluence(req, res);
});

/*
GET an inflence by ID
*/
router.get('/:influence_id', function(req, res) {
	controller.getByID(req, res);
});


module.exports = router;
