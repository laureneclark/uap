var express = require('express');
var passport = require('passport');
var models = require('../model/artapp-model.js');
var router = express.Router();
var moment = require('moment');
var jquery = require('jquery');
var controller = require('../controller/exhibit-controller.js');

/*
GET all exhibits 
*/
router.get('/', function(req, res) {
	if (!req.isAuthenitcated()) return res.status(401).send({"Error, not logged in"});
	models.Exhibit.find({}, function(err, doc{
		if (err) {
			res.status(400).json({err: "No Exhibits"});
		}
		res.status(200).json(doc);
	});
});


/* 
GET a specific exhibit
*/ 
router.get('/:exhibit_id', function(req, res){
	if (!req.isAuthenitcated()) return res.status(401).send({"Error: not logged in"});
	models.Exhibit.find({_id: req.params.exhibit_id}, function(err, doc) {
		if (err) {
			res.status(400).json({err: "Exhibit does not exist"});
		}
		res.status(200).json(doc);
	});
});

/*
POST -creates exhibit
*/
router.post('/', function(req, res) {
	controller.addExhibit(req, res);
})

/*
POST - visit an exhibit
*/
router.post('/visit', function(req, res) {
    controller.visit(req, res);
});

/*
GET influence for an exhibit
*/
router.get('/influences/:exhibit_id', function(req, res) {
	controller.getInfluences(req, res);
});

/*
GET resources for an exhibit
*/
router.get('/resources/:exhibit_id', function(req, res) {
	controller.getResources(req, res);
})

module.exports = router;