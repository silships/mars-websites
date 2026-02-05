'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FEATURES = [
  {
    title: 'OLYMPUS MONS',
    subtitle: 'THE KING OF VOLCANOES',
    description: 'Your Everest is cute. My volcano is so massive, its peak extends into space. Standing at my base, you cannot see my summit - it\'s beyond your horizon.',
    stats: ['21.9 KM HIGH', '624 KM WIDE', 'LARGER THAN ARIZONA'],
    color: '#ff4d00',
  },
  {
    title: 'VALLES MARINERIS',
    subtitle: 'THE ULTIMATE CANYON',
    description: 'Your Grand Canyon? A scratch. My canyon system would stretch from New York to Los Angeles. Look into my abyss and see true geological power.',
    stats: ['4,000 KM LONG', '7 KM DEEP', '200 KM WIDE'],
    color: '#ff6b35',
  },
  {
    title: 'POLAR ICE CAPS',
    subtitle: 'FROZEN EMPIRE',
    description: 'I hold enough water ice to flood my entire surface 11 meters deep. My poles expand and contract with the seasons, breathing with cosmic rhythm.',
    stats: ['3 KM THICK', 'WATER + CO2 ICE', 'SEASONAL CHANGES'],
    color: '#00d4ff',
  },
];

function FeatureSection({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    [index % 2 === 0 ? -100 : 100, 0, index % 2 === 0 ? 100 : -100]
  );
  
  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center py-32 relative overflow-hidden"
    >
      {/* Background number */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 text-[40vw] font-black text-white/[0.02] leading-none select-none pointer-events-none"
        style={{ [index % 2 === 0 ? 'left' : 'right']: '-10vw' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
          {/* Text content */}
          <motion.div
            style={{ x: index % 2 === 0 ? x : undefined }}
            className={index % 2 === 1 ? 'md:order-2' : ''}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.3em] mb-4 block"
              style={{ color: feature.color }}
            >
              {feature.subtitle}
            </motion.span>
            
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
            >
              {feature.title}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-400 leading-relaxed mb-8"
            >
              {feature.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {feature.stats.map((stat) => (
                <span 
                  key={stat}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-sm font-bold tracking-wider"
                >
                  {stat}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            style={{ x: index % 2 === 1 ? x : undefined }}
            className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square relative"
            >
              {/* Abstract visual representation */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${feature.color}40 0%, ${feature.color}10 50%, transparent 70%)`,
                }}
              />
              <div 
                className="absolute inset-8 border-2 rounded-full"
                style={{ borderColor: `${feature.color}30` }}
              />
              <div 
                className="absolute inset-16 border rounded-full"
                style={{ borderColor: `${feature.color}20` }}
              />
              
              {/* Center icon/text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-8xl font-black opacity-20"
                  style={{ color: feature.color }}
                >
                  {index + 1}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function BoldFeatures() {
  return (
    <section className="bg-black relative">
      {/* Section intro */}
      <div className="h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4">
            MY <span className="text-[#ff4d00]">FEATURES</span>
          </h2>
          <p className="text-2xl text-zinc-500">
            Let me show you what I'm made of
          </p>
        </motion.div>
      </div>
      
      {FEATURES.map((feature, i) => (
        <FeatureSection key={feature.title} feature={feature} index={i} />
      ))}
    </section>
  );
}
