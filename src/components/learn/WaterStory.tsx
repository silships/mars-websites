'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const EVIDENCE = [
  {
    title: 'Ancient River Channels',
    description: 'Orbital images reveal vast networks of dried riverbeds and deltas, proving water once flowed abundantly on Mars billions of years ago.',
    icon: '🏞️',
  },
  {
    title: 'Mineral Deposits',
    description: 'Rovers have discovered clay minerals and sulfates that only form in the presence of water, locked in Martian rocks.',
    icon: '💎',
  },
  {
    title: 'Polar Ice Caps',
    description: 'Both poles contain massive amounts of water ice. The northern cap alone holds enough ice to cover Mars in 11 meters of water.',
    icon: '🧊',
  },
  {
    title: 'Subsurface Lakes',
    description: 'Radar observations suggest liquid water may exist beneath the southern polar ice cap, potentially harboring microbial life.',
    icon: '📡',
  },
];

const TIMELINE_EVENTS = [
  { year: '4.5B years ago', event: 'Mars forms with a thicker atmosphere and warmer climate' },
  { year: '4.1B years ago', event: 'Vast oceans may have covered 19% of the surface' },
  { year: '3.7B years ago', event: 'Climate change begins, water starts disappearing' },
  { year: '3.0B years ago', event: 'Most surface water gone, frozen underground' },
  { year: 'Present', event: 'Only ice remains, plus possible subsurface liquid' },
];

export default function WaterStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const waterLevel = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '30%', '5%']);
  
  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-[#030303]">
      {/* Water animation background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"
        style={{ height: waterLevel }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            The Search for Water
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where Did the Water Go?
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Mars was once a wet world with rivers, lakes, and possibly oceans. 
            Understanding what happened to its water is key to finding signs of ancient life.
          </p>
        </motion.div>
        
        {/* Two columns: Evidence + Visual */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Evidence cards */}
          <div className="space-y-6">
            {EVIDENCE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mars water visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-full overflow-hidden">
              {/* Mars base */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #d4714a 0%, #c1440e 40%, #8b2500 80%)',
                  boxShadow: 'inset -30px -20px 60px rgba(0,0,0,0.5)',
                }}
              />
              
              {/* Animated water overlay */}
              <motion.div 
                className="absolute inset-0 rounded-full overflow-hidden"
                initial={{ clipPath: 'inset(60% 0 0 0)' }}
                whileInView={{ clipPath: 'inset(100% 0 0 0)' }}
                transition={{ duration: 3, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #3b82f6 0%, #1d4ed8 40%, #1e3a8a 80%)',
                    boxShadow: 'inset -30px -20px 60px rgba(0,0,0,0.3)',
                  }}
                />
              </motion.div>
              
              {/* Label */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-zinc-300 font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  4 billion years of change
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-white mb-10 text-center">Timeline of Martian Water</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-400 to-[#ff4d00]" />
            
            {TIMELINE_EVENTS.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-6 mb-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-8 md:pl-0`}>
                  <span className="text-sm text-blue-400 font-mono">{event.year}</span>
                  <p className="text-zinc-300 mt-1">{event.event}</p>
                </div>
                
                {/* Dot */}
                <div 
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 border-2 border-blue-400"
                  style={{
                    backgroundColor: i === TIMELINE_EVENTS.length - 1 ? '#ff4d00' : '#1e3a8a',
                    borderColor: i === TIMELINE_EVENTS.length - 1 ? '#ff4d00' : '#60a5fa',
                  }}
                />
                
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
