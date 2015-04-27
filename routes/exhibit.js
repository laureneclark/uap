var express = require('express');
var passport = require('passport');
var router = express.Router();
var models = require('../model/artapp-model.js');
var moment = require('moment');
var jquery = require('jquery');
var controller = require('../controller/exhibit-controller.js');

//INCLUDE ADDING PIECE TO AN EXHIBIT/////

/*
GET all exhibits 
*/
router.get('/', function(req, res) {
	//console.log("Trying to get all exhibits");
	//if (!req.isAuthenitcated()) return res.status(401).send({err: "Error, not logged in"});
	models.Exhibit.find({}).populate('resources influences pieces').exec( function(err, doc){
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
	//console.log("Trying very hard");
	//console.log(req);
	//console.log(req.params.exhibit_id);
	//console.log(models.Exhibit);
	// if (!req.isAuthenitcated()) {
	// 	console.log("hsdlkhfh");
	// 	return res.status(401).send({err: "Error: not logged in"});
	// }
	models.Exhibit.findOne({_id: req.params.exhibit_id}).populate('resources influences pieces').exec(function(err, doc) {
		//console.log("I go to here!!");
		//console.log(doc);
		console.log(doc);
		if (err) {
			console.log("There was an err");
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
});

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
});

/* 
GET pieces for an exhibit
*/
router.get('/pieces/:exhibit_id', function(req, res) {
	controller.getPieces(req, res);
});

/*
GET all exhibits created by logged in curator
*/
router.get('/curator', function(req, res) {
	controller.getCuratorExhibits(req, res);
});

/*
POST publish exhibit //
*/
router.post('/publish', function(req, res) {
	controller.publish(req, res);
});

module.exports = router;