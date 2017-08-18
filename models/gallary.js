var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GallaryComment = require('./gallary-comment');

var schema = new Schema({
  title: { type: String, required: true},
  date: { type: String, required: true},
  city:{ type: String, required: true},
  state:{ type: String, required: true},
  thumb: { type: String, required: true},
  full: { type: String, required: true},
  likes: { type: Number, default: 0},
  comments:  [{
    type:Schema.ObjectId,
    ref: 'GallaryComment'
  }]
});

module.exports = mongoose.model('Gallary', schema);