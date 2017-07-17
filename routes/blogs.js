var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var Blog = require('../models/blog');

// var messages = {

// }

router.get('/', function(req, res, next) {
  Blog.find({}, function(err, blogs) {
        if(err) {
          return res.status(500).json({
            title:'An Error Occurred',
            error:err
          });
        }
        console.log(blogs);
        res.status(200).json({
          message: 'Success',
          obj: blogs
        });
      });
});

router.post('/', function(req, res, next) {
  var blog = new Blog({
    title:req.body.title,
    summary:req.body.summary,
    content:req.body.content,
    imageUrl:req.body.imageUrl
  });
  console.log("blog route");
  console.log(blog);
  blog.save(function (err, result) {

  console.log(err);
    if(err) {
      return res.status(500).json({
        title: 'Error when saving blog',
        error:err
      });
    }
    res.status(201).json({
      message:'Saved blog',
      obj:result
    });
  });
});

module.exports = router;