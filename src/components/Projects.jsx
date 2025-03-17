import React, { useState } from 'react';
import FeaturedProjectModal from './FeaturedProjectModal';
import menararTirzaImage from '../assets/images/menaratirza.png';
import metrodataAcademyImage from '../assets/images/metrodata-academy.png';
import siloamImage from '../assets/images/siloam.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const categories = [
    { 
      id: 'web-design', 
      title: 'KOPERASI MENARA TIRZA', 
      count: '01', 
      description: 'Creating engaging digital experiences',
      image: menararTirzaImage,
      type: 'Web Application',
      client: 'Menara Tirza Christian School',
      timeline: 'August 2024 - December 2024',
      overview: 'A comprehensive web platform for managing cooperative operations at Menara Tirza Christian School. The system handles member management, savings and loans tracking, financial reporting, and dividend calculations.',
      challenge: 'The school needed a modern solution to replace their manual cooperative management system. They required a secure platform that could handle multiple user roles, track financial transactions accurately, and generate comprehensive reports.',
      solution: 'Developed a custom web application with role-based access control, real-time transaction tracking, automated interest calculations, and detailed financial reporting capabilities.',
      technologies: ['React.js', 'Node.js', 'Express', 'MySQL', 'Redux', 'Tailwind CSS'],
      features: [
        'Member management and authentication',
        'Savings accounts with multiple types',
        'Loan application and approval workflow',
        'Automated interest calculations',
        'Financial reporting and dashboards',
        'Admin control panel'
      ],
      website: '#'
    },
    { 
      id: 'web-development', 
      title: 'METRODATA ACADEMY', 
      count: '02', 
      description: 'Building functional, dynamic websites',
      image: metrodataAcademyImage,
      type: 'E-Learning Platform',
      client: 'Metrodata Group',
      timeline: 'August 2024 - December 2024',
      overview: 'A comprehensive e-learning platform for Metrodata Academy providing interactive courses, assessment tools, and progress tracking for technical training programs.',
      challenge: 'Metrodata Academy needed a scalable learning platform that could deliver technical training content, handle interactive exercises, provide progress tracking, and integrate with their existing HR systems.',
      solution: 'Created a custom e-learning platform with course management, interactive coding exercises, real-time assessment, and comprehensive analytics for both students and administrators.',
      technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'GraphQL', 'Material UI'],
      features: [
        'Course catalog with filtering and search',
        'Interactive learning modules with embedded exercises',
        'Live coding environment for practical assignments',
        'Progress tracking and certifications',
        'Admin dashboard for content management',
        'Integration with HR systems'
      ],
      website: '#'
    },
    { 
      id: 'siloam', 
      title: 'Siloam International Hospital', 
      count: '03', 
      description: 'Building mobile solutions that turn complex problems into simple interactions',
      image: siloamImage,
      type: 'Healthcare Application',
      client: 'Siloam International Hospital',
      timeline: 'January 2024 - June 2024',
      overview: 'A patient management and appointment booking system for Siloam International Hospital, providing streamlined healthcare services through a user-friendly digital interface.',
      challenge: 'Siloam Hospital needed to modernize their patient management system to reduce wait times, improve appointment scheduling, and provide better access to medical records while ensuring security and compliance with healthcare regulations.',
      solution: 'Developed a comprehensive healthcare application with secure patient portals, efficient appointment scheduling, electronic medical records access, and integration with existing hospital systems.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      features: [
        'Secure patient portal with medical history',
        'Real-time appointment booking and management',
        'Doctor availability calendar',
        'Prescription management',
        'Lab results and medical records access',
        'Push notifications for appointments'
      ],
      website: '#'
    }
  ];
  
  const services = [
    { 
      id: '01', 
      title: 'FRONT-END DEVELOPMENT', 
      description: [
        'Creating responsive web interfaces using React.js, Next.js, HTML5, CSS3.',
        'Building intuitive user interfaces that enhance interaction and user experience.'
      ]
    },
    { 
      id: '02', 
      title: 'UI/UX DESIGN', 
      description: [
        'Designing visual application interfaces using Figma to enhance user experience and workflow efficiency.',
        'Creating wireframes and prototypes that translate business requirements into intuitive interfaces.'
      ]
    },
    { 
      id: '03', 
      title: 'FUNCTIONAL CONSULTING', 
      description: [
        'Conducting comprehensive requirement gathering to define project scope and objectives.',
        'Creating detailed functional specifications and UML diagrams (Use Case, Class, Sequence) to bridge business needs with technical implementation.'
      ]
    }
  ];

  return (
    <section id="work" className="py-20 bg-darkBg border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Featured Work Header */}
        <div className="flex justify-between items-start mb-20">
          <div className="reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease' }}>
            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase">
              FEATURED<br />WORK
            </h2>
          </div>
          <div className="text-right max-w-md reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease', transitionDelay: '0.2s' }}>
            <p className="text-textLight mb-6 text-sm">
              As a front end developer using modern ideas simplicity design and universal visual identification tailored to dedicated and current market.
            </p>
            <a 
            href="#contact" 
            className="inline-flex items-center border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition duration-300 rounded-full button-hover-effect"
            >
              Let's discuss <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        {/* Projects */}
        {categories.map((category, index) => (
          <div key={category.id} className="border-t border-gray-800 reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.7s ease', transitionDelay: `${index * 0.15}s` }}>
            <div className="py-12 grid grid-cols-12 gap-8">
              {/* Left Column: Title */}
              <div className="col-span-5 md:col-span-4">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">
                    {category.title}
                  </h3>
                  <span className="text-textLight">({category.count})</span>
                </div>
                <p className="text-textLight text-sm">
                  {category.description}
                </p>
              </div>
              
              {/* Middle Column: Image */}
              <div className="col-span-5 md:col-span-6">
                <div className="w-full flex justify-center items-center">
                  <img 
                    src={category.image}
                    alt={category.title} 
                    className="w-3/5 h-auto hover-scale"
                  />
                </div>
              </div>
              
              {/* Right Column: View Projects */}
              <div className="col-span-2 flex justify-end items-start">
                <button 
                  onClick={() => openModal(category)} 
                  className="inline-flex items-center text-textLight hover:text-white transition-colors bg-transparent p-0 button-hover-effect"
                >
                  View projects <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Service Expertise Header */}
        <div className="flex justify-between items-start mt-32 mb-16 border-t border-gray-800 pt-16">
          <div className="reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease' }}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
               MY SERVICE<br />EXPERTISE
            </h2>
          </div>
          <div className="text-right max-w-md reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease', transitionDelay: '0.2s' }}>
            <p className="text-textLight mb-6 text-sm">
            As a full-stack developer with a strong foundation in both technical development and functional consulting, I bring comprehensive solutions to every project.            </p>
            <a 
            href="#contact" 
            className="inline-flex items-center border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition duration-300 rounded-full button-hover-effect"
            >
              Let's discuss <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="border-t border-gray-800 pt-4 reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.7s ease', transitionDelay: `${index * 0.15}s` }}>
              <div className="mb-6">
                <span className="text-textLight">({service.id})</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase">
                {service.title}
              </h3>
              {service.description.map((paragraph, idx) => (
                <p key={idx} className="text-textLight mb-3 text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Featured Project Modal */}
      <FeaturedProjectModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Projects;