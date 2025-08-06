const About = require('../models/About');

// @desc    Get about data
// @route   GET /api/about
// @access  Public
const getAbout = async (req, res) => {
  try {
    const about = await About.getAbout();
    res.json(about);
  } catch (error) {
    console.error('Error fetching about:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAbout
}; 