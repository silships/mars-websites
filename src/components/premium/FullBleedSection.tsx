'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current++;
            const progress = current / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(eased * numericValue);
            setDisplay(value.includes('M') ? `${currentValue}M` : currentValue.toString());
            
            if (current >= steps) {
              clearInterval(timer);
              setDisplay(value);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function FullBleedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black">
      {/* Full bleed visual */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ scale }}
        >
          {/* Layered Mars terrain */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 150% 100% at 50% 130%, rgba(180, 70, 30, 0.7) 0%, transparent 50%),
                radial-gradient(ellipse 100% 80% at 30% 110%, rgba(150, 60, 25, 0.5) 0%, transparent 45%),
                radial-gradient(ellipse 80% 60% at 70% 120%, rgba(120, 50, 20, 0.45) 0%, transparent 40%),
                linear-gradient(to bottom, #080604 0%, #150a06 40%, #1a0c08 70%, #0a0504 100%)
              `,
            }}
          />
          
          {/* Dust/atmosphere layer */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(200,100,50,0.05) 0%, transparent 50%, rgba(180,90,45,0.08) 100%)',
                'linear-gradient(45deg, rgba(180,90,45,0.08) 0%, transparent 50%, rgba(200,100,50,0.05) 100%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Floating dust particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-orange-300/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, -100],
                x: [0, 20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>
        
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
        
        {/* Content */}
        <motion.div 
          className="relative z-10 h-full flex items-center justify-center text-center px-8"
          style={{ opacity, y: textY }}
        >
          <div className="max-w-5xl">
            <motion.p 
              className="text-[10px] tracking-[0.6em] text-zinc-500 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              DISTANCE FROM EARTH
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-[22vw] md:text-[18vw] font-extralight text-white leading-none tracking-tighter">
                <AnimatedCounter value="225M" />
              </h2>
              <p className="text-xl md:text-3xl text-zinc-500 font-extralight mt-4 tracking-wide">
                kilometers
              </p>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p
              className="text-zinc-600 text-lg mt-12 font-light max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              The greatest distance ever traveled by humans. 
              A journey measured not in miles, but in courage.
            </motion.p>
            
            {/* Stats row */}
            <motion.div 
              className="mt-20 flex justify-center gap-12 md:gap-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              {[
                { value: '7', unit: 'months', label: 'travel time' },
                { value: '20K', unit: 'km/h', label: 'entry speed' },
                { value: '6', unit: 'min', label: 'signal delay' },
              ].map((item, i) => (
                <motion.div 
                  key={item.label} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                >
                  <p className="text-2xl md:text-4xl font-extralight text-white">
                    {item.value}
                    <span className="text-base md:text-lg text-zinc-600 ml-1">{item.unit}</span>
                  </p>
                  <p className="text-[10px] text-zinc-700 mt-2 tracking-[0.2em] uppercase">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Cinematic bars */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-20" />
      </div>
    </section>
  );
}
