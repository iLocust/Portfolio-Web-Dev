import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'FREELANCE FULL-STACK DEVELOPER',
      company: 'Menara Tirza Christian School',
      period: 'Aug 2024 - Present',
      link: '#'
    },
    {
      id: 2,
      title: 'APPLICATION DEVELOPER',
      company: 'Mitra Integrasi Informatika (Metrodata Group)',
      period: 'May 2023 - Present',
      link: '#'
    },
    {
      id: 3,
      title: 'FRONT-END DEVELOPER',
      company: 'Metrodata Academy (Metrodata Group)',
      period: 'August 2024 - December 2024',
      link: '#'
    },
    {
      id: 4,
      title: 'INTERSHIP FULL-STACK DEVELOPER',
      company: 'Central Bureau of Statistics',
      period: 'August 2021 - December 2021',
      link: '#'
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
                <a 
                  href={exp.link} 
                  className="text-textLight flex items-center hover:text-white transition-colors"
                >
                  Read More <span className="ml-2">→</span>
                </a>
              </div>
              <p className="text-textLight mt-4">{exp.description}</p>
            </div>
          ))}
        
      </div>
    </section>
  );
};

export default Experience;