// User model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, require: true},
  password: {type: String, require: true},
  created: {type: Date}
});


mongoose.model('User', UserSchema);

