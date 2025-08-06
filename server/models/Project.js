const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  image: {
    type: String,
    trim: true,
    default: ''
  },
  technologies: [{
    type: String,
    trim: true,
    maxlength: 50
  }],
  githubUrl: {
    type: String,
    trim: true,
    default: ''
  },
  liveUrl: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema); 