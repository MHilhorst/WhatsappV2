const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  activated: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String
  },
  programming_languages: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('User', UserSchema);
