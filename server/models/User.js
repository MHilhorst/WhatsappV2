const mongoose = require("mongoose");
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
  }
});

module.exports = mongoose.model("User", UserSchema);
