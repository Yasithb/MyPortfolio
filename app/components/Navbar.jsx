import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  const sideMenuRef = useRef();
  const overlayRef = useRef();

  const openMenu = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
    if (overlayRef.current) {
      overlayRef.current.style.display = 'block';
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.opacity = '1';
        }
      }, 10);
    }
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(100%)';
    }
    if (overlayRef.current) {
      overlayRef.current.style.opacity = '0';
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.display = 'none';
        }
      }, 500);
    }
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        closeMenu();
      }
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          sideMenuRef.current && 
          !sideMenuRef.current.contains(event.target) &&
          !event.target.closest('[aria-label="Open navigation menu"]')) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {!isDark && (
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] hidden sm:block'>
          <Image src={assets.header_bg_color} alt='' className='w-full' />
        </div>
      )}
      
      <nav
        className={`w-full fixed top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 animate-fade-in ${
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
            className='w-20 sm:w-24 lg:w-28 cursor-pointer transition-transform hover:scale-105 duration-300 relative' 
          />
        </a>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-6 py-3 animate-slide-left">
          <li className="relative group">
            <a href="#top" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#about" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              About me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#education" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#experience" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#skills" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#certificates" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#work" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              My work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a href="#contact" className="text-sm xl:text-base transition-colors duration-300 group-hover:text-blue-500">
              Contact me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
        <div className='flex items-center gap-2 sm:gap-3 lg:gap-4 animate-slide-left relative z-50'>

          <button 
            onClick={toggleTheme}
            className="relative overflow-hidden group p-2 z-50"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{ pointerEvents: 'auto' }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <div className="transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
              <Image 
                src={isDark ? assets.sun_icon : assets.moon_icon} 
                alt={isDark ? 'Light mode' : 'Dark mode'} 
                className='w-5 sm:w-6' 
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </button>

          <a
            href="#contact"
            className={`hidden xl:inline-flex items-center justify-center gap-3 px-8 xl:px-10 py-2.5 z-50
            rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
            ${isDark 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
            } group text-sm xl:text-base`}
            style={{ pointerEvents: 'auto' }}
          >
            <span className="relative font-medium">Contact</span> 
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1 w-4 h-4 xl:w-5 xl:h-5"
              style={{ pointerEvents: 'none' }}
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button 
            className='lg:hidden relative overflow-hidden group p-3 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center' 
            onClick={openMenu}
            style={{ pointerEvents: 'auto' }}
            type="button"
            aria-label="Open navigation menu"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Image 
              src={isDark ? assets.menu_white : assets.menu_black} 
              alt='Menu' 
              className='w-5 sm:w-6 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300' 
              style={{ pointerEvents: 'none' }}
            />
          </button>
        </div>

        {/*---------Mobile Menu Overlay----------*/}
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden opacity-0 transition-opacity duration-500 pointer-events-auto"
          style={{ display: 'none' }}
          onClick={closeMenu}
        ></div>

        {/*---------Mobile Menu----------*/}
        <ul
          ref={sideMenuRef}
          className={`flex lg:hidden flex-col gap-4 sm:gap-6 py-16 sm:py-20 px-6 sm:px-8 fixed right-0 top-0 bottom-0 w-full max-w-xs sm:max-w-sm z-50 h-screen transform translate-x-full transition-transform duration-500 ease-in-out pointer-events-auto ${
            isDark 
              ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-xl shadow-blue-900/20' 
              : 'bg-gradient-to-b from-white to-blue-50 shadow-xl shadow-blue-300/20'
          }`}
        >
          <div className='absolute right-4 sm:right-6 top-4 sm:top-6 group p-2' onClick={closeMenu}>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Image 
              src={isDark ? assets.close_white : assets.close_black} 
              alt='' 
              className='w-4 sm:w-5 cursor-pointer group-hover:scale-110 group-hover:rotate-90 transition-all duration-300' 
            />
          </div>

          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#top" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#about" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              About me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#education" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#experience" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#skills" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#certificates" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#work" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              My work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative overflow-hidden">
            <a onClick={closeMenu} href="#contact" className="block w-full py-3 px-4 hover:text-blue-500 transition-colors duration-300 relative group text-sm sm:text-base">
              Contact me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700/30">
            <a
              href="#contact"
              onClick={closeMenu}
              className={`group inline-flex items-center justify-center gap-3 px-6 py-2.5 w-full
              rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl
              ${isDark 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
              } text-sm sm:text-base`}
            >
              <span className="relative font-medium">Contact Me</span> 
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1 w-4 h-4 sm:w-5 sm:h-5"
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