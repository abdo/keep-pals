const mongoose = require('mongoose');

const { Schema } = mongoose;

// Stories model
const StoriesSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  items: [
    {
      friend: { type: Schema.Types.ObjectId, ref: 'friend' },
      body: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Stories = mongoose.model('stories', StoriesSchema);
