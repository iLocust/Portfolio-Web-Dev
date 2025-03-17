import React, { useEffect, useRef } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
      
      // Animation for modal entrance
      const modalElement = modalRef.current;
      setTimeout(() => {
        if (modalElement) {
          modalElement.style.opacity = '1';
          modalElement.style.transform = 'translateY(0)';
        }
      }, 10);
    }
    
    // Cleanup when modal closes
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    // Only close if the backdrop was clicked, not the modal content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  
  const handleClose = () => {
    // Animate modal exit
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.style.opacity = '0';
      modalElement.style.transform = 'translateY(20px)';
      
      // Delay actual closing to allow animation to complete
      setTimeout(() => {
        onClose();
      }, 300);
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4 modal-backdrop" 
      onClick={handleBackdropClick}
      style={{
        transition: 'background-opacity 0.3s ease',
      }}
    >
      <div 
        ref={modalRef} 
        className="bg-surface w-full max-w-3xl max-h-[90vh] overflow-y-auto modal-content"
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <div className="p-6 md:p-8 modal-stagger">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
              {project.title}
            </h2>
            <button 
              onClick={handleClose}
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
          <div className="bg-darkBg border border-gray-800 h-64 mb-6 flex items-center justify-center img-zoom-container overflow-hidden">
            <div className="text-textLight img-zoom" style={{ transition: 'transform 0.5s ease' }}>Project Image Placeholder</div>
          </div>
          
          {/* Description */}
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-bold text-white mb-4 uppercase split-hover-text">
              PROJECT OVERVIEW
            </h3>
            <p className="text-textLight mb-4">
              {project.fullDescription || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            </p>
            
            {/* Technologies Used */}
            <h3 className="text-xl font-bold text-white mb-4 mt-6 uppercase split-hover-text">
              TECHNOLOGIES USED
            </h3>
            <ul className="text-textLight mb-4 list-disc pl-5">
              {(project.technologies || ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"]).map((tech, index) => (
                <li key={index} className="mb-1 hover-underline" style={{ transition: 'transform 0.3s ease', display: 'inline-block' }}>{tech}</li>
              ))}
            </ul>
            
            {/* Key Responsibilities */}
            <h3 className="text-xl font-bold text-white mb-4 mt-6 uppercase split-hover-text">
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
                <li key={index} className="mb-1 hover-underline" style={{ transition: 'transform 0.3s ease', display: 'inline-block' }}>{resp}</li>
              ))}
            </ul>
            
            {/* Achievements */}
            <h3 className="text-xl font-bold text-white mb-4 mt-6 uppercase split-hover-text">
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