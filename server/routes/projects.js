const express = require('express');
const router = express.Router();
const { getProjects } = require('../controllers/projectController');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', getProjects);

module.exports = router; 