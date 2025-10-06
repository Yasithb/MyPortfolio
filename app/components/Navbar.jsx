import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {!isDark && (
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
          <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
      )}
      
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 animate-fade-in ${
          isScroll 
            ? isDark 
              ? 'bg-gray-900/90 backdrop-blur-lg shadow-lg shadow-blue-900/10' 
              : 'bg-white/90 backdrop-blur-lg shadow-lg shadow-blue-300/20' 
            : isDark ? 'bg-transparent' : ''
        } transition-all duration-500`}
      >
        <a href="#top" className="animate-slide-right relative group">
          <span className="absolute -inset-2 bg-gradient-to-r from-blue-600/0 via-blue-500/10 to-blue-600/0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <Image 
            src={isDark ? assets.logo_dark : assets.logo} 
            alt='' 
            className='w-28 cursor-pointer mr-14 transition-transform hover:scale-105 duration-300 relative' 
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 py-3 animate-slide-left">
          <li className="relative group">
            <a href="#top" className="transition-colors duration-300 group-hover:text-blue-500">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#about" className="transition-colors duration-300 group-hover:text-blue-500">
              About me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#education" className="transition-colors duration-300 group-hover:text-blue-500">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#experience" className="transition-colors duration-300 group-hover:text-blue-500">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#skills" className="transition-colors duration-300 group-hover:text-blue-500">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#certificates" className="transition-colors duration-300 group-hover:text-blue-500">
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#work" className="transition-colors duration-300 group-hover:text-blue-500">
              My work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#contact" className="transition-colors duration-300 group-hover:text-blue-500">
              Contact me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
        <div className='flex items-center gap-4 animate-slide-left'>

          <button 
            onClick={toggleTheme}
            className="relative overflow-hidden group p-2"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <div className="transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
              <Image 
                src={isDark ? assets.sun_icon : assets.moon_icon} 
                alt={isDark ? 'Light mode' : 'Dark mode'} 
                className='w-6' 
              />
            </div>
          </button>

          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center justify-center gap-3 px-10 py-2.5 
            rounded-full ml-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
            ${isDark 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
            } group`}
          >
            <span className="relative font-medium">Contact</span> 
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

          <button 
            className='block md:hidden ml-3 relative overflow-hidden group p-2' 
            onClick={openMenu}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Image 
              src={isDark ? assets.menu_white : assets.menu_black} 
              alt='' 
              className='w-6 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300' 
            />
          </button>
        </div>

        {/*---------Mobile Menu----------*/}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-6 py-24 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${
            isDark 
              ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl shadow-blue-900/20' 
              : 'bg-gradient-to-b from-white to-blue-50 shadow-xl shadow-blue-300/20'
          }`}
        >
          <div className='absolute right-6 top-6 group p-2' onClick={closeMenu}>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Image 
              src={isDark ? assets.close_white : assets.close_black} 
              alt='' 
              className='w-5 cursor-pointer group-hover:scale-110 group-hover:rotate-90 transition-all duration-300' 
            />
          </div>

          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#top" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#about" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              About me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#education" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#experience" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#skills" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#certificates" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#work" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              My work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#contact" className="block w-full py-2 px-4 hover:text-blue-500 transition-colors duration-300 relative group">
              Contact me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          
          <div className="mt-6 pt-6 border-t border-gray-700/30">
            <a
              href="#contact"
              className={`group inline-flex items-center justify-center gap-3 px-6 py-2.5 
              rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
              ${isDark 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              <span className="relative font-medium">Contact Me</span> 
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
        </ul>
      </nav>
    </>
  );
};

export default Navbar;