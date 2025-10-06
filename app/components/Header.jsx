import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const Header = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Typing animation state
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const textArray = ['Full-Stack Developer', 'Quality Assurance Engineer', 'Software Automation Tester'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, textArray]);

  return (
    <div className='w-11/12 max-w-7xl mx-auto h-screen pt-24 flex flex-row
    items-center justify-between'>
      <div className='max-w-2xl flex flex-col gap-6'>
        <div className='flex flex-col'>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-extrabold animate-slide-up mb-2'>
            Hi, I'm Yasith
          </h1>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-extrabold animate-slide-up' 
              style={{ animationDelay: '0.2s' }}>
            Banula
          </h1>
          
          <div className='mt-3 text-xl md:text-2xl lg:text-3xl font-ovo'
              style={{ animationDelay: '0.3s' }}>
            <span className="relative inline-block">
              <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
                {currentText}
                <span className={`inline-block w-0.5 h-8 ml-1 ${isDark ? 'bg-blue-400' : 'bg-blue-600'} animate-pulse`}></span>
              </span>
            </span>
          </div>
        </div>
        
        <p className={`text-base md:text-lg mt-4 animate-slide-up ${isDark ? 'text-gray-300' : ''}`}
           style={{ animationDelay: '0.4s' }}>
          Dedicated IT undergraduate with a solid foundation in software engineering and quality assurance. Skilled in MERN stack development and software testing, with a passion for building efficient, reliable, and high-quality applications while continuously learning and contributing to impactful projects.
        </p>
        
        <div className='flex flex-row items-center gap-4 mt-4 animate-slide-up'
             style={{ animationDelay: '0.6s' }}>
            <a 
                href="/sample-resume.pdf"
                download="Yasith-Banula-CV.pdf"
                className={`group inline-flex items-center justify-center gap-3 px-10 py-3 
                rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
                ${isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                }`}
            >
              <span className="font-medium">Download CV</span>
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-y-1"
              >
                <path d="M12 4V16M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a href="#contact"
                className={`group inline-flex items-center justify-center gap-3 px-10 py-3 
                rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
                ${isDark 
                  ? 'bg-transparent border border-blue-500 text-white hover:bg-blue-500/10' 
                  : 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50'
                }`}
            >
              <span className="font-medium">Let's Talk</span>
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
        </div>
        
        <div className='flex flex-row items-center gap-3 mt-4 animate-slide-up'
             style={{ animationDelay: '0.8s' }}>
            <a href="https://www.facebook.com/share/16jtw3bTRE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://github.com/Yasithb" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yasith-banula-20964a27a" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/yasithbanula?igsh=MXY5Z3hoemsxYmJybw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.blogger.com/profile/06827121662486003187" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition-all duration-300'>
              <i className="fab fa-blogger-b"></i>
            </a>
        </div>
      </div>
      
      <div className="hidden lg:block animate-fade-in relative">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-600 opacity-75 blur-lg animate-pulse-slow"></div>
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-50 animate-spin-slow"></div>
        <div className="relative rounded-full overflow-hidden border-2 border-blue-500 w-[400px] h-[400px]">
          <Image 
            src={assets.user_image2 || assets.profile_img}
            alt="Profile picture"
            width={400}
            height={400} 
            className="object-cover w-full h-full relative z-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-20"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
