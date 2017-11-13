var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var Gallary = require('../models/gallary');
var GallaryComment = require('../models/gallary-comment');

router.get('/', function (req, res, next) {
  Gallary.find({}, function (err, gallary) {
    if (err) {
      return res.status(500).json({
        title: 'An Error Occurred',
        error: err
      });
    }
    // console.log(gallary);
    res.status(200).json({
      message: 'Success',
      obj: gallary
    });
  });
});

router.get('/:id', function (req, res, next) {
  Gallary.findById(req.params.id)
    .populate('comments', ['content', 'username'])
    .exec(function (err, gallary) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      if (!gallary) {
        return res.status(500).json({
          title: 'No gallay found',
          error: { message: 'gallary not found' }
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: gallary
      });
    });
});

router.patch('/:id', function (req, res, next) {
  // console.log(req.params);
  Gallary.findById(req.params.id, function (err, gallary) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if (!gallary) {
      return res.status(500).json({
        title: 'No gallary found',
        error: { message: 'gallary not found' }
      });
    }
    gallary.likes = gallary.likes + 1;
    gallary.save(function (err, updatedGallary) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      // console.log("updatedGallary", updatedGallary);
      res.status(201).json({
        message: 'Liked this photo',
        obj: updatedGallary
      });
    });
  });
});

router.post('/', function (req, res, next) {
  var gallary = new Gallary({
    title: req.body.title,
    date: req.body.date,
    city: req.body.city,
    state: req.body.state,
    thumb: req.body.thumb,
    full: req.body.full
  });
  gallary.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'Error when saving gallary',
        error: err
      });
    }
    res.status(201).json({
      message: 'Saved gallary',
      obj: result
    });
  });
});
module.exports = router;