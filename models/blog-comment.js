var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Blog = require('./blog');

var schema = new Schema({
  content: { type: String, required: true},
  username: { type: String, required: true},
  blogId: { type: Schema.ObjectId, ref: 'Blog'},
  date: { type: Date, default:Date.now()},
});

module.exports = mongoose.model('BlogComment', schema);