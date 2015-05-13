var express = require('express');
var passport = require('passport');
var models = require('../model/artapp-model.js');
var router = express.Router();
var controller = require('../controller/resource-controller.js');

/*
POST creates an resource
*/
router.post('/', function(req, res) {
	controller.addResource(req, res);
});

// /*
// GET an resource by ID
// */
// router.get('/:resource_id', function(req, res) {
// 	controller.getByID(req, res);
// });

/*
POST -save a resource
*/
router.post('/save', function(req, res) {
    controller.save(req, res);
});


module.exports = router;
