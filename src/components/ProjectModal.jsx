import React from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Only close if the backdrop was clicked, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4" 
      onClick={handleBackdropClick}
    >
      <div className="bg-surface w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
              {project.title}
            </h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-primaryDark transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Company & Period */}
          <p className="text-textLight text-sm mb-6">
            {project.company} | {project.period}
          </p>
          
          {/* Image Placeholder */}
          <div className="bg-darkBg border border-gray-800 h-64 mb-6 flex items-center justify-center">
            <p className="text-textLight">Project Image Placeholder</p>
          </div>
          
          {/* Description */}
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-bold text-white mb-4 uppercase">
              PROJECT OVERVIEW
            </h3>
            <p className="text-textLight mb-4">
              {project.fullDescription || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </p>
            
            {/* Technologies Used */}
            <h3 className="text-xl font-bold text-white mb-4 mt-6 uppercase">
              TECHNOLOGIES USED
            </h3>
            <ul className="text-textLight mb-4 list-disc pl-5">
              {(project.technologies || ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"]).map((tech, index) => (
                <li key={index} className="mb-1">{tech}</li>
              ))}
            </ul>
            
            {/* Key Responsibilities */}
            <h3 className="text-xl font-bold text-white mb-4 mt-6 uppercase">
              KEY RESPONSIBILITIES
            </h3>
            <ul className="text-textLight mb-4 list-disc pl-5">
              {(project.responsibilities || [
                "Designed and implemented responsive UI components",
                "Developed RESTful API endpoints for data handling",
                "Integrated third-party services and APIs",
                "Conducted code reviews and implemented best practices",
                "Collaborated with design team to ensure pixel-perfect implementation"
              ]).map((resp, index) => (
                <li key={index} className="mb-1">{resp}</li>
              ))}
            </ul>
            
            {/* Achievements */}
            <h3 className="text-xl font-bold text-white mb-4 mt-6 uppercase">
              ACHIEVEMENTS
            </h3>
            <p className="text-textLight mb-4">
              {project.achievements || "Successfully delivered the project ahead of schedule with all requirements met. Implemented optimizations that improved page load speed by 40%. Received positive feedback from stakeholders and end-users."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;