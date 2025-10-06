import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full px-[12%] py-12 border-t ${
      isDark ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="text-center mb-4">
            <h2 className={`text-3xl font-semibold font-ovo flex items-center gap-1 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Yasith
              <span className="text-pink-500 text-4xl">.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className={`flex items-center gap-2 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <Image 
                src={isDark ? assets.mail_icon_dark : assets.mail_icon}
                alt="Email" 
                width={20}
                height={20}
              />
              <span>yasith.banula06@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className={`w-full h-[1px] ${
          isDark ? 'bg-gray-800' : 'bg-gray-200'
        } mb-6`}></div>

        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 md:mb-0`}>
            © {currentYear} Yasith Banula. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a href="#" className={`transition-colors duration-300 ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Terms of Services
            </a>
            <a href="#" className={`transition-colors duration-300 ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Privacy Policy
            </a>
            <a href="#contact" className={`transition-colors duration-300 ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              Connect with me
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
