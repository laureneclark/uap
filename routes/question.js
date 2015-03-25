var express = require('express');
var passport = require('passport');
var models = require('../model/artapp-model.js');
var router = express.Router();


/*
GET by question id
*/
router.get('/:q_id', function(req, res) {
	controller.getByID(req, res);
});

/*
GET by exhibit id 
*/
router.get('/exhibit/:exhibit_id', function(req, res) {
	controller.getByQuest(req, res);
});

/*
POST add question
*/
router.post('/', function(req, res) {
	controller.addQuestion(req, res);
});

module.exports = router;