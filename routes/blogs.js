var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var Blog = require('../models/blog');
var BlogComment = require('../models/blog-comment');
var Tag = require('../models/blog-tag');

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
      
      console.log('blog with comment');
      console.log(blog);

      res.status(200).json({
          message:'Success',
          obj:blog
      });
    });
});

router.post('/', function(req, res, next) {
  //console.log(req.body.tags);

  var blog = new Blog({
    title:req.body.title,
    summary:req.body.summary,
    content:req.body.content,
    imageUrl:req.body.imageUrl,
    tags: req.body.tags
  });

  var tags = req.body.tags;
  tags.forEach(function(tag){
    Tag.findOne({tag: tag}, function(err, t) {
      if(err) {
        return res.status(500).json({
          title: 'Error when find tag',
          error: err
        });
      }
      if(!t) {
        var newtag = new Tag({
          tag: tag,
          blogId: blog
        });
        newtag.save();
      } else {
        t.blogId.push(blog);
        t.save();
      }
    });
  });
  console.log("blog route");
  console.log(blog);
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

module.exports = router;