'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function DustParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);
  
  useEffect(() => {
    setParticles(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-300/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            x: [0, 100, 50, -50, 0],
            y: [0, -200, -400],
            opacity: [0, 0.6, 0.4, 0.2, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

function AtmosphericLight() {
  return (
    <>
      {/* Volumetric light rays */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            conic-gradient(from 180deg at 50% 120%, 
              transparent 0deg,
              rgba(255, 140, 80, 0.1) 20deg,
              transparent 40deg,
              rgba(255, 120, 60, 0.08) 80deg,
              transparent 100deg,
              rgba(255, 100, 50, 0.06) 140deg,
              transparent 180deg,
              transparent 360deg
            )
          `,
        }}
      />
      
      {/* Lens flare */}
      <motion.div
        className="absolute w-96 h-96 -bottom-48 left-1/4"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 150, 100, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </>
  );
}

function FilmGrain() {
  return (
    <div 
      className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function HeroTitle() {
  return (
    <div className="relative">
      {/* Glow behind text */}
      <div 
        className="absolute -inset-20 opacity-50"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200, 100, 50, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="relative text-[15vw] md:text-[12vw] font-extralight text-white leading-[0.85] tracking-[-0.04em]"
      >
        {/* Letter by letter animation */}
        {'Mars'.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 100, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              delay: 0.8 + i * 0.15, 
              duration: 1.2,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="inline-block"
            style={{ transformOrigin: 'bottom' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#080604]">
        {/* Animated Mars surface background */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale, filter: `blur(${blur}px)` }}
        >
          {/* Base gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 120% 80% at 50% 120%, rgba(180, 70, 30, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse 80% 60% at 20% 100%, rgba(140, 50, 20, 0.4) 0%, transparent 40%),
                radial-gradient(ellipse 60% 50% at 80% 90%, rgba(120, 45, 15, 0.35) 0%, transparent 45%),
                linear-gradient(to bottom, #080604 0%, #12080a 60%, #1a0c08 100%)
              `,
            }}
          />
          
          {/* Terrain texture layers */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                radial-gradient(ellipse 300px 150px at 30% 85%, rgba(100, 40, 20, 0.8) 0%, transparent 70%),
                radial-gradient(ellipse 400px 200px at 70% 90%, rgba(80, 30, 15, 0.7) 0%, transparent 60%),
                radial-gradient(ellipse 200px 100px at 50% 95%, rgba(60, 25, 10, 0.6) 0%, transparent 50%)
              `,
            }}
          />
          
          {/* Crater shadows */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{ opacity: [0.25, 0.35, 0.25] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{
              background: `
                radial-gradient(circle 80px at 25% 88%, rgba(0, 0, 0, 0.5) 0%, transparent 70%),
                radial-gradient(circle 120px at 60% 92%, rgba(0, 0, 0, 0.4) 0%, transparent 60%),
                radial-gradient(circle 60px at 85% 85%, rgba(0, 0, 0, 0.45) 0%, transparent 65%)
              `,
            }}
          />
          
          <AtmosphericLight />
          <DustParticles />
        </motion.div>
        
        {/* Film grain overlay */}
        <FilmGrain />
        
        {/* Cinematic letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-30" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-30" />
        
        {/* Content */}
        <motion.div 
          className="relative z-20 h-full flex flex-col justify-end pb-32 px-8 md:px-16 lg:px-24"
          style={{ opacity, y }}
        >
          {/* Top nav */}
          <motion.div 
            className="absolute top-0 left-0 right-0 p-8 md:p-16 flex justify-between items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase">Mars Program</p>
            <div className="flex items-center gap-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] tracking-[0.5em] text-zinc-600 uppercase">Mission Active</p>
            </div>
          </motion.div>
          
          {/* Main content */}
          <div className="max-w-6xl">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-zinc-500 text-xs tracking-[0.4em] mb-8 uppercase"
            >
              The Next Chapter of Humanity
            </motion.p>
            
            <HeroTitle />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="mt-16 flex items-end justify-between"
            >
              <p className="text-zinc-500 text-lg max-w-lg leading-relaxed font-light">
                225 million kilometers from everything you know. 
                A world of towering volcanoes and ancient rivers, waiting to be touched by human hands.
              </p>
              
              <div className="hidden md:flex items-center gap-6">
                <motion.div 
                  className="w-px h-20 bg-gradient-to-b from-zinc-600 to-transparent"
                  animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <p className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase rotate-90 origin-left translate-x-4">
                  Scroll
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Corner coordinates */}
        <motion.div 
          className="absolute bottom-24 right-8 md:right-16 text-right z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="text-[10px] tracking-[0.3em] text-zinc-700 font-mono">18.4°N 77.5°E</p>
          <p className="text-[10px] tracking-[0.3em] text-zinc-700 font-mono">JEZERO CRATER</p>
        </motion.div>
      </div>
    </section>
  );
}
