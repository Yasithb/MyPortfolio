import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useInView } from 'react-intersection-observer'

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Create ref for scroll animations
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="work" className={`w-full px-[12%] py-24 scroll-mt-20 relative ${
      isDark ? 'bg-[#111827]' : 'bg-gray-50'
    }`}>
      {/* Background decoration elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-10 right-[10%] w-2 h-2 rounded-full bg-blue-400/30 animate-float"></div>
      <div className="absolute top-1/4 right-[30%] w-3 h-3 rounded-full bg-blue-500/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full bg-blue-400/30 animate-float-delay"></div>
      <div className="absolute top-1/2 left-[15%] w-3 h-3 rounded-full bg-blue-500/20 animate-float-slow-delay"></div>
      
      <div ref={headerRef} className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo ${headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out ${
          isDark ? 'text-blue-500' : 'text-blue-600'
        }`}>
          <span className="relative inline-block">
            My Portfolio
            <span className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 origin-left ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } ${headerInView ? 'animate-expand-line' : ''}`}></span>
          </span>
        </h4>

        <h2 className={`text-center text-5xl font-bold relative inline-block w-full ${headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out delay-100 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="relative">
            My Latest Work
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } ${headerInView ? 'animate-expand' : ''}`}></span>
          </span>
        </h2>

        <p className={`text-center max-w-2xl mx-auto mt-6 mb-10 font-ovo ${headerInView ? 'opacity-100' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out delay-200 ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          I take pride in my work and strive to deliver the best results for my clients. 
          Here are a few examples of my latest projects that showcase my skills and expertise.
        </p>
      </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-8'>
          {workData.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${
                isDark 
                  ? 'from-gray-800 to-gray-900 border-gray-700' 
                  : 'from-gray-800 to-gray-900 border-gray-600'
              } rounded-2xl border overflow-hidden shadow-xl
                transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl
                group cursor-pointer ${
                  headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ 
                transitionDelay: `${0.3 + 0.1 * (index % 3)}s` 
              }}
            >
              {/* Header Section */}
              <div className="p-6 pb-4 text-center">
                <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="text-gray-400 text-xs font-medium tracking-wider group-hover:text-blue-300 transition-colors duration-300">
                  {project.techStack || "REACT | NODE.JS | MONGODB | EXPRESS"}
                </div>
              </div>
              
              {/* Image Section */}
              <div className="px-4 pb-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-blue-50 relative">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Simple overlay on hover */}
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a 
                        href={project.link || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-white transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0 hover:scale-105 flex items-center gap-2"
                      >
                        <span>View Project</span>
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                          className="transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simple bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Show More Button */}
        <div className={`flex justify-center mt-12 mb-8 ${headerInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out delay-500`}>
          <button 
            className={`group inline-flex items-center justify-center gap-3 py-4 px-12 
            rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
            ${isDark 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
            }`}
          >
            <span className="font-medium">Show more</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Bottom decorative line */}
        <div className={`w-24 h-1 mx-auto mt-10 rounded-full animate-pulse ${
          isDark ? 'bg-blue-600' : 'bg-blue-500'
        }`}></div>
    </div>
  )
}

export default Work