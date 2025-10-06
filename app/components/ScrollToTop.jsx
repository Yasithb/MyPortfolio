'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
      }`}
    >
      <button
        onClick={scrollToTop}
        className={`group relative p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-xl ${
          isDark
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/25 hover:shadow-blue-500/40'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-blue-500/25 hover:shadow-blue-500/40'
        }`}
        aria-label="Scroll to top"
      >
        {/* Animated background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-md"></div>
        
        {/* Button content */}
        <div className="relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="transition-transform duration-300 group-hover:-translate-y-1"
          >
            <path
              d="M18 15L12 9L6 15"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      </button>
    </div>
  )
}

export default ScrollToTop