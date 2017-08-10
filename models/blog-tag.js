var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Blog = require('./blog');

var schema = new Schema({
  tag: { type: String, required: true},
  blogId: { type: Schema.ObjectId, ref: 'Blog'},
});

module.exports = mongoose.model('BlogTag', schema);