var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cloudinary = require('cloudinary');
// var marked = require('marked');

var blogCommentRoutes = require('./routes/blog-comment');
var gallaryCommentRoutes = require('./routes/gallary-comment');
var blogRoutes = require('./routes/blogs');
var gallaryRoutes = require('./routes/gallaries');
var userRoutes = require('./routes/user');
var adminUserRoutes = require('./routes/adminUser');
var appRoutes = require('./routes/app');

var app = express();
// mongoose.connect('localhost:27017/cms');
mongoose.connect('tian:93899389@ds031617.mlab.com:31617/cms');

cloudinary.config({ 
  cloud_name: 'dho1fmz51', 
  api_key: '973987834418476', 
  api_secret: 'cxIGZPkSVmjlELWuicbe0T8DRQU' 
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/comment/blogs', blogCommentRoutes);
app.use('/comment/gallaries', gallaryCommentRoutes);
app.use('/blogs', blogRoutes);
app.use('/gallaries', gallaryRoutes);
app.use('/user', userRoutes);
app.use('/admins', adminUserRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.render('index');
});

module.exports = app;
