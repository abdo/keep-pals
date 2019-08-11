const mongoose = require('mongoose');

const { Schema } = mongoose;

// Reminders model
const RemindersSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  items: [
    {
      friend: { type: Schema.Types.ObjectId, ref: 'friend' },
      title: String,
      body: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Reminders = mongoose.model('reminders', RemindersSchema);
