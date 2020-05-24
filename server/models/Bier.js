const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BierSchema = new Schema({
  beer_amount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Bier', BierSchema);
