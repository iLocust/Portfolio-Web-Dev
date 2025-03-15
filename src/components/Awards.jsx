import React, { useEffect, useRef } from 'react';

const Awards = () => {
  const awardsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (awardsRef.current) {
      observer.observe(awardsRef.current);
    }
    
    return () => {
      if (awardsRef.current) {
        observer.unobserve(awardsRef.current);
      }
    };
  }, []);
  
  const certifications = [
    {
      id: 1,
      title: 'Java Developer Bootcamp',
      organization: 'Metrodata Academy',
      date: 'May 2023',
      icon: 'W'
    },
    {
      id: 2,
      title: 'Laravel Web Development',
      organization: 'Sanbercode',
      date: 'Feb 2023',
      icon: 'W'
    },
    {
      id: 3,
      title: 'React Javascript Front End',
      organization: 'Sanbercode',
      date: 'March 2023',
      icon: 'W'
    },
    {
      id: 4,
      title: 'Intro to Front-end Development',
      organization: 'Digital Talent Scholarship',
      date: 'March 2023',
      icon: 'W'
    }
  ];
  
  return (
    <section className="awards" id="awards">
      <div className="container">
        <h2 className="section-title">Awards & Recognition</h2>
        
        <div className="awards-grid fade-in" ref={awardsRef}>
          {certifications.map(cert => (
            <div className="award-item" key={cert.id}>
              <div className="award-icon">{cert.icon}</div>
              
              <div className="award-content">
                <h3>{cert.title}</h3>
                <p className="award-org">{cert.organization}</p>
              </div>
              
              <div className="award-date">
                {cert.date}
                <span className="arrow-icon">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .awards {
          padding: var(--padding-section);
        }
        
        .section-title {
          text-align: left;
          margin-bottom: 40px;
        }
        
        .awards-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .award-item {
          display: grid;
          grid-template-columns: 50px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 15px;
          border-radius: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .award-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }
        
        .award-icon {
          width: 50px;
          height: 50px;
          background-color: #f5f5f5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .award-content h3 {
          margin-bottom: 5px;
        }
        
        .award-org {
          color: var(--dark-gray);
          font-size: 0.9rem;
        }
        
        .award-date {
          color: var(--dark-gray);
          font-size: 0.9rem;
          text-align: right;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .arrow-icon {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .award-item:hover .arrow-icon {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .award-item {
            grid-template-columns: 40px 1fr;
            grid-template-rows: auto auto;
          }
          
          .award-icon {
            width: 40px;
            height: 40px;
            grid-row: span 2;
          }
          
          .award-date {
            grid-column: 2;
            text-align: left;
            margin-top: 5px;
          }
        }
      `}</style>
    </section>
  );
};

export default Awards;