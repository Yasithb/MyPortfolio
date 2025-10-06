# EmailJS Setup Guide for Your Portfolio Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: {{subject}} - New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Mobile: {{mobile}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (e.g., "user_abcdef123456")

## Step 5: Update Configuration
1. Open `lib/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here', 
  TEMPLATE_ID: 'your_actual_template_id_here'
}
```

3. In `app/components/Contact.jsx`, find this line:
```javascript
to_email: 'your-email@example.com' // Replace with your email
```
And replace it with your actual email address where you want to receive messages.

## Step 6: Test Your Form
1. Fill out the contact form on your website
2. Click submit
3. Check your email inbox for the message

## Template Variables Available:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Email subject (or default if empty)
- `{{mobile}}` - Sender's mobile number
- `{{message}}` - The message content

## Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic features

## Pro Plan Benefits:
- 1000+ emails per month
- Remove EmailJS branding
- Advanced features
- Priority support

## Troubleshooting:
1. **Emails not sending**: Check your service configuration and make sure your email provider allows EmailJS
2. **Template errors**: Verify all variable names match exactly
3. **Configuration errors**: Double-check your IDs and public key
4. **Spam folder**: Check if emails are going to spam

## Security Note:
EmailJS is designed for client-side use, so your public key can be safely exposed in frontend code. However, make sure to set up proper domain restrictions in your EmailJS dashboard to prevent abuse.