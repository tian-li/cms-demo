var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var Blog = require('../models/blog');
var BlogComment = require('../models/blog-comment');

router.post('/', function(req, res, next) {
  
  Blog.findById(req.body.blogId, function(err, blog) {
    if (err) {
      return res.status(500).json({
        title: 'Error when find blog with id on saving comment',
        error: err
      });
    }
    var blogComment = new BlogComment({
      content: req.body.content,
      username: req.body.username,
      blogId: blog
    });
    blogComment.save(function (err, result) {
      if(err) {
        return res.status(500).json({
          title: 'Error when saving blog',
          error:err
        });
      }
      blog.comments.push(blogComment);
      blog.save();
      res.status(201).json({
        message:'Saved blogComment',
        obj:result
      });
    });
  });
});

module.exports = router;