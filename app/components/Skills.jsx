import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useInView } from 'react-intersection-observer';

// Skills data
const codingSkills = [
  { name: "HTML/CSS", percentage: 90 },
  { name: "JavaScript", percentage: 60 },
  { name: "Bootstrap", percentage: 60 },
  { name: "JAVA", percentage: 80 },
  { name: "PHP", percentage: 70 },
  { name: "MySQL", percentage: 90 }
];

const professionalSkills = [
  { name: "Frontend Development", percentage: 90 },
  { name: "Quality Testing", percentage: 80 },
  { name: "Marketing", percentage: 80 },
  { name: "Business analysis", percentage: 70 },
  { name: "Project Management", percentage: 70 },
  { name: "Content Creation", percentage: 95 }
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Use Intersection Observer to trigger animations when element is in view
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id="skills" className={`w-full px-[12%] py-24 scroll-mt-20 relative overflow-hidden ${
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
      
      <div className="relative mb-20">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-blue-500' : 'text-blue-600'
        }`}>
          Introduction
        </h4>
        
        <h2 className={`text-center text-5xl font-bold animate-slide-up relative inline-block w-full ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="relative">
            My Skills
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-blue-500' : 'bg-blue-600'
            } animate-expand`}></span>
          </span>
        </h2>
      </div>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        {/* Coding Skills */}
        <div className={`p-8 rounded-xl ${
          isDark 
            ? 'bg-[#162033] shadow-lg shadow-blue-900/10' 
            : 'bg-gray-50 shadow-lg shadow-blue-200/50'
        } animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
          <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Coding Skills
          </h3>
          
          <div className="space-y-6">
            {codingSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {skill.name}
                  </span>
                  <span className="text-blue-500 font-bold">{skill.percentage}%</span>
                </div>
                
                <div className={`w-full h-3 rounded-full overflow-hidden ${
                  isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                } border border-gray-700/10`}>
                  <div 
                    className={`h-full rounded-full bg-blue-500 animate-skill-progress transition-all duration-1000 ease-out ${
                      inView ? 'opacity-100' : 'opacity-0 w-0'
                    }`}
                    style={{ 
                      width: inView ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1 + 0.3}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className={`p-8 rounded-xl ${
          isDark 
            ? 'bg-[#162033] shadow-lg shadow-blue-900/10' 
            : 'bg-gray-50 shadow-lg shadow-blue-200/50'
        } animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
          <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional Skills
          </h3>
          
          <div className="space-y-6">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {skill.name}
                  </span>
                  <span className="text-blue-500 font-bold">{skill.percentage}%</span>
                </div>
                
                <div className={`w-full h-3 rounded-full overflow-hidden ${
                  isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                } border border-gray-700/10`}>
                  <div 
                    className={`h-full rounded-full bg-blue-500 animate-skill-progress transition-all duration-1000 ease-out ${
                      inView ? 'opacity-100' : 'opacity-0 w-0'
                    }`}
                    style={{ 
                      width: inView ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.1 + 0.3}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;