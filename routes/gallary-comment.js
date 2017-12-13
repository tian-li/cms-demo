var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Gallary = require('../models/gallary');
var GallaryComment = require('../models/gallary-comment');

router.post('/', function(req, res, next) {
  Gallary.findById(req.body.gallaryId, function(err, gallary) {
    if (err) {
      return res.status(500).json({
        title: 'Error when find gallary with id on saving comment',
        error: err
      });
    }
    var gallaryComment = new GallaryComment({
      content: req.body.content,
      username: req.body.username,
      gallaryId: gallary._id
    });
    gallaryComment.save(function (err, result) {
      if(err) {
        return res.status(500).json({
          title: 'Error when saving gallary',
          error:err
        });
      }
      gallary.comments.push(result._id);
      gallary.save();
      res.status(201).json({
        message:'Saved gallaryComment',
        obj:result
      });
    });
  });
});

module.exports = router;