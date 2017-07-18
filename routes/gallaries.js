var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var Gallary = require('../models/gallary');

// var messages = {

// }

router.get('/', function(req, res, next) {
  Gallary.find({}, function(err, gallary) {
        if(err) {
          return res.status(500).json({
            title:'An Error Occurred',
            error:err
          });
        }
        console.log(gallary);
        res.status(200).json({
          message: 'Success',
          obj: gallary
        });
      });
});

router.post('/', function(req, res, next) {
  var gallary = new Gallary({
    title:req.body.title,
    date:req.body.date,
    city:req.body.city,
    state:req.body.state,
    thumb:req.body.thumb,
    full:req.body.full
  });
  console.log("gallary route");
  console.log(gallary);
  gallary.save(function (err, result) {

  console.log(err);
    if(err) {
      return res.status(500).json({
        title: 'Error when saving gallary',
        error:err
      });
    }
    res.status(201).json({
      message:'Saved gallary',
      obj:result
    });
  });
});

module.exports = router;