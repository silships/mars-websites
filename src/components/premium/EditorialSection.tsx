'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function MarsVisualization() {
  return (
    <div className="relative w-full h-full">
      {/* Glow */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(circle at center, rgba(200, 80, 40, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Mars sphere */}
      <motion.div
        className="absolute inset-[15%] rounded-full overflow-hidden"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        style={{
          background: `
            radial-gradient(circle at 30% 30%, 
              #d4714a 0%, 
              #c1440e 25%,
              #a63608 45%,
              #8b2500 60%, 
              #5a1800 80%,
              #2a0a00 100%
            )
          `,
          boxShadow: `
            inset -60px -30px 100px rgba(0,0,0,0.7),
            inset 30px 30px 60px rgba(255,180,140,0.15),
            0 0 120px rgba(200,80,40,0.3)
          `,
        }}
      >
        {/* Surface features */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 40% 20% at 35% 45%, rgba(60,20,10,0.8) 0%, transparent 70%),
              radial-gradient(ellipse 60% 30% at 55% 60%, rgba(40,15,5,0.7) 0%, transparent 60%),
              radial-gradient(ellipse 30% 15% at 70% 35%, rgba(80,30,15,0.6) 0%, transparent 65%)
            `,
          }}
        />
        
        {/* Olympus Mons hint */}
        <div 
          className="absolute w-16 h-16 rounded-full top-[40%] left-[25%] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(100,40,20,0.8) 0%, transparent 70%)',
          }}
        />
        
        {/* Polar cap */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 opacity-50"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(255,255,255,0.6) 0%, transparent 80%)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>
      
      {/* Atmosphere rim */}
      <div 
        className="absolute inset-[14%] rounded-full pointer-events-none"
        style={{
          background: 'transparent',
          boxShadow: `
            inset 0 0 40px rgba(200,120,80,0.1),
            0 0 80px rgba(200,100,60,0.1)
          `,
        }}
      />
      
      {/* Orbiting element */}
      <motion.div
        className="absolute w-3 h-3 bg-zinc-400 rounded-full"
        style={{
          top: '50%',
          left: '50%',
          boxShadow: '0 0 10px rgba(255,255,255,0.3)',
        }}
        animate={{
          x: [150, 0, -150, 0, 150],
          y: [0, -80, 0, 80, 0],
          scale: [1, 0.7, 1, 0.7, 1],
          opacity: [1, 0.5, 1, 0.5, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export default function EditorialSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const marsY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const marsRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const lineWidth = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '100%', '100%']);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#080604] overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Large quote with line animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mb-48 relative"
        >
          {/* Animated line */}
          <motion.div 
            className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent"
            style={{ scaleY: lineWidth, transformOrigin: 'top' }}
          />
          
          <p className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white leading-[1.3] max-w-5xl pl-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "We are the generation that will see
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-zinc-500"
            >
              {' '}human footprints on Martian soil.{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              This is not science fiction.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="italic text-orange-200/80"
            >
              {' '}This is the plan."
            </motion.span>
          </p>
        </motion.div>
        
        {/* Editorial grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Mars visualization */}
          <motion.div 
            className="relative aspect-square"
            style={{ y: marsY, rotate: marsRotate }}
          >
            <MarsVisualization />
            
            {/* Floating labels */}
            <motion.div 
              className="absolute top-[20%] -left-4 md:left-[5%]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-[10px] tracking-[0.3em] text-zinc-600">DIAMETER</p>
              <p className="text-sm text-zinc-400 font-light">6,779 km</p>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[25%] -right-4 md:right-[5%] text-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-[10px] tracking-[0.3em] text-zinc-600">GRAVITY</p>
              <p className="text-sm text-zinc-400 font-light">0.38 G</p>
            </motion.div>
          </motion.div>
          
          {/* Text content */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] tracking-[0.5em] text-zinc-600 mb-8">THE DESTINATION</p>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] mb-10">
                A world of
                <br />
                <span className="italic text-orange-100/80">extraordinary</span>
                <br />
                extremes
              </h2>
              
              <div className="space-y-6 text-zinc-400 font-light leading-[1.8] text-lg">
                <p>
                  Mars presents a landscape of unimaginable scale. Olympus Mons rises 
                  <span className="text-white"> 21.9 kilometers</span> above the surrounding plains, 
                  nearly three times the height of Everest.
                </p>
                <p>
                  Valles Marineris stretches <span className="text-white">4,000 kilometers</span> across 
                  the equator, a canyon system that would span the entire United States.
                </p>
              </div>
            </motion.div>
            
            {/* Animated stats */}
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { value: '-60°', unit: 'C', label: 'Average Temp' },
                { value: '687', unit: 'd', label: 'Year Length' },
                { value: '24.6', unit: 'h', label: 'Day Length' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 bottom-0 w-px bg-zinc-800" />
                  <p className="text-3xl font-extralight text-white">
                    {stat.value}
                    <span className="text-lg text-zinc-600">{stat.unit}</span>
                  </p>
                  <p className="text-[10px] text-zinc-600 mt-2 tracking-widest uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
