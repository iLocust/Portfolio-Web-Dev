import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Experience = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const experiences = [
    {
      id: 1,
      title: 'FREELANCE FULL-STACK DEVELOPER',
      company: 'Menara Tirza Christian School',
      period: 'Aug 2024 - Present',
      link: '#',
      fullDescription: 'Led the development of a comprehensive school management system for Menara Tirza Christian School, handling everything from database design to frontend implementation. The system includes student management, attendance tracking, grade reporting, and communication tools.',
      technologies: ['React.js', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'Redux'],
      responsibilities: [
        'Designed and implemented the entire system architecture',
        'Developed user-friendly interfaces for administrators, teachers, and parents',
        'Created a responsive design that works across all devices',
        'Implemented secure authentication and authorization systems',
        'Built reporting tools for academic performance tracking'
      ],
      achievements: 'Delivered a fully functional system that reduced administrative workload by 60%. Implemented features that improved parent-teacher communication and student performance tracking.'
    },
    {
      id: 2,
      title: 'APPLICATION DEVELOPER',
      company: 'Mitra Integrasi Informatika (Metrodata Group)',
      period: 'May 2023 - Present',
      link: '#',
      fullDescription: 'Working as part of the enterprise solutions team at Metrodata Group, developing and maintaining business applications for various clients. Focused on creating scalable and maintainable solutions that meet specific business requirements.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'Oracle Database', 'RESTful APIs', 'Microservices'],
      responsibilities: [
        'Developed and maintained enterprise-level applications',
        'Collaborated with cross-functional teams to deliver integrated solutions',
        'Implemented and optimized database structures',
        'Conducted code reviews and mentored junior developers',
        'Participated in agile development processes'
      ],
      achievements: 'Successfully delivered multiple high-profile client projects on time and within budget. Recognized for implementing innovative solutions that improved application performance and user experience.'
    },
    {
      id: 3,
      title: 'FRONT-END DEVELOPER',
      company: 'Metrodata Academy (Metrodata Group)',
      period: 'August 2024 - December 2024',
      link: '#',
      fullDescription: 'Participated in an intensive development program at Metrodata Academy, focusing on front-end technologies and best practices. Worked on real-world projects while learning advanced techniques in web development.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux', 'Styled Components', 'Jest'],
      responsibilities: [
        'Built responsive and interactive user interfaces',
        'Implemented state management solutions using Redux',
        'Created reusable component libraries',
        'Performed unit and integration testing',
        'Collaborated with designers to ensure pixel-perfect implementations'
      ],
      achievements: 'Created a comprehensive e-learning platform that was adopted as a key training tool within the organization. Received recognition for exceptional UI/UX implementation and attention to detail.'
    },
    {
      id: 4,
      title: 'INTERSHIP FULL-STACK DEVELOPER',
      company: 'Central Bureau of Statistics',
      period: 'August 2021 - December 2021',
      link: '#',
      fullDescription: 'Completed an internship at the Central Bureau of Statistics, working on data visualization and management systems. Contributed to projects that helped streamline data collection and analysis processes.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'Chart.js'],
      responsibilities: [
        'Assisted in developing internal data management tools',
        'Created interactive data visualization dashboards',
        'Implemented database optimizations for large datasets',
        'Built reporting interfaces for statistical analysis',
        'Documented code and processes for knowledge transfer'
      ],
      achievements: 'Developed a key data visualization module that was incorporated into the main statistical reporting system. Received commendation for technical abilities and problem-solving skills.'
    }
  ];
  
  return (
    <section id="experience" className="py-20 bg-darkBg">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
            MY<br />RUNNING PROJECT
          </h2>
          <p className="text-textLight text-sm mb-2 uppercase tracking-widest max-w-xl">
          Delivering modern front-end development with clean, simple designs and consistent visual elements that connect well with today's target market.          </p>
        </div>
        
          {experiences.map((exp) => (
            <div key={exp.id} className="border-t border-gray-800 py-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-textLight mt-1">{exp.company} | {exp.period}</p>
                </div>
                <button 
                  onClick={() => openModal(exp)} 
                  className="text-textLight flex items-center hover:text-white transition-colors bg-transparent p-0"
                >
                  Read More <span className="ml-2">→</span>
                </button>
              </div>
              <p className="text-textLight mt-4">{exp.description}</p>
            </div>
          ))}
        
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Experience;