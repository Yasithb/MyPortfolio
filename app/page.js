'use client'
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} min-h-screen`}>
      <Navbar/>
      <Header/>
      <About/>
      <Education/>
      <Experience/>
      <Skills/>
      <Certificates/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}
