const Hero = require('../models/Hero');

// @desc    Get hero data
// @route   GET /api/hero
// @access  Public
const getHero = async (req, res) => {
  try {
    const hero = await Hero.getHero();
    res.json(hero);
  } catch (error) {
    console.error('Error fetching hero:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getHero
}; 