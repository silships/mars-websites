'use client';

import { motion } from 'framer-motion';

const TIMELINE = [
  {
    year: '4.5B BCE',
    title: 'I WAS BORN',
    description: 'From cosmic dust, I emerged. A world of fire and fury.',
    icon: '💥',
  },
  {
    year: '4.1B BCE',
    title: 'I HAD OCEANS',
    description: 'Water covered 19% of my surface. I was alive with possibility.',
    icon: '🌊',
  },
  {
    year: '3.5B BCE',
    title: 'I BUILT MOUNTAINS',
    description: 'Olympus Mons rose to become the greatest volcano in existence.',
    icon: '🗻',
  },
  {
    year: '1965 CE',
    title: 'YOU FOUND ME',
    description: 'Mariner 4 captured my first portrait. You saw my true face.',
    icon: '📸',
  },
  {
    year: '2012 CE',
    title: 'YOU EXPLORED ME',
    description: 'Curiosity landed in my Gale Crater. The investigation began.',
    icon: '🤖',
  },
  {
    year: '2030s',
    title: 'YOU WILL COME',
    description: 'Humans will walk on my surface. Our destinies intertwine.',
    icon: '👨‍🚀',
  },
  {
    year: 'FUTURE',
    title: 'WE WILL BECOME ONE',
    description: 'A new civilization. A second home. The bold inherit my red soil.',
    icon: '🏠',
  },
];

export default function BoldTimeline() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            MY <span className="text-[#ff4d00]">STORY</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-xl">
            4.5 billion years in the making. And I'm just getting started.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff4d00] via-[#ff4d00]/50 to-[#ff4d00]/10" />
          
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative flex items-center mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-12 md:pl-0`}>
                <span className="text-6xl mb-4 block">{item.icon}</span>
                <span className="text-[#ff4d00] font-mono text-sm tracking-wider">{item.year}</span>
                <h3 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-lg">
                  {item.description}
                </p>
              </div>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-[#ff4d00] rounded-full border-4 border-black z-10">
                <div className="absolute inset-0 rounded-full animate-ping bg-[#ff4d00]/50" />
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
