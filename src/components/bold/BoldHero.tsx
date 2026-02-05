'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const BOLD_STATEMENTS = [
  "THE BIGGEST VOLCANO",
  "THE DEEPEST CANYON", 
  "THE NEXT FRONTIER",
  "HUMANITY'S FUTURE",
];

function useTextCycle(texts: string[], interval = 3000) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);
  
  return texts[index];
}

export default function BoldHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  const cyclingText = useTextCycle(BOLD_STATEMENTS, 2500);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[200vh] bg-black overflow-hidden"
    >
      {/* Fixed hero content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Giant Mars background */}
        <motion.div 
          className="absolute -right-[30vw] top-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] md:-right-[20vw]"
          style={{ scale }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, 
                  #ff6b35 0%, 
                  #e63900 20%, 
                  #c41e00 40%, 
                  #8b0000 60%, 
                  #4a0000 80%, 
                  #1a0000 100%
                )
              `,
              boxShadow: `
                inset -100px -50px 200px rgba(0,0,0,0.8),
                inset 50px 50px 100px rgba(255,150,100,0.3),
                0 0 300px rgba(255,77,0,0.4),
                0 0 600px rgba(255,77,0,0.2)
              `,
            }}
          />
          {/* Surface texture */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 200px 100px at 30% 35%, rgba(50,0,0,0.8) 0%, transparent 70%),
                radial-gradient(ellipse 300px 150px at 55% 55%, rgba(30,0,0,0.9) 0%, transparent 70%),
                radial-gradient(ellipse 150px 80px at 70% 30%, rgba(60,0,0,0.6) 0%, transparent 70%)
              `,
            }}
          />
        </motion.div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-6 w-full"
          style={{ y, opacity }}
        >
          <div className="max-w-4xl">
            {/* Small intro */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#ff4d00] text-lg md:text-xl font-bold tracking-[0.3em] uppercase mb-6"
            >
              Forget Everything You Know
            </motion.p>
            
            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[15vw] md:text-[12vw] font-black leading-[0.85] tracking-tighter mb-8"
            >
              <span className="block text-white">I AM</span>
              <span className="block text-[#ff4d00]">MARS</span>
            </motion.h1>
            
            {/* Cycling statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="h-16 md:h-20 overflow-hidden"
            >
              {mounted && (
                <motion.p
                  key={cyclingText}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  className="text-2xl md:text-4xl font-bold text-white/60"
                >
                  {cyclingText}
                </motion.p>
              )}
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <a 
                href="#stats"
                className="group inline-flex items-center gap-4 text-white text-xl font-bold hover:text-[#ff4d00] transition-colors"
              >
                <span className="tracking-wider">WITNESS MY POWER</span>
                <motion.span 
                  className="text-3xl"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity }}
        >
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-2 h-2 bg-[#ff4d00] rounded-full"
              animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
