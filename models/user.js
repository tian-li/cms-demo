var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  username: { type: String, required: true},
  password: { type: String, required: true},
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);