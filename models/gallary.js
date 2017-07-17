var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  title: { type: String, required: true},
  date: { type: String, required: true},
  location: { 
    city:{ type: String, required: true},
    state:{ type: String, required: true}
  },
  imageUrl: { 
    thumb: { type: String, required: true},
    full: { type: String, required: true},
  }
});

module.exports = mongoose.model('Gallary', schema);