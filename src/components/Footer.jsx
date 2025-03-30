import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-darkBg text-white border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="py-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 uppercase">
            Alexandra<span>.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 uppercase">
                LET'S TALK
              </h3>
              <p className="text-textLight max-w-md mb-8">
                If you need assistance with your project or have an opportunity to collaborate, feel free to reach out to me, and let's discuss how I can help.
              </p>
              
          
              
              <div className="mt-12">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="mailto:dimasalexandra12@gmail.com" 
                    className="inline-flex items-center group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="group-hover:text-white transition-colors text-textLight">dimasalexandra12@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+6281356464187" 
                    className="inline-flex items-center group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="group-hover:text-white transition-colors text-textLight">+62-813-5646-4187</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/dimasalexandra" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-black transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span className="group-hover:text-white transition-colors text-textLight">linkedin.com/in/dimasalexandra</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
               
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-4 uppercase">Education</h4>
                <p className="text-white font-medium">State University of Surabaya</p>
                <p className="text-textLight mb-4">Bachelor's Degree in Computer Science (2018-2022)</p>
                
                <h4 className="text-white font-medium mb-4 uppercase mt-8">Certifications</h4>
                <ul className="space-y-2">
                  <li><span className="text-textLight">Java Developer Bootcamp</span></li>
                  <li><span className="text-textLight">Laravel Web Development</span></li>
                  <li><span className="text-textLight">React Javascript Front End</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-6 sm:py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
        <p className="text-textLight text-sm text-center md:text-left">
        &copy; {currentYear} Dimas Alexandra Noya. All rights reserved.
        </p>
        </div>
        
        <div className="flex space-x-6">
            <a href="https://github.com/iLocust" target="_blank" rel="noreferrer" className="text-textLight hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/dimasalexandra/" target="_blank" rel="noreferrer" className="text-textLight hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;