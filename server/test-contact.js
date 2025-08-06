const { sendContactEmail } = require('./utils/emailService');

async function testContactForm() {
  try {
    console.log('📧 Testing Contact Form Email...\n');
    
    const testContact = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a test message from the portfolio contact form. I would like to discuss a potential project with you.'
    };
    
    console.log('Sending contact form email...');
    await sendContactEmail(testContact);
    console.log('✅ Contact form email sent successfully!');
    console.log('Check your email: davsis1993@gmail.com');
    
  } catch (error) {
    console.error('❌ Contact form test failed:', error.message);
  }
}

testContactForm(); 