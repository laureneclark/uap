var express = require('express');
var passport = require('passport');
var router = express.Router();
var models = require('../model/artapp-model.js');
var moment = require('moment');
var jquery = require('jquery');
var controller = require('../controller/exhibit-controller.js');
var async = require('async');

/*
GET all exhibits 
*/
router.get('/', function(req, res) {
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
	models.Exhibit.findOne({_id: req.params.exhibit_id}).populate('resources influences pieces').exec(function(err, doc) {
		if (err) {
			res.status(400).json({err: "Exhibit does not exist"});
		}
		if (doc.influences.length === 0) {
			res.status(200).json(doc);
		}
		else {
		async.forEach(doc.influences, function(item, callback) {

			models.Piece.populate(item, {"path":"piece"}, function(err, output) {
				callback();
			});
			}, function(err) {
				res.status(200).json(doc);
			})
	}

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

/*
GET Metrics
*/
router.get('/metrics/:exhibit_id', function(req, res) {
	controller.getMetrics(req, res);
})

module.exports = router;