'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const POWER_STATS = [
  {
    value: 21.9,
    unit: 'KM',
    label: 'OLYMPUS MONS HEIGHT',
    comparison: '3× Mount Everest',
    icon: '🗻',
  },
  {
    value: 4000,
    unit: 'KM',
    label: 'VALLES MARINERIS LENGTH',
    comparison: 'Coast to coast USA',
    icon: '🏜️',
  },
  {
    value: 687,
    unit: 'DAYS',
    label: 'ORBITAL PERIOD',
    comparison: 'Nearly 2 Earth years',
    icon: '🔄',
  },
  {
    value: 227.9,
    unit: 'M KM',
    label: 'DISTANCE FROM SUN',
    comparison: '1.5× Earth distance',
    icon: '☀️',
  },
];

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setDisplayValue(Math.floor(progress * value * 10) / 10);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };
    
    requestAnimationFrame(step);
  }, [isInView, value, duration]);
  
  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

function StatCard({ stat, index }: { stat: typeof POWER_STATS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      className="group relative"
    >
      <div className="relative p-8 md:p-12 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-[#ff4d00]/50 transition-all duration-500 overflow-hidden">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d00]/0 to-[#ff4d00]/0 group-hover:from-[#ff4d00]/10 group-hover:to-transparent transition-all duration-500" />
        
        {/* Icon */}
        <span className="text-5xl mb-6 block">{stat.icon}</span>
        
        {/* Number */}
        <div className="mb-4">
          <span className="text-6xl md:text-7xl font-black text-white tracking-tighter">
            <AnimatedNumber value={stat.value} />
          </span>
          <span className="text-2xl md:text-3xl font-bold text-[#ff4d00] ml-2">
            {stat.unit}
          </span>
        </div>
        
        {/* Label */}
        <h3 className="text-lg font-bold text-white tracking-wider mb-2">
          {stat.label}
        </h3>
        
        {/* Comparison */}
        <p className="text-zinc-500 text-sm">
          {stat.comparison}
        </p>
        
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#ff4d00]/20 to-transparent" />
      </div>
    </motion.div>
  );
}

export default function BoldStats() {
  return (
    <section id="stats" className="py-32 bg-black relative overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#ff4d00]/20 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: '100%' }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            MY <span className="text-[#ff4d00]">POWER</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-xl">
            Earth thinks it's impressive? Let me show you what real planetary 
            dominance looks like.
          </p>
        </motion.div>
        
        {/* Stats grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {POWER_STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
        
        {/* Bold statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-4xl md:text-6xl font-black text-white/10 tracking-tighter">
            EARTH COULD NEVER
          </p>
        </motion.div>
      </div>
    </section>
  );
}
