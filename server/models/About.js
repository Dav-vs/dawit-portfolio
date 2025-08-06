const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  bio: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  skills: [{
    type: String,
    trim: true,
    maxlength: 50
  }],
  socialLinks: {
    github: {
      type: String,
      trim: true,
      default: ''
    },
    linkedin: {
      type: String,
      trim: true,
      default: ''
    },
    email: {
      type: String,
      trim: true,
      default: ''
    }
  }
}, {
  timestamps: true
});

// Ensure only one about document exists
aboutSchema.statics.getAbout = async function() {
  let about = await this.findOne();
  if (!about) {
    about = await this.create({
      jobTitle: 'Full Stack Developer',
      bio: 'Passionate developer with expertise in modern web technologies. I love creating user-friendly applications that solve real-world problems.',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Express.js'],
      socialLinks: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        email: 'davsis1993@example.com'
      }
    });
  }
  return about;
};

module.exports = mongoose.model('About', aboutSchema); 