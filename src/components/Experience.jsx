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
      fullDescription: 'Developed a web-based application for Menara Tirza Christian School cooperative store, designed for use on tablet devices. Built with React.js and utilizing IndexedDB for local data storage, the application provides offline functionality for seamless operation.',
      technologies: ['React.js', 'IndexedDB', 'Tailwind CSS', 'Barcode Scanner API', 'Print API', 'Recharts'],
      responsibilities: [
        'Designed and developed the complete cooperative store application system',
        'Implemented financial dashboards with data visualization',
        'Built product catalog system with barcode scanner integration',
        'Developed sales system with receipt printing capability',
        'Created cash management and financial reporting systems',
        'Optimized application performance for tablet devices'
      ],
      achievements: 'Successfully automated the school cooperative store processes that were previously manual, saving over 50% in operational time and improving record-keeping accuracy. The application functions offline, eliminating dependence on internet connectivity.'
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
      fullDescription: 'Participated in the development of a comprehensive e-learning platform for Metrodata Academy. The platform enables users to make payments with discount codes, view course schedules, and access syllabus pages in a structured and intuitive manner.',
      technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Stripe API', 'Material UI'],
      responsibilities: [
        'Developed responsive and interactive user interfaces',
        'Implemented payment system with discount code functionality',
        'Created interactive course calendar and scheduling features',
        'Built structured syllabus navigation for improved content access',
        'Ensured cross-device compatibility and responsive design',
        'Collaborated with backend team for seamless API integration'
      ],
      achievements: 'Delivered a user-friendly e-learning platform that significantly improved the learning experience. The payment system with discount functionality increased course enrollments by 30%, while the structured syllabus navigation reduced support requests by 45%.'
    },
    {
      id: 3,
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
        <div className="mb-12 sm:mb-16 reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">
            MY<br />RUNNING PROJECT
          </h2>
          <p className="text-textLight text-sm mb-2 uppercase tracking-widest max-w-xl">
          Delivering modern front-end development with clean, simple designs and consistent visual elements that connect well with today's target market.          </p>
        </div>
        
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="border-t border-gray-800 py-6 reveal-element opacity-0 translate-y-4" 
              style={{ transition: 'all 0.6s ease', transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-textLight mt-1">{exp.company} | {exp.period}</p>
                </div>
                <button 
                  onClick={() => openModal(exp)} 
                  className="text-textLight flex items-center hover:text-white transition-colors bg-transparent p-0 button-hover-effect self-start sm:self-center"
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