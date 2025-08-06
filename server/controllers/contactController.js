const Message = require('../models/Message');
const { sendContactEmail } = require('../utils/emailService');

// @desc    Send a message
// @route   POST /api/contact
// @access  Public
const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    if (name.length > 100) {
      return res.status(400).json({ message: 'Name must be 100 characters or less' });
    }

    if (email.length > 100) {
      return res.status(400).json({ message: 'Email must be 100 characters or less' });
    }

    if (message.length > 1000) {
      return res.status(400).json({ message: 'Message must be 1000 characters or less' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }

    // Save message to database
    const newMessage = await Message.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim()
    });

    // Send email notification
    try {
      await sendContactEmail({ name, email, message });
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails, just log it
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  sendMessage
}; 