const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'davsis1993@gmail.com',
      pass: 'oyleudldetsqzmob' // Use App Password for Gmail
    }
  });
};

// Send email function
const sendEmail = async (to, subject, html) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: 'davsis1993@gmail.com',
      to: to,
      subject: subject,
      html: html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Send contact form email
const sendContactEmail = async (contactData) => {
  const { name, email, message } = contactData;
  
  const subject = `New Contact Message from ${name}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #64ffda; padding-bottom: 10px;">
          New Contact Message
        </h2>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #666; margin-bottom: 10px;">Contact Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #666; margin-bottom: 10px;">Message:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #64ffda;">
            <p style="margin: 0; line-height: 1.6; color: #333;">${message}</p>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px;">
          <p>This message was sent from your portfolio contact form.</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  `;

  return sendEmail('davsis1993@gmail.com', subject, html);
};

module.exports = {
  sendEmail,
  sendContactEmail
}; 