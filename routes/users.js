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
    //console.log(req);
    passport.authenticate('local-signup', function(err, user, info){
        //console.log(user);
        //console.log(info)
        if (err) {
            return res.status(400).send(err);
        }
        if (!user) {
            //console.log("There was an error!!")
            return res.status(400).send({error:info});
        }
        else {
            req.login(user, function(err){
                if (err) return next(err);
                return res.status(201).json({content:{'message': 'Successfully created user', 'user': user}}).end();
            }); 
        }    
    })(req, res, next);
});

/* 
    POST to signup an curator
*/
router.post('/curator', function(req, res, next){
    passport.authenticate('local-signup', function(err, user, info){
        //console.log("I am trying to make a curator");
        //console.log(user);
        //console.log(info)
        if (err) {
            return res.status(400).send(err);
        }
        if (!user) {
            //console.log("There was an error!!")
            return res.status(400).send({error:info});
        }
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
                //console.log(user);
                return res.status(200).json({'message': 'Successfully logged in', 'user': user}).end();
            });
        }
    })(req, res, next);
});


/* POST to logout */
router.post('/logout', function(req, res){
    req.logout();
    res.status(200).send({message: 'Logout successful'});
});

/*
	GET - return the current logged in user. If no one is logged in, return {loggedIn: false};
*/
router.get('/current', function(req, res) {
  if (req.user) {
    console.log(req.user);
    models.User.findOne({_id: req.user._id}).populate('saved visited contributed').exec(function(err, user) {
        res.status(200).json({content:{loggedIn: true, user: user}}).end();
    });
  } 
  else {
    res.status(200).json({content:{loggedIn: false}}).end();
  }
});



/*
GET Exhibits Created -must be a curator
*/
router.get('/created', function(req, res) {
    controller.getCuratorExhibits(req, res);

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
    controller.getContributions(req.res);
});



module.exports = router;