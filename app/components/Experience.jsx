import Image from 'next/image';
import { assets } from '@/assets/assets';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Experience data
const experienceData = [
  {
    company: "UI/UX Mastermind",
    period: "Mar 2025 - Present",
    position: "Graphic Designer",
    description: "Working as a Graphic Designer at UI/UX Mastermind since March 2025, creating visually appealing designs and enhancing user experiences through creative graphics and layouts."
  },
  {
    company: "YouTube",
    period: "May 2024 - Present",
    position: "Content Creator",
    description: "Content Creator at CodeHavenAcademy on YouTube, producing educational tutorials and coding tips to help developers solve problems, learn effectively, and grow their programming skills."
  },
  {
    company: "Fiverr",
    period: "Jun 2022 - Sep 2023",
    position: "Freelance Graphic Designer",
    description: "Freelance Graphic Designer on Fiverr from June 2022 to September 2023, creating custom designs and visual content for clients worldwide."
  },
  {
    company: "FlexyCode (Internship)",
    period: "Dec 2022 - Mar 2023",
    position: "Software Developer",
    description: "Software Developer intern at FlexyCode from December 2022 to March 2023, working on various projects and gaining hands-on experience in software development."
  }
];

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='experience' className={`w-full px-[12%] py-24 scroll-mt-20 relative ${
      isDark ? 'bg-[#111827]' : 'bg-gray-50'
    }`}>
      {/* Background decoration elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-10 left-[10%] w-2 h-2 rounded-full bg-purple-400/30 animate-float"></div>
      <div className="absolute top-1/4 left-[30%] w-3 h-3 rounded-full bg-purple-500/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-[20%] w-2 h-2 rounded-full bg-purple-400/30 animate-float-delay"></div>
      <div className="absolute top-1/2 right-[15%] w-3 h-3 rounded-full bg-purple-500/20 animate-float-slow-delay"></div>
      
      <div className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-purple-500' : 'text-purple-600'
        }`}>
          <span className="relative inline-block">
            Career Path
            <span className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 origin-left ${
              isDark ? 'bg-purple-500' : 'bg-purple-600'
            } animate-expand-line`}></span>
          </span>
        </h4>

        <h2 className={`text-center text-5xl font-bold animate-slide-up relative inline-block w-full ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="relative">
            My Experience
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-purple-500' : 'bg-purple-600'
            } animate-expand`}></span>
          </span>
        </h2>
      </div>

      {/* Timeline container with reversed direction */}
      <div className="max-w-3xl mx-auto mt-20 relative">
        {/* Timeline line */}
        <div className={`absolute right-[15px] top-0 bottom-0 w-0.5 ${
          isDark ? 'bg-purple-500/30' : 'bg-purple-600/30'
        } animate-grow-down`}></div>
        
        {/* Experience items - Note alignment to the right */}
        {experienceData.map((item, index) => (
          <div 
            key={index}
            className="relative pr-14 pb-16 text-right animate-fade-in-up group hover:transform hover:-translate-x-2 transition-all duration-500"
            style={{ animationDelay: `${0.3 * (index + 1)}s` }}
          >
            {/* Timeline dot with pulse animation - positioned on the right */}
            <div className={`absolute right-0 top-1.5 w-7 h-7 rounded-full ${
              isDark 
                ? 'bg-[#111827] border-4 border-purple-500' 
                : 'bg-gray-50 border-4 border-purple-600'
            } z-10 group-hover:scale-110 transition-transform duration-300`}>
              <div className={`absolute inset-1 rounded-full ${
                isDark ? 'bg-purple-500/30' : 'bg-purple-600/30'
              } animate-ping-slow opacity-75`}></div>
            </div>
            
            {/* Animated connecting line from dot to content */}
            <div className={`absolute right-[13px] top-7 h-[calc(100%-30px)] w-0.5 ${
              isDark ? 'bg-purple-500/10' : 'bg-purple-600/10'
            }`}></div>
            
            {/* Company */}
            <div className={`font-medium mb-1 group-hover:-translate-x-1 transition-transform duration-300 ${
              isDark ? 'text-purple-500' : 'text-purple-600'
            }`}>{item.company}</div>
            
            {/* Period */}
            <div className={`text-sm mb-2 group-hover:-translate-x-1 transition-transform duration-300 delay-75 ${
              isDark ? 'text-purple-400' : 'text-purple-500'
            }`}>{item.period}</div>
            
            {/* Position */}
            <div className={`text-2xl font-bold mb-3 group-hover:-translate-x-1 transition-transform duration-300 delay-100 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{item.position}</div>
            
            {/* Description */}
            <div className="overflow-hidden">
              <p className={`leading-relaxed max-w-2xl ml-auto group-hover:-translate-x-1 transition-transform duration-300 delay-150 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </div>
            
            {/* Decorative accent - on the right */}
            <div className={`absolute right-2 top-7 h-0 w-2 group-hover:h-12 transition-all duration-500 ${
              isDark ? 'bg-purple-500/30' : 'bg-purple-600/30' 
            } rounded-full`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;