import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar:React.FC= () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 pt-2 pb-4 transition-colors duration-500 ${
          scrolled
            ? 'bg-white bg-opacity-95 shadow-md'
            : 'bg-gradient-to-b from-[#A56FFF99] via-[#A56FFF33] to-transparent backdrop-blur-md'
        }`}
        style={{
          
          background: scrolled
            ? '#fff'
            : 'linear-gradient(180deg, rgba(165,111,255,0.6) 0%, rgba(165,111,255,0.2) 60%, rgba(255,255,255,0) 100%)',
        }}
      >
        <img src={logo} alt=""  className='h-[69px] w-[105px]' />
        <ul className="hidden md:flex space-x-8 text-base font-normal text-[#1A1A2E]">
          <li className="group relative transition-transform duration-300 hover:scale-105">
            <Link
              to="/"
              className="text-[#A56FFF] group-hover:text-[#7c3aed] transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
              <span className="block h-0.5 bg-[#A56FFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li className="group relative transition-transform duration-300 hover:scale-105">
            <Link
              to="/services"
              className="hover:text-[#1A1A2E] transition-colors duration-300 group-hover:text-[#7c3aed]"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Services
              <span className="block h-0.5 bg-[#A56FFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li className="group relative transition-transform duration-300 hover:scale-105">
            {location.pathname === '/' ? (
              <button
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-[#1A1A2E] transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer group-hover:text-[#7c3aed]"
                style={{ background: 'none', border: 'none', padding: 0, font: 'inherit' }}
              >
                About
                <span className="block h-0.5 bg-[#A56FFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ) : null}
          </li>
          <li className="group relative transition-transform duration-300 hover:scale-105">
            {location.pathname === '/' && (
              <button
                onClick={() => {
                  const footer = document.getElementById('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hover:text-[#1A1A2E] transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer group-hover:text-[#7c3aed]"
                style={{ background: 'none', border: 'none', padding: 0, font: 'inherit' }}
              >
                Contact
                <span className="block h-0.5 bg-[#A56FFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            )}
          </li>
        </ul>
        <button
          className="hidden md:block bg-[#A56FFF] text-white text-base font-normal rounded-full px-8 py-3 hover:bg-[#8a4de6] transition-colors duration-300"
          type="button"
          onClick={() => {
            window.location.href = 'tel:+1234567890';
          }}
        >
          Call Now
        </button>
      </main>
    </>
  )
}

export default Navbar