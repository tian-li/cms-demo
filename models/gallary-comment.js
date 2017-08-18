var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Gallary = require('./gallary');

var schema = new Schema({
  content: { type: String, required: true},
  username: { type: String, required: true},
  gallaryId: { type: Schema.ObjectId, ref: 'Gallary'},
  date: { type: Date, default:Date.now()},
});

module.exports = mongoose.model('GallaryComment', schema);