// Each request config

// Shall be replaced by passport when there are many users, then, the req itself will be different.
// Passport also fills 'req.user'

module.exports = (req, res, next) => {
  const email = req.headers.email;
  const password = req.headers.password;
  User.find({ email, password })
    .then((user) => {
      if (user) {
        req.user = user;
        return next(null, user);
      }
      return next(null, false);
    })
    .catch((err) => next(null, false));
};
