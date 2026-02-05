'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const JOURNEY_PHASES = [
  {
    day: 'DAY 1',
    title: 'LIFTOFF 🚀',
    description: 'Feel 3Gs of pure adrenaline as you leave Earth behind. Watch your home shrink to a blue marble.',
    duration: '8 minutes to orbit',
    highlight: 'The view from 400km up will change you forever',
    emoji: '🌍',
  },
  {
    day: 'DAYS 1-30',
    title: 'EARTH ORBIT & DEPARTURE',
    description: 'Adjust to zero gravity. Final systems check. Then, the main engines fire for Mars.',
    duration: 'Trans-Mars injection burn',
    highlight: 'Your last chance to wave goodbye to Earth',
    emoji: '🛸',
  },
  {
    day: 'DAYS 30-180',
    title: 'CRUISE PHASE',
    description: 'Six months of zero-G living. Movie nights, space yoga, and watching stars like never before.',
    duration: '150+ days of adventure',
    highlight: 'Become best friends with your crewmates',
    emoji: '✨',
  },
  {
    day: 'DAY 200',
    title: 'MARS APPROACH',
    description: 'The red planet fills your window. This is real. You\'re actually doing this.',
    duration: 'Orbital insertion',
    highlight: 'First glimpse of your new home',
    emoji: '🔴',
  },
  {
    day: 'DAY 210',
    title: 'LANDING DAY',
    description: '7 minutes of terror through the Martian atmosphere. Then: touchdown. You made it.',
    duration: 'EDL sequence',
    highlight: 'Your footprint on another world',
    emoji: '🎉',
  },
];

function JourneyCard({ phase, index }: { phase: typeof JOURNEY_PHASES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 1 ? 'text-right' : ''}`}>
        <span className="text-[#ff4d00] text-sm font-bold tracking-widest">{phase.day}</span>
        <h3 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">{phase.title}</h3>
        <p className="text-zinc-400 text-lg mb-4">{phase.description}</p>
        <div className="inline-block px-4 py-2 bg-zinc-900 rounded-lg">
          <p className="text-sm text-zinc-500">{phase.duration}</p>
        </div>
        <p className="text-[#ff4d00] text-sm mt-4 font-medium">💫 {phase.highlight}</p>
      </div>
      
      {/* Emoji/Visual */}
      <div className="hidden md:flex w-32 h-32 items-center justify-center">
        <span className="text-7xl">{phase.emoji}</span>
      </div>
      
      {/* Timeline dot */}
      <div className="relative">
        <div className="w-6 h-6 bg-[#ff4d00] rounded-full z-10 relative">
          <div className="absolute inset-0 bg-[#ff4d00] rounded-full animate-ping opacity-30" />
        </div>
      </div>
      
      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  return (
    <section id="journey" ref={containerRef} className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#ff4d00] text-sm font-bold tracking-[0.3em] mb-4 block">
            YOUR ADVENTURE AWAITS
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            THE <span className="text-[#ff4d00]">JOURNEY</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            225 million kilometers. 7 months. The adventure of a lifetime.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#ff4d00] to-[#ff4d00]/50"
              style={{ height: lineHeight }}
            />
          </div>
          
          <div className="space-y-24">
            {JOURNEY_PHASES.map((phase, i) => (
              <JourneyCard key={phase.day} phase={phase} index={i} />
            ))}
          </div>
        </div>
        
        {/* Journey stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '225M', unit: 'km', label: 'Distance traveled' },
            { value: '7', unit: 'months', label: 'Journey duration' },
            { value: '24,600', unit: 'km/h', label: 'Cruising speed' },
            { value: '∞', unit: '', label: 'Memories made' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-zinc-900/50">
              <p className="text-4xl font-black text-white">
                {stat.value}<span className="text-xl text-[#ff4d00]">{stat.unit}</span>
              </p>
              <p className="text-sm text-zinc-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
