const nodemailer = require('nodemailer');

// Test Gmail configuration
async function testGmail() {
  console.log('🔧 Testing Gmail Configuration...\n');
  
  const emailUser = 'davsis1993@gmail.com';
  const emailPass = 'oyleudldetsqzmob';
  
  console.log('Email User:', emailUser);
  console.log('Email Pass:', emailPass ? '***' : 'NOT SET');
  
  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
  
  // Verify connection
  try {
    console.log('\n📡 Testing connection to Gmail...');
    await transporter.verify();
    console.log('✅ Gmail connection successful!');
    
    // Send test email
    console.log('\n📧 Sending test email...');
    const mailOptions = {
      from: emailUser,
      to: emailUser,
      subject: 'Portfolio Contact Form Test',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Portfolio Contact Form Test</h2>
          <p>This is a test email from your portfolio contact form.</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      `
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Gmail test failed:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Gmail Authentication Issues:');
      console.log('1. Make sure 2-Factor Authentication is enabled');
      console.log('2. Generate a new App Password at: https://myaccount.google.com/apppasswords');
      console.log('3. Use the 16-character App Password (not your regular password)');
      console.log('4. Make sure "Less secure app access" is DISABLED');
    }
  }
}

testGmail(); 