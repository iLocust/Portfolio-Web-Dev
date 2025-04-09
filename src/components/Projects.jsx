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
      timeline: 'August 2024 - Present',
      overview: 'A web-based application used on tablet devices for Menara Tirza Christian School cooperative store. The application efficiently manages finances, inventory, and product sales, providing real-time insights into business operations.',
      challenge: 'The school needed to automate their previously manual cooperative store processes. They required a solution that could run on tablet devices and operate with or without internet connectivity, while managing sales, inventory, and financial reporting in an integrated manner.',
      solution: 'Developed a web application with React.js using IndexedDB as local storage, enabling offline functionality. The application features barcode scanning capabilities, receipt printing, and a comprehensive financial dashboard for complete operational visibility.',
      technologies: ['React.js', 'IndexedDB', 'Tailwind CSS', 'Barcode Scanner API', 'Print API', 'Recharts'],
      features: [
        'Financial dashboard for cash flow overview',
        'Product catalog and inventory management',
        'Sales system with barcode scanning support',
        'Transaction receipt printing',
        'Cooperative store cash management for expense and income tracking',
        'Daily and monthly sales reporting'
      ],
      website: 'https://koperasi-menara-tirza.pages.dev/'
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
      overview: 'A comprehensive e-learning platform for Metrodata Academy providing interactive courses, user-friendly payment systems, and structured learning paths. The platform enhances the learning experience with intuitive navigation and content organization.',
      challenge: 'Metrodata Academy required a scalable e-learning platform that could deliver technical training content while providing flexible payment options, clear course scheduling, and easily accessible syllabus materials. The solution needed to integrate with existing administrative systems.',
      solution: 'Created a robust e-learning platform featuring secure payment processing with discount code support, interactive course calendars, and structured syllabus navigation. The platform offers a seamless user experience while maintaining administrative control.',
      technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Stripe API', 'Material UI'],
      features: [
        'Secure payment processing with discount code support',
        'Interactive course calendar and scheduling',
        'Structured syllabus navigation system',
        'User progress tracking and certifications',
        'Responsive design for all device types',
        'Integration with administrative backend systems'
      ],
      website: 'https://metrodataacademy.id/'
    },
    { 
      id: 'siloam', 
      title: 'Siloam International Hospital', 
      count: '03', 
      description: 'Building enterprise solutions that streamline complex operations',
      image: siloamImage,
      type: 'Supply Chain Management System',
      client: 'Siloam International Hospital',
      timeline: 'December 2024 - Present',
      overview: 'A comprehensive supply chain management application for Siloam International Hospital that integrates with Microsoft Dynamics 365 Finance and Operations. The system manages the entire supply lifecycle from vendor delivery to patient consumption, with real-time inventory tracking across all locations.',
      challenge: 'Siloam Hospital needed to modernize their supply chain operations with an integrated solution that could connect vendor portals, manage inventory across multiple locations, streamline consumption recording, and automate stock verification while maintaining regulatory compliance.',
      solution: 'Developed a supply chain management application using Microsoft PowerApps that integrates seamlessly with D365FO. The system includes vendor portal integration, location-specific inventory management, user role authorization, patient consumption tracking, and automated stock verification.',
      technologies: ['Microsoft PowerApps', 'Dynamics 365 Finance & Operations', 'Power Automate', 'SharePoint', 'Azure Active Directory', 'SQL Server'],
      features: [
        'Vendor portal integration for incoming goods tracking',
        'Multi-location inventory management system',
        'Comprehensive user and role-based access control',
        'Patient medication consumption tracking',
        'Automated warehouse stock verification',
        'Real-time inventory reporting and analytics'
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
    <section id="work" className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Featured Projects Header */}
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-16">
          <div className="reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease' }}>
            <h2 className="pb-10 text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <div className="reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease', transitionDelay: '0.2s' }}>
            <a href="/projects" className="text-lg text-white hover:underline">
              View All Projects
            </a>
          </div>
        </div>
        
        {/* Projects */}
        <div className="space-y-32">
          {categories.map((category, index) => (
            <div key={category.id} className="group reveal-element opacity-0 translate-y-4" 
                 style={{ transition: 'all 0.7s ease', transitionDelay: `${index * 0.15}s` }}>
              <div className="py-8 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <span className="text-[180px] font-bold text-gray-700/40 absolute -top-44 -left-4 -z-10">
                    {category.count.padStart(2, "0")}
                  </span>
                  <h3 className="text-4xl sm:text-5xl font-medium mb-6 text-white relative z-10">
                    {category.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-xl">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {category.technologies && category.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div>
                    <button 
                      onClick={() => openModal(category)}
                      className="inline-block border-[3px] border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      View Project <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="aspect-video overflow-hidden transition-transform group-hover:scale-105 duration-700">
                    <img 
                      src={category.image}
                      alt={category.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Service Expertise Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-0 mt-20 sm:mt-32 mb-12 sm:mb-16 border-t border-gray-800 pt-12 sm:pt-16">
          <div className="reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">
               MY SERVICE<br />EXPERTISE
            </h2>
          </div>
          <div className="text-left sm:text-right max-w-md reveal-element opacity-0 translate-y-4" style={{ transition: 'all 0.8s ease', transitionDelay: '0.2s' }}>
            <p className="text-textLight mb-6 text-sm">
            As a full-stack developer with a strong foundation in both technical development and functional consulting, I bring comprehensive solutions to every project.            </p>
            <a 
            href="#contact" 
            className="inline-flex items-center border border-white text-white px-5 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition duration-300 rounded-full button-hover-effect"
            >
              Let's discuss <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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