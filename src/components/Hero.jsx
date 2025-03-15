import React from 'react';
import profileImage from '../assets/images/dim-1.png';

const Hero = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-darkBg flex items-center"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <p className="text-textLight text-sm mb-4 uppercase tracking-widest">
              (HELLO, WORLD)
            </p>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 uppercase leading-none">
              FRONT <span className="italic font-normal">end</span><br />
              DEVELOPER
            </h1>
            
            <div className="mt-12 mb-8 border-t border-gray-800 pt-6">
              <p className="text-textLight">
              React.js Front-End Developer | Combining Technical Development with UI/UX Design & Solution Architecture              </p>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition duration-300"
            >
              Let's discuss <span className="ml-2">→</span>
            </a>
          </div>
          
          <div className="md:w-1/2 flex justify-end">
  <div className="w-10/12 md:w-8/12 lg:w-7/12 border border-gray-800">
    <img 
      src={profileImage} 
      alt="Dimas Alexandra Noya" 
      className="w-full h-auto"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;