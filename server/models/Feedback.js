const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  assignment_id: {
    type: String
  },
  feedback_user_id: {
    type: String
  },
  feedback: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('feedback', FeedbackSchema);
