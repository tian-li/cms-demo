var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var Blog = require('../models/blog');
var BlogComment = require('../models/blog-comment');

router.get('/', function(req, res, next) {
  Blog.find({})
    .sort('-lastUpdate')
    .exec(function(err, blogs) {
        if(err) {
          return res.status(500).json({
            title:'An Error Occurred',
            error:err
          });
        }
        // console.log(blogs);
        res.status(200).json({
          message: 'Success',
          obj: blogs
        });
      });
});

// populate
router.get('/:id', function(req, res, next) {
  Blog.findById(req.params.id)
    .populate('comments', ['content', 'date', 'username'])
    .exec(function (err, blog) {
      if(err) {
        return res.status(500).json({
              title: 'An error occurred',
              error: err
        });
      }
      if(!blog) {
        return res.status(500).json({
          title: 'No blog found',
          error: {message:'blog not found'}
        });
      }
      res.status(200).json({
          message:'Success',
          obj:blog
      });
    });
});

router.post('/', function(req, res, next) {
  var blog = new Blog({
    title:req.body.title,
    summary:req.body.summary,
    content:req.body.content,
    imageUrl:req.body.imageUrl,
    lastUpdate: req.body.lastUpdate,
    createDate: req.body.createDate,
    tags: req.body.tags
  });

  blog.save(function (err, result) {
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


router.put('/:id', function(req, res, next) {
  let id = req.params.id;

  Blog.findOneAndUpdate(id, {
    title:req.body.title,
    summary:req.body.summary,
    content:req.body.content,
    imageUrl:req.body.imageUrl,
    lastUpdate: req.body.lastUpdate,
    createDate: req.body.createDate,
    tags: req.body.tags
  }, function(err, result) {
    if(err) {
      console.log(err);
      return res.status(500).json({
        title: 'Error when update blog',
        error:err
      });
    }
    console.log(result);
    return res.status(201).json({
      message:'updated blog',
      obj:result
    });
  });
});

module.exports = router;