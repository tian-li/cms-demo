var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BlogComment = require('./blog-comment');
var BlogTag = require('./blog-tag');

var schema = new Schema({
  title: { type: String, required: true},
  summary: { type: String, required: true},
  content: { type: String, required: true},
  imageUrl: { type: String, required: true},
  comments:  [{
    type:Schema.ObjectId,
    ref: 'BlogComment'
  }],
  tags: [{
    type: Schema.ObjectId,
    ref: 'BlogTag'
  }]
});

module.exports = mongoose.model('Blog', schema);