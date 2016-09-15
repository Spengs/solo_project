var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beanSchema = new Schema({
  name: String,
  origin: String,
  roast: String,
  flavor: String,
  body: String,
  acidity: String,
  price: String,
  aeropress: {
    dose: String,
    grind: String,
    bloomWeight: String,
    bloomTime: String,
    endWeight: String,
  },
  chemex: {
    dose: String,
    grind: String,
    bloomWeight: String,
    bloomTime: String,
    endWeight: String,
  },
  cone: {
    dose: String,
    grind: String,
    bloomWeight: String,
    bloomTime: String,
    endWeight: String,
  },
  frenchpress: {
    dose: String,
    grind: String,
    bloomWeight: String,
    bloomTime: String,
    endWeight: String,
  },

  // chemexDose: String,
  // chemexGrind: String,
  // chemexBloomWeight: String,
  // chemexBloomTime: String,
  // chemexEndWeight: String,
  // coneDose: String,
  // coneGrind: String,
  // coneBloomWeight: String,
  // coneBloomTime: String,
  // coneEndWeight: String,
  // frenchpressDose: String,
  // frenchpressGrind: String,
  // frenchpressBloomWeight: String,
  // frenchpressBloomTime: String,
  // frenchpressEndWeight: String,
  // aeropressDose: String,
  // aeropressGrind: String,
  // aeropressBloomWeight: String,
  // aeropressBloomTime: String,
  // aeropressEndWeight: String,
});

var Bean = mongoose.model('Bean', beanSchema);

module.exports = Bean;
