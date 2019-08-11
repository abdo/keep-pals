const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// User model
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  password: String,
  location: String,
  picture: String,
  pushNotificationToken: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
