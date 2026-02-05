'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const MARS_STATS = [
  { label: 'Distance from Sun', value: '227.9M', unit: 'km' },
  { label: 'Diameter', value: '6,779', unit: 'km' },
  { label: 'Day Length', value: '24.6', unit: 'hours' },
  { label: 'Year Length', value: '687', unit: 'Earth days' },
];

function FloatingParticle({ delay, duration, size, left, top }: { 
  delay: number; duration: number; size: number; left: string; top: string 
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#ff4d00]/20"
      style={{ width: size, height: size, left, top }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function Mars3D() {
  return (
    <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#ff4d00]/20 blur-[100px]" />
      
      {/* Mars sphere */}
      <motion.div
        className="absolute inset-[50px] rounded-full overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, #d4714a 0%, #c1440e 30%, #8b2500 60%, #4a1508 100%)
          `,
          boxShadow: `
            inset -40px -20px 80px rgba(0,0,0,0.6),
            inset 20px 20px 40px rgba(255,150,100,0.2),
            0 0 100px rgba(255,77,0,0.3)
          `,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
      >
        {/* Surface features */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 80px 40px at 30% 40%, rgba(139,37,0,0.8) 0%, transparent 70%),
              radial-gradient(ellipse 120px 60px at 60% 60%, rgba(74,21,8,0.9) 0%, transparent 70%),
              radial-gradient(ellipse 60px 30px at 70% 30%, rgba(139,37,0,0.6) 0%, transparent 70%),
              radial-gradient(ellipse 100px 50px at 40% 70%, rgba(74,21,8,0.7) 0%, transparent 70%)
            `,
          }}
        />
        {/* Polar cap */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>
      
      {/* Orbit ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-[#ff4d00]/10"
        style={{ transform: 'rotateX(75deg)' }}
      />
      
      {/* Phobos */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-zinc-400"
        style={{
          top: '50%',
          left: '50%',
          boxShadow: 'inset -2px -1px 4px rgba(0,0,0,0.5)',
        }}
        animate={{
          x: [200, 0, -200, 0, 200],
          y: [0, -50, 0, 50, 0],
          scale: [1, 0.8, 1, 0.8, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export default function LearnHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[150vh] flex items-start justify-center overflow-hidden bg-[#030303]"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Star field */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,10,10,1)_0%,_rgba(3,3,3,1)_100%)]" />
        {mounted && [...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Floating particles */}
        {mounted && (
          <>
            <FloatingParticle delay={0} duration={4} size={8} left="10%" top="20%" />
            <FloatingParticle delay={1} duration={5} size={12} left="80%" top="30%" />
            <FloatingParticle delay={2} duration={6} size={6} left="20%" top="70%" />
            <FloatingParticle delay={0.5} duration={4.5} size={10} left="70%" top="60%" />
            <FloatingParticle delay={1.5} duration={5.5} size={8} left="40%" top="80%" />
          </>
        )}
      </div>
      
      <motion.div 
        className="relative z-10 w-full pt-32 pb-20"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff4d00]/10 border border-[#ff4d00]/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#ff4d00] animate-pulse" />
                <span className="text-[#ff4d00] text-sm font-medium tracking-wide">
                  EDUCATIONAL EXPERIENCE
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6"
              >
                <span className="block text-white">Discover</span>
                <span className="block bg-gradient-to-r from-[#ff4d00] via-[#ff7b3d] to-[#ff4d00] bg-clip-text text-transparent">
                  The Red Planet
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-lg"
              >
                Embark on an interactive journey through Mars. Explore its ancient 
                rivers, towering volcanoes, and learn why scientists believe it may 
                have once harbored life.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#explore"
                  className="group px-8 py-4 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  Start Exploring
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="#facts"
                  className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-full font-semibold transition-all duration-300 hover:bg-white/5"
                >
                  Quick Facts
                </a>
              </motion.div>
            </div>
            
            {/* Mars visualization */}
            <motion.div 
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Mars3D />
            </motion.div>
          </div>
          
          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {MARS_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
              >
                <p className="text-zinc-500 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-white">
                  {stat.value}
                  <span className="text-lg text-zinc-500 ml-1">{stat.unit}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-sm tracking-wider">SCROLL TO EXPLORE</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}
