const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { sendContactEmail } = require('./utils/emailService');

async function testEmail() {
  try {
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***' : 'NOT SET');
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email credentials not found in .env file');
      return;
    }
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from your portfolio contact form.'
    };
    
    console.log('Sending test email...');
    await sendContactEmail(testData);
    console.log('✅ Test email sent successfully!');
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n🔧 Troubleshooting tips:');
      console.error('1. Make sure 2-Factor Authentication is enabled on your Gmail account');
      console.error('2. Generate a new App Password: https://myaccount.google.com/apppasswords');
      console.error('3. Use the 16-character App Password (not your regular password)');
      console.error('4. Make sure "Less secure app access" is disabled');
    }
  }
}

testEmail(); 