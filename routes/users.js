var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../model/artapp-model.js');
var moment = require('moment');
var controller = require('../controller/users-controller.js');


/* 
	POST to signup
	Takes a JSON POST body with a desired username, password, name, and location (optional)
	If the username is valid/untaken, a User document will be created and the current user will be logged in.
	Otherwise, return an error.
*/
router.post('/', function(req, res, next){
    console.log("I posted")
    passport.authenticate('local-signup', function(err, user, info){
        if (err) return res.status(400).send(err);
        if (!user) return res.status(400).send({error:info});
        else {
            req.login(user, function(err){
                if (err) return next(err);
                return res.status(201).json({content:{'message': 'Successfully created user', 'user': user}}).end();
            }); 
        }    
    })(req, res, next);
});


/*
	POST to login with username/password 
	Takes a JSON POST body with a username and a password parameter.
	If the username and password are valid, it will log the user in, otherwise return an error.
*/
router.post('/login', function(req, res, next){
    passport.authenticate('local-login', function(err, user, info){
        if (err) return next(err);
        if (!user) return res.status(400).send(info);
        else {
            req.login(user, function(err){
                if (err) return next(err);
                return res.status(200).json({content:{'message': 'Successfully logged in', 'user': user}}).end();
            });
        }
    })(req, res, next);
});

module.exports = router;

/* POST to logout */
router.post('/logout', function(req, res){
    req.logout();
    res.status(200).send({message: 'Logout successful'});
});

/*
	GET - return the current logged in user. If no one is logged in, return {loggedIn: false};
*/
router.get('/current', function(req, res) {
    console.log("Why am I doing this?");
  if (req.user) {
    res.status(200).json({content:{loggedIn: true, user: req.user}}).end();
  } else {
    res.status(200).json({content:{loggedIn: false}}).end();
  }
});

/*
GET - return exhibits that a particular user has visited
*/
router.get('/exhibits', function(req, res) {
    controller.getExhibits(req, res);
});



/*
GET -return saved resources
*/
router.get('/saved', function(req, res) {
    controller.getSavedResources(req, res);
});

/*
GET question by user
*/
router.get('/question', function(req, res) {
    controller.getQuestions(req.res);
});

/*
GET contributions by user
*/
router.get('/contribution', function(req, res) {
    controller.getContribution(req.res);
});

module.exports = router;