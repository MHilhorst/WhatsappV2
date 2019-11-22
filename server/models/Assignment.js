const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  title: {
    type: String
  },
  level: {
    type: Number
  },
  description: {
    type: String
  },
  programming_language: {
    type: Array,
    default: []
  },
  problem_description: {
    type: String
  },
  file_id: {
    type: String
  },
  user_id: {
    type: String
  }
});

module.exports = mongoose.model('assignment', AssignmentSchema);
