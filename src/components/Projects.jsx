import React from 'react';
import menararTirzaImage from '../assets/images/menaratirza.png';
import metrodataAcademyImage from '../assets/images/metrodata-academy.png';

const Projects = () => {
  const categories = [
    { 
      id: 'web-design', 
      title: 'WEB DESIGN', 
      count: '01', 
      description: 'Creating engaging digital experiences',
      image: menararTirzaImage
    },
    { 
      id: 'web-development', 
      title: 'WEB DEVELOPMENT', 
      count: '02', 
      description: 'Building functional, dynamic websites',
      image: metrodataAcademyImage
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
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase">
              FEATURED<br />WORK
            </h2>
          </div>
          <div className="text-right max-w-md">
            <p className="text-textLight mb-6 text-sm">
              As a front end developer using modern ideas simplicity design and universal visual identification tailored to dedicated and current market.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition duration-300 rounded-full"
            >
              Let's discuss <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        {/* Projects */}
        {categories.map((category, index) => (
          <div key={category.id} className="border-t border-gray-800 pb-16">
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
                    className="w-4/5 h-auto"
                  />
                </div>
              </div>
              
              {/* Right Column: View Projects */}
              <div className="col-span-2 flex justify-end items-start">
                <a 
                  href={`#${category.id}`} 
                  className="inline-flex items-center text-textLight hover:text-white transition-colors"
                >
                  View projects <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
        
        {/* Service Expertise Header */}
        <div className="flex justify-between items-start mt-32 mb-16 border-t border-gray-800 pt-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
               MY SERVICE<br />EXPERTISE
            </h2>
          </div>
          <div className="text-right max-w-md">
            <p className="text-textLight mb-6 text-sm">
            As a full-stack developer with a strong foundation in both technical development and functional consulting, I bring comprehensive solutions to every project.            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center border border-white text-white px-6 py-3 hover:bg-white hover:text-black transition duration-300 rounded-full"
            >
              Let's discuss <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="border-t border-gray-800 pt-4">
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
    </section>
  );
};

export default Projects;