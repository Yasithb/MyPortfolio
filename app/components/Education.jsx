import Image from 'next/image';
import { assets } from '@/assets/assets';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Education timeline data
const educationData = [
  {
    institution: "Sabaragamuwa University of Sri Lanka",
    period: "2023 - Present",
    degree: "BSc (Hons) in Computing and Information Systems",
    description: "Pursuing a BSc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka, with a current GPA of 3.32. Building strong skills in software engineering, quality assurance, and modern web technologies."
  },
  {
    institution: "H/Walsmulla National School",
    period: "Jan 2012 - Mar 2022",
    degree: "G.C.E Advance Level Physical Science Stream",
    description: "Completed Advanced Level (A/L) with A1 and C2 grade in the Physical Science stream at H/Walsmulla National School, building a strong foundation in mathematics, physics, and analytical thinking."
  }
];

const Education = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='education' className={`w-full px-[12%] py-24 scroll-mt-20 relative overflow-hidden ${
      isDark ? 'bg-[#111827]' : 'bg-gray-50'
    }`}>
      {/* Enhanced background decoration elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-60 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-10 right-[10%] w-2 h-2 rounded-full bg-blue-400/30 animate-float"></div>
      <div className="absolute top-1/4 right-[30%] w-3 h-3 rounded-full bg-blue-500/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full bg-blue-400/30 animate-float-delay"></div>
      <div className="absolute top-1/2 left-[15%] w-3 h-3 rounded-full bg-blue-500/20 animate-float-slow-delay"></div>
      
      <div className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-blue-500' : 'text-blue-600'
        }`}>
          <span className="relative inline-block">
            Qualification
            <span className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } animate-expand-line`}></span>
          </span>
        </h4>

        <h2 className={`text-center text-5xl font-bold animate-slide-up relative inline-block w-full ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="relative">
            My Education
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } animate-expand`}></span>
          </span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-20 relative">
        {/* Animated timeline line */}
        <div className={`absolute left-[15px] top-0 bottom-0 w-0.5 ${
          isDark ? 'bg-blue-500/30' : 'bg-blue-600/30'
        } animate-grow-down`}></div>
        
        {/* Education items */}
        {educationData.map((item, index) => (
          <div 
            key={index}
            className="relative pl-14 pb-16 animate-fade-in-up group hover:transform hover:translate-x-2 transition-all duration-500"
            style={{ animationDelay: `${0.3 * (index + 1)}s` }}
          >
            {/* Timeline dot with pulse animation */}
            <div className={`absolute left-0 top-1.5 w-7 h-7 rounded-full ${
              isDark 
                ? 'bg-[#111827] border-4 border-blue-500' 
                : 'bg-gray-50 border-4 border-blue-600'
            } z-10 group-hover:scale-110 transition-transform duration-300`}>
              <div className={`absolute inset-1 rounded-full ${
                isDark ? 'bg-blue-500/30' : 'bg-blue-600/30'
              } animate-ping-slow opacity-75`}></div>
            </div>
            
            {/* Animated connecting line from dot to content */}
            <div className={`absolute left-[13px] top-7 h-[calc(100%-30px)] w-0.5 ${
              isDark ? 'bg-blue-500/10' : 'bg-blue-600/10'
            }`}></div>
            
            {/* Institution with hover effect */}
            <div className={`font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300 ${
              isDark ? 'text-blue-500' : 'text-blue-600'
            }`}>{item.institution}</div>
            
            {/* Period */}
            <div className={`text-sm mb-2 group-hover:translate-x-1 transition-transform duration-300 delay-75 ${
              isDark ? 'text-blue-400' : 'text-blue-500'
            }`}>{item.period}</div>
            
            {/* Degree with hover effect */}
            <div className={`text-2xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300 delay-100 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{item.degree}</div>
            
            {/* Description with fade-in effect */}
            <div className="overflow-hidden">
              <p className={`leading-relaxed max-w-2xl group-hover:translate-x-1 transition-transform duration-300 delay-150 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </div>
            
            {/* Decorative accent */}
            <div className={`absolute left-2 top-7 h-0 w-2 group-hover:h-12 transition-all duration-500 ${
              isDark ? 'bg-blue-500/30' : 'bg-blue-600/30' 
            } rounded-full`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;