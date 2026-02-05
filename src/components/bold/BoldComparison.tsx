'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const COMPARISONS = [
  {
    category: 'BIGGEST MOUNTAIN',
    mars: { name: 'Olympus Mons', value: 21.9, unit: 'km' },
    earth: { name: 'Mount Everest', value: 8.8, unit: 'km' },
    winner: 'mars',
    ratio: '2.5×',
  },
  {
    category: 'LONGEST CANYON',
    mars: { name: 'Valles Marineris', value: 4000, unit: 'km' },
    earth: { name: 'Grand Canyon', value: 446, unit: 'km' },
    winner: 'mars',
    ratio: '9×',
  },
  {
    category: 'DUST STORMS',
    mars: { name: 'Global storms', value: 'Planet-wide', unit: '' },
    earth: { name: 'Regional storms', value: 'Local', unit: '' },
    winner: 'mars',
    ratio: 'GLOBAL',
  },
  {
    category: 'SUNSET COLOR',
    mars: { name: 'Blue sunset', value: 'Blue', unit: '' },
    earth: { name: 'Orange sunset', value: 'Orange', unit: '' },
    winner: 'mars',
    ratio: 'UNIQUE',
  },
  {
    category: 'DAY LENGTH',
    mars: { name: 'Sol', value: 24.6, unit: 'hrs' },
    earth: { name: 'Day', value: 24, unit: 'hrs' },
    winner: 'tie',
    ratio: '≈',
  },
  {
    category: 'MOONS',
    mars: { name: 'Phobos & Deimos', value: 2, unit: '' },
    earth: { name: 'The Moon', value: 1, unit: '' },
    winner: 'mars',
    ratio: '2×',
  },
];

export default function BoldComparison() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap select-none pointer-events-none">
        MARS WINS
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
            MARS <span className="text-[#ff4d00]">VS</span> EARTH
          </h2>
          <p className="text-xl text-zinc-500">
            There's no competition. There never was.
          </p>
        </motion.div>
        
        {/* Comparison table */}
        <div className="space-y-4">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 pb-4 border-b border-zinc-800">
            <div className="text-center">
              <span className="text-3xl font-black text-[#ff4d00]">MARS</span>
            </div>
            <div className="text-center">
              <span className="text-zinc-600 text-sm tracking-wider">CATEGORY</span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-black text-blue-400">EARTH</span>
            </div>
          </div>
          
          {/* Rows */}
          {COMPARISONS.map((comp, i) => (
            <motion.div
              key={comp.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`grid grid-cols-3 gap-4 py-6 border-b border-zinc-900 transition-all duration-300 ${
                hoveredIndex === i ? 'bg-white/[0.02]' : ''
              }`}
            >
              {/* Mars value */}
              <div className={`text-center transition-all duration-300 ${
                comp.winner === 'mars' ? 'scale-110' : 'opacity-60'
              }`}>
                <p className="text-2xl md:text-4xl font-black text-white">
                  {comp.mars.value}
                  <span className="text-lg text-zinc-500 ml-1">{comp.mars.unit}</span>
                </p>
                <p className="text-sm text-zinc-500 mt-1">{comp.mars.name}</p>
                {comp.winner === 'mars' && (
                  <span className="inline-block mt-2 px-3 py-1 bg-[#ff4d00] text-xs font-bold">
                    {comp.ratio} BETTER
                  </span>
                )}
              </div>
              
              {/* Category */}
              <div className="text-center flex items-center justify-center">
                <span className="text-sm font-bold text-zinc-400 tracking-wider">
                  {comp.category}
                </span>
              </div>
              
              {/* Earth value */}
              <div className={`text-center transition-all duration-300 ${
                comp.winner === 'earth' ? 'scale-110' : 'opacity-60'
              }`}>
                <p className="text-2xl md:text-4xl font-black text-white">
                  {comp.earth.value}
                  <span className="text-lg text-zinc-500 ml-1">{comp.earth.unit}</span>
                </p>
                <p className="text-sm text-zinc-500 mt-1">{comp.earth.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-12 py-8 bg-zinc-900/50 border border-zinc-800">
            <div className="text-center">
              <p className="text-6xl font-black text-[#ff4d00]">5</p>
              <p className="text-sm text-zinc-500">MARS WINS</p>
            </div>
            <div className="text-4xl text-zinc-700">:</div>
            <div className="text-center">
              <p className="text-6xl font-black text-blue-400/50">0</p>
              <p className="text-sm text-zinc-500">EARTH WINS</p>
            </div>
          </div>
          
          <p className="mt-8 text-2xl font-bold text-zinc-600">
            (1 TIE - I'LL TAKE IT)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
