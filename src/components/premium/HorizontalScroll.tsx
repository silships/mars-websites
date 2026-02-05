'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FEATURES = [
  {
    number: '01',
    title: 'The Launch',
    subtitle: 'Departure from Earth',
    description: 'Feel the raw power of next-generation engines as you break free from Earth\'s gravity. In 8 minutes, everything you\'ve ever known becomes a pale blue dot.',
    visual: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 50%, #050510 100%)',
      accent: 'rgba(100, 150, 255, 0.3)',
    },
  },
  {
    number: '02',
    title: 'The Crossing',
    subtitle: '7 months through the void',
    description: 'Cross 225 million kilometers of interplanetary space. Watch Earth shrink to a star while Mars grows from a red point to a world.',
    visual: {
      gradient: 'linear-gradient(135deg, #0a0a10 0%, #101018 50%, #0a0a0f 100%)',
      accent: 'rgba(150, 150, 200, 0.2)',
    },
  },
  {
    number: '03',
    title: 'The Descent',
    subtitle: 'Seven minutes of terror',
    description: 'Plunge through the Martian atmosphere at 20,000 km/h. Feel the heat shield glow. Deploy the parachutes. Fire the landing engines. Touchdown.',
    visual: {
      gradient: 'linear-gradient(135deg, #2a1510 0%, #1a0c08 50%, #0a0505 100%)',
      accent: 'rgba(255, 100, 50, 0.4)',
    },
  },
  {
    number: '04',
    title: 'The First Step',
    subtitle: 'A new world awaits',
    description: 'Step onto rust-colored soil never before touched by human feet. Breathe recycled air. Look up at a butterscotch sky. You are now Martian.',
    visual: {
      gradient: 'linear-gradient(135deg, #1f1510 0%, #150c08 50%, #0a0604 100%)',
      accent: 'rgba(200, 120, 80, 0.3)',
    },
  },
];

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  return (
    <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] flex-shrink-0 pr-4 md:pr-8">
      <div className="h-full">
        {/* Visual area */}
        <div 
          className="aspect-[16/9] mb-10 relative overflow-hidden group"
          style={{ background: feature.visual.gradient }}
        >
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                `radial-gradient(circle at 30% 70%, ${feature.visual.accent} 0%, transparent 50%)`,
                `radial-gradient(circle at 70% 30%, ${feature.visual.accent} 0%, transparent 50%)`,
                `radial-gradient(circle at 30% 70%, ${feature.visual.accent} 0%, transparent 50%)`,
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Large number */}
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <span className="text-[20vw] md:text-[12vw] font-extralight text-white/[0.03] leading-none">
              {feature.number}
            </span>
          </div>
          
          {/* Phase indicator */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12">
            <p className="text-[10px] tracking-[0.4em] text-zinc-500">PHASE {feature.number}</p>
          </div>
          
          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
            <div 
              className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-white/50 to-transparent"
            />
            <div 
              className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-white/50 to-transparent"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative pl-6 border-l border-zinc-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-extralight text-white mb-3">{feature.title}</h3>
            <p className="text-sm text-orange-200/60 mb-6 tracking-wide">{feature.subtitle}</p>
            <p className="text-zinc-400 font-light leading-relaxed max-w-lg">
              {feature.description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#080604]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background grain */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-8 md:p-16 z-10">
          <div className="flex justify-between items-start">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] tracking-[0.5em] text-zinc-600 mb-3">THE JOURNEY</p>
              <h2 className="text-3xl md:text-4xl font-extralight text-white">Your Passage to Mars</h2>
            </motion.div>
            <div className="text-right">
              <p className="text-[10px] tracking-[0.3em] text-zinc-600 mb-1">PHASES</p>
              <p className="text-2xl font-extralight text-white">04</p>
            </div>
          </div>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="h-full flex items-center pt-32 pb-24">
          <motion.div 
            className="flex pl-8 md:pl-16 lg:pl-24"
            style={{ x }}
          >
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.number} feature={feature} index={i} />
            ))}
            
            {/* End card */}
            <div className="w-[50vw] flex-shrink-0 flex items-center justify-center">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-[10px] tracking-[0.5em] text-zinc-600 mb-8">YOUR JOURNEY BEGINS</p>
                <a 
                  href="#reserve"
                  className="group inline-block relative px-16 py-5 overflow-hidden"
                >
                  <span className="relative z-10 text-sm tracking-[0.3em] text-white group-hover:text-black transition-colors duration-500">
                    RESERVE
                  </span>
                  <div className="absolute inset-0 border border-zinc-700 group-hover:border-white transition-colors duration-500" />
                  <motion.div 
                    className="absolute inset-0 bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16">
          <div className="flex justify-between text-[10px] tracking-[0.3em] text-zinc-700 mb-4">
            <span>LAUNCH</span>
            <span>ARRIVAL</span>
          </div>
          <div className="h-px bg-zinc-900 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500/50 to-orange-300/50"
              style={{ width: progressWidth }}
            />
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"
              style={{ left: progressWidth }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
