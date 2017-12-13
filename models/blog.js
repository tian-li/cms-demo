var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  mdcontent: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  lastUpdate: { type: Date },
  createDate: { type: Date },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'BlogComment'
  }],
  tags: [{ type: String }]
});

module.exports = mongoose.model('Blog', schema);