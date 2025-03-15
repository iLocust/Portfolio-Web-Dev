import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-darkBg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-white"
          >
            Alexandra<span>.</span>
          </a>
        </div>
        
        <nav className={`fixed md:static top-0 ${mobileMenuOpen ? 'right-0' : '-right-full'} md:right-0 h-screen md:h-auto w-3/4 md:w-auto bg-darkBg md:bg-transparent transition-all duration-300 md:transition-none z-50 md:z-auto p-8 md:p-0 shadow-2xl md:shadow-none`}>
          <button 
            className="absolute top-4 right-4 md:hidden text-2xl text-white" 
            onClick={toggleMobileMenu}
          >
            ✕
          </button>
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 mt-12 md:mt-0">
            <li>
              <a 
                href="#work" 
                className="text-white font-medium hover:text-gray-300 transition"
              >
                Work
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-white font-medium hover:text-gray-300 transition"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-white font-medium hover:text-gray-300 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <button 
          className="flex flex-col space-y-1.5 md:hidden z-50"
          onClick={toggleMobileMenu}
        >
          <span className="block w-6 h-0.5 bg-white transition-all"></span>
          <span className="block w-6 h-0.5 bg-white transition-all"></span>
          <span className="block w-6 h-0.5 bg-white transition-all"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;