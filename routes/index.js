var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("I just did this");
  res.render('index', { title: 'Art App' });
});

module.exports = router;
