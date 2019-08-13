const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// @route  POST api/user
// @desc   User Registration - Create new user
// @access Public
// @body   name, email, password, location, picture
router.post('/', userController.createUser);

module.exports = router;
