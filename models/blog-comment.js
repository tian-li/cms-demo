var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  content: { type: String, required: true},
  username: { type: String, required: true},
  blogId: { type: Schema.Types.ObjectId, ref: 'Blog'},
  date: { type: Date, default:Date.now()},
});

module.exports = mongoose.model('BlogComment', schema);