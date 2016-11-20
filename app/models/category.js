// Category model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {type: String, require: true},
  slug: {type: String, require: true},
  created: {type: Date}
});


mongoose.model('Category', CategorySchema);

