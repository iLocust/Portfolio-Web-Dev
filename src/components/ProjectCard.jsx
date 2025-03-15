import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="group bg-surface border border-gray-800 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover grayscale transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl mb-3 text-white uppercase">
          {project.title}
        </h3>
        
        <p className="text-textLight mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="border border-gray-700 text-textLight px-3 py-1 text-xs uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;