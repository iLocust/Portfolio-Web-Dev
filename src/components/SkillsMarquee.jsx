import React from 'react';
import { MarqueeAnimation } from './ui/marquee-animation';

const SkillsMarquee = () => {
  return (
    <section className="py-10 bg-darkBg">
      <div className="flex flex-col gap-6">
        <MarqueeAnimation
          direction="left"
          baseVelocity={2}
          className="text-white hover:text-white/40 transition-colors duration-300 py-2 text-4xl md:text-5xl"
        >
        JavaScript • TypeScript • React.js • Next.js • Node.js • Spring Boot • MySQL • SQLite • UI/UX Design •
        </MarqueeAnimation>

      </div>
    </section>
  );
};

export default SkillsMarquee;