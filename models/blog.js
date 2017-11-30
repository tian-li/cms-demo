var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BlogComment = require('./blog-comment');

var schema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  mdcontent: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  lastUpdate: { type: Date },
  createDate: { type: Date },
  comments: [{
    type: Schema.ObjectId,
    ref: 'BlogComment'
  }],
  tags: [{ type: String }]
});

module.exports = mongoose.model('Blog', schema);