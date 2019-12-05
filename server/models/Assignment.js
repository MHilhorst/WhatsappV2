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
  file_data: {
    type: String
  },
  file_name: {
    type: String
  },
  file_type: {
    type: String
  },
  user_id: {
    type: String
  },
  feedbackCount: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now()
  },
  assignmentUrlId: {
    type: Number,
    default: Date.now().valueOf()
  }
});

module.exports = mongoose.model('assignment', AssignmentSchema);
