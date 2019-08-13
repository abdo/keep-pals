const express = require('express');

const router = express.Router();

const friendController = require('../controllers/friendController');

// @route  POST api/friend
// @desc   Creates a friend for the logged in user
// @access Private
// @body
router.post('/', friendController.createFriend);

module.exports = router;
