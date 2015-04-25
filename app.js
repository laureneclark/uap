var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Handlebars = require('handlebars');
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
var moment = require('moment');
var async = require('async');
var multer = require('multer');
var done = false;

// var routes = require('./routes/index');
// var users = require('./routes/users');
//mongod --dbpath /Users/Lauren/Desktop/artapp_database

connection_string = 'localhost/artapp'
mongoose.connect('mongodb://' + connection_string);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//setup passport
require('./config/passport-local')(passport);
app.use(session({ secret: 'art' })); // session secret
app.use(passport.initialize());
app.use(passport.session());

var index = require('./routes/index');
var exhibit = require('./routes/exhibit');
var piece = require('./routes/piece');
var users = require('./routes/users');
var resource = require('./routes/resource');
var influence = require('./routes/influence');
var question = require('./routes/question');
var contribution = require('./routes/contribution');

app.use('/', index);
app.use('/users', users);
app.use('/exhibit', exhibit);
app.use('/resource', resource);
app.use('/influence', influence);
app.use('/piece', piece);
app.use('/question', question);
app.use('/contribution', contribution);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.use(multer({ dest: '../public/images',
 rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
}
}));



module.exports = app;
