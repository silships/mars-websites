'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronDown } from 'lucide-react';
import MarsScene from './MarsScene';

// Text scramble hook
const useTextScramble = (text: string, active: boolean = true) => {
  const [output, setOutput] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#MARS';
  
  useEffect(() => {
    if (!active) return;
    let iteration = 0;
    
    const interval = setInterval(() => {
      setOutput(
        text.split('').map((char, i) => {
          if (char === ' ') return ' ';
          if (i < iteration) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1/3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, active]);
  
  return output;
};

export const MarsHero: React.FC = () => {
  const title = useTextScramble('MARS EXPLORER', true);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <MarsScene />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none z-10" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-20 text-center max-w-5xl px-6"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
          <Rocket className="w-4 h-4 text-[#ff4d00]" />
          <span className="text-sm font-mono uppercase tracking-wider text-[#ff4d00]">
            MISSION ACTIVE
          </span>
        </motion.div>
        
        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
          <span className="bg-gradient-to-r from-[#ff4d00] via-[#e27b58] to-[#cf4520] bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto"
        >
          Discover the mysteries of the Red Planet. Real-time data, 
          stunning visuals, and the latest from humanity&apos;s next frontier.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-[#ff4d00] text-black font-bold uppercase tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
            Begin Exploration
            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-mono uppercase tracking-wider rounded-lg hover:bg-white/10 transition-colors">
            Mission Data
          </button>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MarsHero;
