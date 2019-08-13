const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  // No much validation is done, this is to be remade when there will be more than one user
  const errors = {};
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location,
    picture: req.body.picture,
  });

  newUser
    .save()
    .then((savedUser) => res.json(savedUser))
    .catch((dbError) => {
      errors.error = 'Error saving user to database';
      return res.status(500).json({ ...errors, ...dbError });
    });
};
