import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='about' className='w-full px-[12%] py-24 scroll-mt-20 relative'>
      {/* Background decoration elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}>
          Introduction
        </h4>

        <h2 className='text-center text-5xl font-bold animate-slide-up relative inline-block w-full mb-8'>
          <span className="relative">
            About me
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            }`}></span>
          </span>
        </h2>
      </div>

      <div className='flex flex-col lg:flex-row items-center gap-20 my-12'>
        <div className='w-64 sm:w-80 max-w-none animate-slide-right relative group'>
          {/* Decorative elements */}
          <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/30 via-blue-400/20 to-blue-600/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 animate-pulse-slow -z-10 ${
            isDark ? 'opacity-25' : 'opacity-20'
          }`}></div>
          
          <div className={`absolute -inset-1 ${
            isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
          } rounded-3xl backdrop-blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          <div className={`rounded-3xl overflow-hidden ${
            isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 to-gray-100'
          } p-3 shadow-lg ${isDark ? 'shadow-blue-900/20' : 'shadow-blue-300/30'}`}>
            <div className='rounded-2xl overflow-hidden relative'>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 z-0"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image 
                  src={assets.user_image1} 
                  alt='Professional portrait' 
                  width={400}
                  height={500}
                  className='w-full aspect-[4/5] object-cover object-top transition-all duration-500 group-hover:scale-105 group-hover:filter group-hover:brightness-110' 
                  priority
                />
                <div className={`absolute inset-0 pointer-events-none ${
                  isDark ? 'bg-gradient-to-t from-blue-900/40 via-blue-900/10 to-transparent' : 'bg-gradient-to-t from-blue-500/20 via-blue-200/10 to-transparent'
                } mix-blend-overlay transition-opacity duration-500 group-hover:opacity-80`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 animate-slide-left'>
          <div className="relative">
            <div className={`absolute -inset-1 rounded-lg ${isDark ? 'bg-blue-500/5' : 'bg-blue-600/5'} blur-md -z-10`}></div>
            <p className={`mb-10 max-w-2xl font-ovo leading-relaxed text-lg relative ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I am a <span className={`font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>dedicated IT undergraduate</span> with a strong foundation in SE and QA. 
              With skills in MERN stack development and hands-on experience in software testing, I focus on building reliable, high-quality applications. I am passionate about learning new technologies, improving my craft, and contributing to impactful projects. As a quick learner and team player, I am always eager to take on new challenges and grow as a developer while ensuring software reliability, usability, and performance.
            </p>
          </div>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li 
                className={`group relative rounded-xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  isDark 
                    ? 'border border-gray-700/50 bg-gray-800/80 hover:bg-gray-700/90 hover:shadow-lg hover:shadow-blue-900/20'
                    : 'border border-gray-200 bg-white/90 hover:bg-white hover:shadow-xl hover:shadow-blue-200/30'
                }`}
                key={index}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                {/* Background glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${
                  isDark 
                    ? 'from-blue-800/0 via-blue-800/10 to-blue-800/0' 
                    : 'from-blue-500/0 via-blue-500/10 to-blue-500/0'
                } blur opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10`}></div>
                
                {/* Icon container */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                  isDark
                    ? 'bg-gray-700/50 group-hover:bg-blue-900/30'
                    : 'bg-blue-50 group-hover:bg-blue-100'
                }`}>
                  <Image 
                    src={isDark ? iconDark : icon} 
                    alt={title} 
                    className='w-7 transition-transform duration-300 group-hover:scale-110' 
                  />
                </div>
                
                <h3 className={`mb-3 font-semibold text-lg ${
                  isDark ? 'text-gray-100 group-hover:text-white' : 'text-gray-800 group-hover:text-blue-700'
                } transition-colors duration-300`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'
                } transition-colors duration-300`}>
                  {description}
                </p>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 mb-6 relative">
            <h4 className={`font-semibold text-xl relative inline-block ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            } animate-slide-up`} style={{ animationDelay: '0.5s' }}>
              Tools and Technologies I use
              <span className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                isDark ? 'bg-blue-500' : 'bg-blue-600'
              }`}></span>
            </h4>
          </div>

          <ul className='flex flex-wrap items-center gap-4 sm:gap-5 max-w-2xl'>
            {toolsData.map((tool, index) => (
              <li 
                className={`group flex items-center justify-center w-14 sm:w-16 aspect-square border rounded-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:rotate-3 ${
                  isDark 
                    ? 'border-gray-700/50 bg-gray-800/80 hover:bg-gray-700 hover:border-blue-800/50 hover:shadow-lg hover:shadow-blue-900/20'
                    : 'border-gray-200 bg-white hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-200/30'
                }`}
                key={index}
                style={{ animationDelay: `${0.1 * (index + 3)}s`, animation: 'slideUp 0.5s ease-out forwards' }}
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark ? 'from-blue-900/20 to-transparent' : 'from-blue-100 to-transparent'
                  }`}></div>
                  <Image 
                    src={tool} 
                    alt='Tool' 
                    className='w-7 sm:w-9 transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 z-10' 
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;