"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

/**
 * @typedef {Object} TimelineEntry
 * @property {string} title - The title of the timeline entry
 * @property {React.ReactNode} content - The content to display for this entry
 */

/**
 * A timeline component that animates based on scroll position
 * @param {Object} props - Component props
 * @param {TimelineEntry[]} props.data - Array of timeline entries
 */
export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 30%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-darkBg text-white font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10 reveal-element opacity-0 translate-y-4" 
           style={{ transition: 'all 0.8s ease' }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">
          MY<br />EXPERIENCE
        </h2>
        <p className="text-textLight text-sm mb-2 uppercase tracking-widest max-w-xl">
          Delivering modern solutions for complex problems with clean code and proven expertise
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-start pt-6 md:pt-12 md:gap-2"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-[120px] md:max-w-[150px] md:w-full">
              <div className="h-10 absolute left-0 md:left-0 w-10 rounded-full bg-darkBg dark:bg-black flex items-center justify-center border border-gray-800">
                <div className="h-4 w-4 rounded-full bg-white p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-16 md:text-2xl font-bold text-white">
                {item.period}
              </h3>
            </div>

            <div className="relative pl-12 pr-4 md:pl-1 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-white">
                {item.period}
              </h3>
              <div className="border-t border-gray-800 pt-3">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-textLight mb-4">{item.company}</p>
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-5 left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-800 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-purple-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};