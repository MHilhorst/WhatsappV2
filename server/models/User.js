const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  beer_amount: {
    type: Number,
    default: 0,
  },
  despo_amount: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
  },
  updates: {
    type: Array,
    default: [],
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', UserSchema);
