var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beanSchema = new Schema({
  name: String,
  origin: String,
  roast: String,
  flavor: String,
  body: String,
  acidity: String,
  price: String
});

var Bean = mongoose.model('Bean', beanSchema);

module.exports = Bean;
