import Image from 'next/image';
import { assets } from '@/assets/assets';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Certificates data
const certificatesData = [
  {
    title: "Introduction to HTML",
    issuer: "Sololearn",
    date: "2022",
    image: "/htmlintro.jpg",
    link: "https://www.sololearn.com/certificates/CC-5POWCF9N"
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "2021",
    image: "/webdesign.jpg",
    link: "https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1"
  },
  {
    title: "SQL (Advanced) Certification",
    issuer: "HackerRank",
    date: "2023",
    image: "/sql.jpg",
    link: "https://www.hackerrank.com/certificates/078c1d5b5724"
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2022",
    image: "/python.jpg",
    link: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1"
  },
  {
    title: "Java Programming For Complete Beginners",
    issuer: "Alison",
    date: "2022",
    image: "/java.jpg",
    link: "https://alison.com/user/pdf/1470/1"
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "2022",
    image: "/web.jpg",
    link: "https://www.coursera.org/account/accomplishments/certificate/CWL8WHWD6AVN"
  },
  {
    title: "Agile Project Management",
    issuer: "HP LIFE",
    date: "2022",
    image: "/agile.jpg",
    link: "https://www.life-global.org/certificate/5e7f8578-a684-4965-b9aa-7062a0858e28"
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "2022",
    image: "/seeng.jpg",
    link: "https://www.hackerrank.com/certificates/3304af90dfd3"
  }
];

const Certificates = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div id='certificates' className={`w-full px-[12%] py-24 scroll-mt-20 relative overflow-hidden ${
      isDark ? 'bg-[#121926]' : 'bg-white'
    }`}>
      {/* Background decoration elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      
      {/* Animated particles */}
      <div className="absolute top-10 right-[10%] w-2 h-2 rounded-full bg-green-400/30 animate-float"></div>
      <div className="absolute top-1/4 right-[30%] w-3 h-3 rounded-full bg-green-500/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full bg-green-400/30 animate-float-delay"></div>
      <div className="absolute top-1/2 left-[15%] w-3 h-3 rounded-full bg-green-500/20 animate-float-slow-delay"></div>
      
      <div className="relative">
        <h4 className={`text-center mb-2 text-lg font-ovo animate-slide-up ${
          isDark ? 'text-green-500' : 'text-green-600'
        }`}>
          <span className="relative inline-block">
            Achievements
            <span className={`absolute -bottom-1 left-0 w-full h-px transform scale-x-0 origin-left ${
              isDark ? 'bg-green-500' : 'bg-green-600'
            } animate-expand-line`}></span>
          </span>
        </h4>

        <h2 className={`text-center text-5xl font-bold animate-slide-up relative inline-block w-full ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="relative">
            My Certificates
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 rounded-full ${
              isDark ? 'bg-green-500' : 'bg-green-600'
            } animate-expand`}></span>
          </span>
        </h2>
      </div>

      {/* Certificates grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
        {certificatesData.map((cert, index) => (
          <div 
            key={index}
            className={`group rounded-xl overflow-hidden relative animate-fade-in-up ${
              isDark 
                ? 'bg-gray-800/80 hover:bg-gray-700/90' 
                : 'bg-white hover:bg-gray-50'
            } transition-all duration-500 shadow-lg hover:-translate-y-2 hover:shadow-xl`}
            style={{ animationDelay: `${0.15 * (index + 1)}s` }}
          >
            {/* Certificate image */}
            <div className="h-48 w-full relative overflow-hidden bg-gray-100">
              <Image 
                src={cert.image} 
                alt={cert.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-700 p-2"
              />
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-t from-gray-900/30 to-transparent opacity-0' 
                  : 'bg-gradient-to-t from-gray-800/30 to-transparent opacity-0'
              } group-hover:opacity-60 transition-opacity duration-300`}></div>
              
              <div className={`absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${
                isDark ? 'text-white' : 'text-white'
              } flex items-center justify-between`}>
                <span className="font-medium">{cert.issuer}</span>
                <span className="text-sm">{cert.date}</span>
              </div>
            </div>
            
            {/* Certificate title */}
            <div className="p-5">
              <h3 className={`text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              } group-hover:text-green-500 transition-colors duration-300`}>
                {cert.title}
              </h3>
              
              {/* View certificate button */}
              <a 
                href={cert.link} 
                className={`inline-flex items-center gap-2 mt-2 text-sm font-medium ${
                  isDark 
                    ? 'text-green-500 hover:text-green-400' 
                    : 'text-green-600 hover:text-green-700'
                } transition-colors duration-300`}
              >
                <span>View Certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            {/* Decorative accent */}
            <div className={`absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-700 ${
              isDark ? 'bg-green-500' : 'bg-green-600'
            }`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;