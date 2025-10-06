import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='services' className='w-full px-[12%] py-16 scroll-mt-20'>
      {/* Background decoration */}
      <div className="absolute left-0 right-0 -z-10 opacity-10">
        <div className={`w-full h-96 ${isDark ? 'bg-blue-700' : 'bg-blue-200'} blur-[150px] rounded-full -translate-y-1/2`}></div>
      </div>
      
      <div className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          What I offer
        </h4>

        <h2 className='text-center text-5xl font-ovo animate-slide-up' style={{ animationDelay: '0.1s' }}>
          My services
        </h2>

        <p className={`text-center max-w-2xl mx-auto mt-6 mb-10 font-ovo animate-slide-up ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{ animationDelay: '0.2s' }}>
          I offer a range of services to help you achieve your goals. Whether you're looking for web development, 
          design, or consulting, I've got you covered with professional solutions tailored to your needs.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
          {serviceData.map(({icon, title, description, link}, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl px-8 py-12 transition-all duration-500 
              hover:-translate-y-2 hover:shadow-xl cursor-pointer animate-fade-in ${
                isDark 
                ? 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-700' 
                : 'bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Animated background effect */}
              <div className={`absolute inset-0 -z-10 transition-transform duration-700 opacity-0 
                group-hover:opacity-10 group-hover:scale-150 ${isDark ? 'bg-blue-600' : 'bg-blue-400'} rounded-full`}></div>
              
              {/* Icon wrapper with animation */}
              <div className={`rounded-2xl p-4 inline-flex transition-all duration-500 
                group-hover:-translate-y-1 group-hover:scale-110 ${
                  isDark ? 'bg-gray-700' : 'bg-blue-50'
                }`}>
                <Image 
                  src={icon} 
                  alt={title} 
                  className='w-12 h-12 object-contain transition-transform duration-500 group-hover:scale-110' 
                />
              </div>
              
              <h3 className={`text-xl font-semibold mt-6 mb-4 transition-colors duration-300 ${
                isDark ? 'text-white group-hover:text-blue-300' : 'text-gray-800 group-hover:text-blue-600'
              }`}>{title}</h3>
              
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {description}
              </p>
              
              <div className='mt-6 transition-all duration-500 opacity-80 group-hover:opacity-100'>
                <a 
                  href={link || '#'} 
                  className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                    isDark 
                    ? 'text-blue-400 group-hover:text-blue-300' 
                    : 'text-blue-600 group-hover:text-blue-700'
                  }`}
                >
                  Learn more 
                  <Image 
                    alt='right arrow' 
                    src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
                    className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative line */}
        <div className={`w-24 h-1 mx-auto mt-16 rounded-full animate-pulse ${
          isDark ? 'bg-blue-600' : 'bg-blue-500'
        }`}></div>
      </div>
    </div>
  )
}

export default Services