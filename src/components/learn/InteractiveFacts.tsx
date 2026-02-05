'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MARS_FACTS = [
  {
    id: 'size',
    title: 'Size & Scale',
    icon: '🔴',
    color: '#ff4d00',
    fact: 'Mars is about half the size of Earth',
    details: 'With a diameter of 6,779 km, Mars is the second smallest planet in our solar system. You could fit almost 7 Mars inside Earth. Despite its smaller size, Mars has the same amount of dry land as Earth because it has no oceans.',
    comparison: {
      mars: 53,
      earth: 100,
      label: 'Surface Area (% of Earth)',
    },
  },
  {
    id: 'gravity',
    title: 'Gravity',
    icon: '⚖️',
    color: '#00d4ff',
    fact: 'You would weigh 62% less on Mars',
    details: 'Mars has only 38% of Earth\'s gravity. A person weighing 100 kg on Earth would weigh just 38 kg on Mars. This lower gravity allowed Mars to lose most of its atmosphere over billions of years.',
    comparison: {
      mars: 38,
      earth: 100,
      label: 'Gravity Strength',
    },
  },
  {
    id: 'temperature',
    title: 'Temperature',
    icon: '🌡️',
    color: '#ff6b6b',
    fact: 'Average temperature is -60°C (-80°F)',
    details: 'Mars experiences extreme temperature variations. At the equator during summer, it can reach 20°C (70°F), but at the poles in winter, temperatures plummet to -125°C (-195°F). The thin atmosphere cannot retain heat.',
    comparison: {
      mars: 25,
      earth: 70,
      label: 'Temperature (normalized)',
    },
  },
  {
    id: 'atmosphere',
    title: 'Atmosphere',
    icon: '💨',
    color: '#a78bfa',
    fact: '95% carbon dioxide, only 0.13% oxygen',
    details: 'Mars\'s atmosphere is 100 times thinner than Earth\'s. It\'s composed mainly of CO2 with traces of nitrogen and argon. The low pressure means water cannot exist as liquid on the surface, it either freezes or evaporates instantly.',
    comparison: {
      mars: 1,
      earth: 100,
      label: 'Atmospheric Pressure',
    },
  },
  {
    id: 'moons',
    title: 'Moons',
    icon: '🌙',
    color: '#fbbf24',
    fact: 'Two small moons: Phobos and Deimos',
    details: 'Mars has two tiny, irregularly shaped moons. Phobos (27 km) orbits so close that it\'s slowly spiraling inward and will crash into Mars in about 50 million years. Deimos (15 km) is slowly drifting away.',
    comparison: {
      mars: 2,
      earth: 1,
      label: 'Number of Moons',
    },
  },
  {
    id: 'day',
    title: 'Day Length',
    icon: '☀️',
    color: '#34d399',
    fact: 'A Martian day (sol) is 24h 37m',
    details: 'Mars has a day length remarkably similar to Earth\'s. This similarity makes Mars more suitable for human colonization. However, a Martian year is 687 Earth days, nearly twice as long as ours.',
    comparison: {
      mars: 103,
      earth: 100,
      label: 'Day Length (% of Earth)',
    },
  },
];

function ComparisonBar({ mars, earth, label, color }: { mars: number; earth: number; label: string; color: string }) {
  return (
    <div className="mt-6 space-y-3">
      <p className="text-sm text-zinc-400">{label}</p>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500 w-12">Earth</span>
          <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${earth}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <span className="text-xs text-zinc-400 w-12 text-right">{earth}%</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500 w-12">Mars</span>
          <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              animate={{ width: `${mars}%` }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
          <span className="text-xs text-zinc-400 w-12 text-right">{mars}%</span>
        </div>
      </div>
    </div>
  );
}

function FactCard({ fact, isActive, onClick }: { fact: typeof MARS_FACTS[0]; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
        isActive 
          ? 'bg-white/[0.05] border-white/20' 
          : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">{fact.icon}</span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{fact.title}</h3>
          <p className="text-sm text-zinc-400">{fact.fact}</p>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          className="text-zinc-500"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-white/10">
              <p className="text-zinc-300 leading-relaxed">{fact.details}</p>
              <ComparisonBar 
                mars={fact.comparison.mars} 
                earth={fact.comparison.earth} 
                label={fact.comparison.label}
                color={fact.color}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function InteractiveFacts() {
  const [activeId, setActiveId] = useState<string | null>('size');
  
  return (
    <section id="facts" className="py-32 bg-[#030303] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff4d00]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,77,0,0.05)_0%,_transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff4d00] text-sm font-medium tracking-wider uppercase mb-4 block">
            Planetary Science
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mars at a Glance
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Click on any fact to learn more about what makes the Red Planet unique in our solar system.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {MARS_FACTS.map((fact, i) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <FactCard 
                fact={fact}
                isActive={activeId === fact.id}
                onClick={() => setActiveId(activeId === fact.id ? null : fact.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
