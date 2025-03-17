import React from 'react';

const FeaturedProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Only close if the backdrop was clicked, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4" 
      onClick={handleBackdropClick}
    >
      <div className="bg-darkBg border border-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with large image */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-primaryDark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 md:p-8">
          {/* Project Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-gray-800 pb-8">
            <div>
              <h3 className="text-sm uppercase text-textLight mb-2">PROJECT TYPE</h3>
              <p className="text-white text-lg">{project.type || "Web Application"}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-textLight mb-2">CLIENT</h3>
              <p className="text-white text-lg">{project.client || project.title}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-textLight mb-2">TIMELINE</h3>
              <p className="text-white text-lg">{project.timeline || "2024"}</p>
            </div>
          </div>
          
          {/* Project Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="md:col-span-8">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase">
                PROJECT OVERVIEW
              </h3>
              <p className="text-textLight mb-6">
                {project.overview || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel justo mauris. Fusce sit amet imperdiet risus, eget feugiat metus. Curabitur hendrerit mauris ut neque placerat, non fermentum nulla finibus. Praesent lobortis facilisis metus, ut rhoncus turpis euismod vel."}
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-4 uppercase mt-8">
                THE CHALLENGE
              </h3>
              <p className="text-textLight mb-6">
                {project.challenge || "Nam sed blandit magna. Vestibulum quis tincidunt sapien, vitae tincidunt risus. Nullam sollicitudin risus id augue mattis, ut porttitor eros tempus. Cras lacinia enim vitae libero tempus, non porttitor diam ultricies. Nulla facilisi. Integer eget mi a metus commodo efficitur id vel sapien."}
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-4 uppercase mt-8">
                THE SOLUTION
              </h3>
              <p className="text-textLight mb-6">
                {project.solution || "Maecenas iaculis nisl ut nibh facilisis, a viverra ipsum eleifend. Morbi elementum ante in metus aliquam, id commodo sapien vulputate. Aliquam erat volutpat. Fusce facilisis lorem ut massa finibus, ut condimentum odio hendrerit. Nunc a eros vulputate, interdum erat quis, sollicitudin risus."}
              </p>
            </div>
            
            {/* Right Column */}
            <div className="md:col-span-4">
              <div className="bg-surface p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4 uppercase">
                  TECHNOLOGIES
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {(project.technologies || ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"]).map((tech, index) => (
                    <li key={index} className="bg-darkBg border border-gray-800 px-3 py-1 text-sm text-textLight">
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-bold text-white mb-4 mt-8 uppercase">
                  KEY FEATURES
                </h3>
                <ul className="space-y-2">
                  {(project.features || [
                    "User authentication & authorization",
                    "Real-time data updates",
                    "Advanced search functionality",
                    "Interactive dashboard",
                    "File upload and management"
                  ]).map((feature, index) => (
                    <li key={index} className="text-textLight flex items-start">
                      <span className="text-white mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {project.website && (
                  <div className="mt-8">
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition duration-300"
                    >
                      Visit Website <span className="ml-2">→</span>
                    </a>
                  </div>
                )}
              </div>
              
              {/* Additional image placeholder */}
              <div className="mt-6 bg-darkBg border border-gray-800 h-48 flex items-center justify-center">
                <p className="text-textLight">Additional Image Placeholder</p>
              </div>
            </div>
          </div>
          
          {/* Gallery Section */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <h3 className="text-2xl font-bold text-white mb-6 uppercase">
              PROJECT GALLERY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-darkBg border border-gray-800 h-48 flex items-center justify-center">
                  <p className="text-textLight">Gallery Image {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectModal;