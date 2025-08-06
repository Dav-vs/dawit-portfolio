const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contactController');

// @route   POST /api/contact
// @desc    Send a message
// @access  Public
router.post('/', sendMessage);

module.exports = router; 