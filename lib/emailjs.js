// EmailJS configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key, Service ID, and Template ID
// 6. Replace the values below with your actual credentials

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'DQtIHgtL31-VzWb-A', // Replace with your EmailJS public key
  SERVICE_ID: 'service_tacna3u', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_m081itv' // Replace with your EmailJS template ID
}

// Email template variables that will be sent:
// - from_name: sender's name
// - from_email: sender's email
// - subject: email subject
// - mobile: sender's mobile number
// - message: the message content
// - to_email: your email (where you want to receive emails)