const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Friend model
const FriendSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  name: {
    type: String,
    required: true,
  },
  description: String,
  contacts: String,
  location: String,
  picture: String,
  state: {
    // current, archived (no notifications are sent about archived friends)
    type: String,
    default: 'current',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Friend = mongoose.model('friend', FriendSchema);
