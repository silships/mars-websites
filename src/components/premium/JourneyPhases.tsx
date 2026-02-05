'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PHASES = [
  {
    number: '01',
    title: 'Liftoff',
    subtitle: 'Leave everything behind',
    description: 'In 8 minutes, you\'ll travel from standing on Earth to orbiting it at 28,000 km/h. Feel the thunder of engines. Watch the sky turn from blue to black.',
    visual: {
      bg: 'radial-gradient(ellipse at 50% 100%, rgba(60, 100, 180, 0.3) 0%, transparent 60%)',
      accent: '#4a90d9',
    },
    stats: [
      { value: '8', unit: 'min', label: 'to orbit' },
      { value: '3', unit: 'G', label: 'max force' },
    ],
  },
  {
    number: '02', 
    title: 'Transit',
    subtitle: 'Cross the void',
    description: '225 million kilometers of emptiness. Seven months of anticipation. Watch Earth become a star. Watch Mars grow from a dot to a world.',
    visual: {
      bg: 'radial-gradient(ellipse at 50% 50%, rgba(40, 40, 60, 0.4) 0%, transparent 70%)',
      accent: '#8888aa',
    },
    stats: [
      { value: '7', unit: 'mo', label: 'duration' },
      { value: '225M', unit: 'km', label: 'distance' },
    ],
  },
  {
    number: '03',
    title: 'Entry',
    subtitle: 'Seven minutes of terror',
    description: 'Hit the atmosphere at 20,000 km/h. The heat shield glows white. Deploy the parachute. Fire retro rockets. Hold your breath.',
    visual: {
      bg: 'radial-gradient(ellipse at 50% 30%, rgba(200, 80, 40, 0.4) 0%, transparent 50%)',
      accent: '#d65a31',
    },
    stats: [
      { value: '20K', unit: 'km/h', label: 'entry speed' },
      { value: '7', unit: 'min', label: 'descent' },
    ],
  },
  {
    number: '04',
    title: 'Arrival',
    subtitle: 'A new beginning',
    description: 'Step onto rust-colored soil. Breathe recycled air. Look up at an alien sky. You are now one of the first humans to call Mars home.',
    visual: {
      bg: 'radial-gradient(ellipse at 50% 80%, rgba(180, 100, 60, 0.35) 0%, transparent 60%)',
      accent: '#c77b4a',
    },
    stats: [
      { value: '∞', unit: '', label: 'possibilities' },
      { value: '1st', unit: '', label: 'generation' },
    ],
  },
];

function PhaseSection({ phase, index }: { phase: typeof PHASES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen flex items-center py-32"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ background: phase.visual.bg }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: phase.visual.accent,
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full"
        style={{ opacity, y, scale }}
      >
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Text side */}
          <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
            {/* Phase indicator */}
            <div className="flex items-center gap-6 mb-8">
              <span 
                className="text-6xl md:text-8xl font-extralight"
                style={{ color: phase.visual.accent, opacity: 0.3 }}
              >
                {phase.number}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-4 tracking-tight">
              {phase.title}
            </h2>
            
            <p 
              className="text-lg mb-8 font-light"
              style={{ color: phase.visual.accent }}
            >
              {phase.subtitle}
            </p>
            
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
              {phase.description}
            </p>
            
            {/* Stats */}
            <div className="flex gap-12">
              {phase.stats.map((stat, i) => (
                <div key={stat.label}>
                  <p className="text-4xl font-extralight text-white">
                    {stat.value}
                    <span className="text-lg text-zinc-600 ml-1">{stat.unit}</span>
                  </p>
                  <p className="text-[10px] text-zinc-600 mt-1 tracking-[0.2em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual side */}
          <div className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="aspect-square relative">
              {/* Glowing orb */}
              <motion.div
                className="absolute inset-[20%] rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${phase.visual.accent}40 0%, ${phase.visual.accent}10 50%, transparent 70%)`,
                  boxShadow: `0 0 100px ${phase.visual.accent}30`,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Orbiting ring */}
              <motion.div
                className="absolute inset-[15%] rounded-full border border-zinc-800/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div 
                  className="absolute w-3 h-3 rounded-full -top-1.5 left-1/2"
                  style={{ backgroundColor: phase.visual.accent, opacity: 0.6 }}
                />
              </motion.div>
              
              {/* Inner ring */}
              <div className="absolute inset-[30%] rounded-full border border-zinc-800/30" />
              
              {/* Center number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-[15vw] lg:text-[10vw] font-extralight"
                  style={{ color: phase.visual.accent, opacity: 0.1 }}
                >
                  {phase.number}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function JourneyPhases() {
  return (
    <div className="relative bg-[#080604]">
      {/* Section header */}
      <div className="sticky top-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-8">
          <div className="flex justify-between items-center">
            <p className="text-[10px] tracking-[0.5em] text-zinc-700">THE JOURNEY</p>
            <p className="text-[10px] tracking-[0.3em] text-zinc-700">04 PHASES</p>
          </div>
        </div>
      </div>
      
      {/* Phase sections */}
      {PHASES.map((phase, i) => (
        <PhaseSection key={phase.number} phase={phase} index={i} />
      ))}
      
      {/* Final CTA */}
      <motion.div 
        className="py-40 text-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-transparent to-[#080604]" />
        <div className="relative z-10">
          <p className="text-[10px] tracking-[0.5em] text-zinc-600 mb-8">BEGIN YOUR JOURNEY</p>
          <a 
            href="#reserve"
            className="group inline-block relative px-16 py-5 overflow-hidden"
          >
            <span className="relative z-10 text-sm tracking-[0.3em] text-white group-hover:text-black transition-colors duration-500">
              RESERVE YOUR PASSAGE
            </span>
            <div className="absolute inset-0 border border-zinc-700 group-hover:border-white transition-colors duration-500" />
            <motion.div 
              className="absolute inset-0 bg-white origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
