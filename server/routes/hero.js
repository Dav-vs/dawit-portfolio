const express = require('express');
const router = express.Router();
const { getHero } = require('../controllers/heroController');

// @route   GET /api/hero
// @desc    Get hero data
// @access  Public
router.get('/', getHero);

module.exports = router; 