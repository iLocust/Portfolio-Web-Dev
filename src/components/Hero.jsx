import React from 'react';
import profileImage from '../assets/images/dim-1.png';
import { motion } from 'framer-motion';
import { FloatingPaths } from './ui/background-paths';

const Hero = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-darkBg flex items-center pt-20 md:pt-0 pb-12 md:pb-0 overflow-hidden"
    >
      {/* Background Paths */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        {/* Gradient fade-out at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-darkBg via-darkBg/80 to-transparent z-10"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-textLight text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-widest"
            >
              (HELLO, WORLD)
            </motion.p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 uppercase leading-none">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block"
              >
                FRONT 
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="italic font-normal inline-block"
              >
                end
              </motion.span>
              <br className="hidden xs:block" />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block"
              >
                DEVELOPER
              </motion.span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-12 mb-6 sm:mb-8 border-t border-gray-800 pt-4 sm:pt-6"
            >
              <p className="text-textLight text-sm sm:text-base px-4 md:px-0">
                React.js Front-End Developer | Combining Technical Development with UI/UX Design & Functional Consulting
              </p>
            </motion.div>
            
            <motion.a 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              href="#contact" 
              className="inline-flex items-center border border-white text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition duration-300 rounded-full"
            >
              Let's discuss <span className="ml-2">→</span>
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="w-3/4 sm:w-2/3 md:w-8/12 lg:w-7/12 border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={profileImage} 
                alt="Dimas Alexandra Noya" 
                className="w-full h-auto filter hover:grayscale-0 transition-all duration-500"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;