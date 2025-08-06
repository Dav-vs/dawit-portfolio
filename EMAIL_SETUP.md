# Email Setup Guide

This guide will help you set up email functionality for your portfolio contact form.

## Prerequisites

1. A Gmail account
2. 2-factor authentication enabled on your Gmail account

## Step 1: Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security"
3. Under "Signing in to Google", find "2-Step Verification" and click on it
4. Scroll down to "App passwords"
5. Click "Generate" and select "Mail" as the app
6. Copy the generated 16-character password

## Step 2: Configure Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/portfolio

# Email Configuration (Gmail)
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

Replace:
- `your.email@gmail.com` with your actual Gmail address
- `your-16-character-app-password` with the App Password you generated

## Step 3: Update Contact Information

In `client/src/components/Contact.js`, update the email address to your actual email:

```javascript
<p className="text-secondary-text">your.email@gmail.com</p>
```

## Step 4: Test the Email Functionality

1. Start the server: `cd server && npm start`
2. Start the client: `cd client && npm start`
3. Go to the contact form and send a test message
4. Check your email inbox for the notification

## How It Works

When someone submits the contact form:

1. The message is saved to the database
2. An email notification is sent to your configured email address
3. The email includes:
   - Sender's name and email
   - The message content
   - Timestamp
   - Professional HTML formatting

## Troubleshooting

### Email not sending?
- Check that your Gmail credentials are correct
- Ensure 2-factor authentication is enabled
- Verify you're using an App Password, not your regular password
- Check the server console for error messages

### Gmail security settings
- Make sure "Less secure app access" is disabled (use App Passwords instead)
- Check that your Gmail account allows SMTP access

## Security Notes

- Never commit your `.env` file to version control
- Use App Passwords instead of your main Gmail password
- The email service is configured to not fail the request if email sending fails
- All contact form data is validated before processing

## Alternative Email Services

If you prefer not to use Gmail, you can modify `server/utils/emailService.js` to use other services like:
- SendGrid
- Mailgun
- AWS SES
- Outlook/Hotmail

Just update the transporter configuration accordingly. 