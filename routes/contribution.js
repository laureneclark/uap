var express = require('express');
var passport = require('passport');
var models = require('../model/artapp-model.js');
var router = express.Router();
var controller = require('../controller/contribution-controller.js');



/*
GET by contribution id
*/
router.get('/:c_id', function(req, res) {
	controller.getByID(req, res);
});

/*
GET by question id 
*/
router.get('/quest/:q_id', function(req, res) {
	controller.getByQuest(req, res);
});

/*
POST add contribution to question
*/
router.post('/quest/:q_id', function(req, res) {
	controller.addContribution(req, res);
});

module.exports = router;