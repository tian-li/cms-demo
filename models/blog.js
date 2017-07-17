var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  title: { type: String, required: true},
  summary: { type: String, required: true},
  content: { type: String, required: true},
  imageUrl: { type: String, required: true}
});

module.exports = mongoose.model('Blog', schema);