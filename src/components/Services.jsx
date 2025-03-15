import React, { useEffect, useRef } from 'react';

const Services = () => {
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);
  
  const services = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Crafting responsive and engaging full-stack website designs that captivate audiences and deliver a seamless user experience.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'React & Next.js Development',
      description: 'Transform your online presence with our sleek and modern websites built with React and Next.js for optimal performance.',
      icon: '⚛️'
    },
    {
      id: 3,
      title: 'API Development & Integration',
      description: 'Crafting compelling that interfaces with your data sources, ensuring your online presence effectively connects with users.',
      icon: '🔄'
    },
    {
      id: 4,
      title: 'Database Design & Optimization',
      description: 'Transforming complex data requirements into efficient database designs with precision and innovation using best practices.',
      icon: '🗃️'
    }
  ];
  
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">What I do</h2>
        
        <div className="services-grid fade-in" ref={servicesRef}>
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .services {
          padding: var(--padding-section);
          background-color: var(--light-gray);
        }
        
        .section-title {
          text-align: left;
          margin-bottom: 40px;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .service-card {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        
        .service-card h3 {
          margin-bottom: 15px;
        }
        
        .service-card p {
          color: var(--dark-gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;