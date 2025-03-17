import React from 'react';
import profileImage from '../assets/images/dim-1.png';

const Hero = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-darkBg flex items-center pt-20 md:pt-0 pb-12 md:pb-0"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <p className="text-textLight text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-widest">
              (HELLO, WORLD)
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 uppercase leading-none">
              FRONT <span className="italic font-normal">end</span><br className="hidden xs:block" />
              DEVELOPER
            </h1>
            
            <div className="mt-8 sm:mt-12 mb-6 sm:mb-8 border-t border-gray-800 pt-4 sm:pt-6">
              <p className="text-textLight text-sm sm:text-base px-4 md:px-0">
                React.js Front-End Developer | Combining Technical Development with UI/UX Design & Solution Architecture
              </p>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center border border-white text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition duration-300 rounded-full"
            >
              Let's discuss <span className="ml-2">→</span>
            </a>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-3/4 sm:w-2/3 md:w-8/12 lg:w-7/12 border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={profileImage} 
                alt="Dimas Alexandra Noya" 
                className="w-full h-auto filter hover:grayscale-0 transition-all duration-500"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;