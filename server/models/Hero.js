const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  summary: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  }
}, {
  timestamps: true
});

// Ensure only one hero document exists
heroSchema.statics.getHero = async function() {
  let hero = await this.findOne();
  if (!hero) {
    hero = await this.create({
      name: 'Your Name',
      summary: 'Full-stack developer passionate about creating innovative web solutions with modern technologies.'
    });
  }
  return hero;
};

module.exports = mongoose.model('Hero', heroSchema); 