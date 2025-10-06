import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '../context/ThemeContext'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../../lib/emailjs'

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    mobile: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
          EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
          EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
        throw new Error('EmailJS not configured. Please check your configuration.');
      }

      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Submission',
        mobile: formData.mobile,
        message: formData.message,
        to_email: 'yasith.banula06@gmail.com' // Replace with your email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', mobile: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError(error.text || error.message || 'Failed to send email. Please try again.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-16 scroll-mt-20 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-10">
        <div className={`absolute w-96 h-96 rounded-full ${isDark ? 'bg-blue-700' : 'bg-blue-200'} blur-[150px] -top-20 -left-20`}></div>
        <div className={`absolute w-96 h-96 rounded-full ${isDark ? 'bg-purple-700' : 'bg-purple-200'} blur-[150px] bottom-0 right-0`}></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          <span className="relative inline-block">
            Connect with me
            <span className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 origin-left ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } animate-expand-line`}></span>
          </span>
        </h4>

        <h2 className={`text-center text-5xl font-bold animate-slide-up relative inline-block w-full ${
          isDark ? 'text-white' : 'text-gray-900'
        }`} style={{ animationDelay: '0.1s' }}>
          <span className="relative">
            Get in touch
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } animate-expand`}></span>
          </span>
        </h2>

        <p className={`text-center max-w-2xl mx-auto mt-6 mb-10 font-ovo animate-slide-up ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{ animationDelay: '0.2s' }}>
          I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <div className="relative">
              <input 
                type="text" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                    : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
                }`}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input 
                type="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                    : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
                }`}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Subject Input */}
            <div className="relative">
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Email subject" 
                className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                    : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
                }`}
              />
            </div>

            {/* Mobile Number Input */}
            <div className="relative">
              <input 
                type="tel" 
                name="mobile" 
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile number" 
                className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                    : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
                }`}
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-8">
            <textarea 
              name="message" 
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message" 
              rows="5"
              className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white focus:ring-blue-500' 
                  : 'bg-white border-gray-200 text-gray-800 focus:ring-blue-300'
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`group inline-flex items-center justify-center gap-3 py-4 px-12 
              rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
              ${isDark 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
              } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span className="font-medium">{isSubmitting ? 'Submitting...' : 'Submit now'}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className={`mt-6 p-4 rounded-lg text-center animate-fade-in ${
              isDark ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
            }`}>
              <p className="font-medium">Thank you for your message!</p>
              <p className="text-sm mt-1">Your email has been sent successfully. I'll get back to you soon!</p>
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className={`mt-6 p-4 rounded-lg text-center animate-fade-in ${
              isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'
            }`}>
              <p className="font-medium">Failed to send message</p>
              <p className="text-sm mt-1">{submitError}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact