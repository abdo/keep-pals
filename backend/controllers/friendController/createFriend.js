const mongoose = require('mongoose');

// Models
const Friend = mongoose.model('friend');

module.exports = (req, res) => {
  res.send(req.user);
};
