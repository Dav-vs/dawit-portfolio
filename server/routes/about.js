const express = require('express');
const router = express.Router();
const { getAbout } = require('../controllers/aboutController');

// @route   GET /api/about
// @desc    Get about data
// @access  Public
router.get('/', getAbout);

module.exports = router; 