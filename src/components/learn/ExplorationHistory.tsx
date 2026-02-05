'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const MISSIONS = [
  {
    year: 1965,
    name: 'Mariner 4',
    country: '🇺🇸',
    type: 'Flyby',
    status: 'success',
    achievement: 'First successful Mars flyby, returned 21 photos',
    details: 'This mission shattered the romantic notion of Mars having canals and vegetation. The images showed a barren, cratered world.',
  },
  {
    year: 1971,
    name: 'Mariner 9',
    country: '🇺🇸',
    type: 'Orbiter',
    status: 'success',
    achievement: 'First spacecraft to orbit another planet',
    details: 'Mapped 85% of Mars surface, discovered Olympus Mons and Valles Marineris. Operated for nearly a year.',
  },
  {
    year: 1976,
    name: 'Viking 1 & 2',
    country: '🇺🇸',
    type: 'Lander',
    status: 'success',
    achievement: 'First successful Mars landings',
    details: 'Searched for signs of life with inconclusive results. Viking 1 operated for over 6 years, the longest Mars surface mission.',
  },
  {
    year: 1997,
    name: 'Mars Pathfinder',
    country: '🇺🇸',
    type: 'Lander + Rover',
    status: 'success',
    achievement: 'First Mars rover (Sojourner)',
    details: 'Proved that low-cost missions could succeed. Sojourner was the size of a microwave oven and operated for 83 days.',
  },
  {
    year: 2004,
    name: 'Spirit & Opportunity',
    country: '🇺🇸',
    type: 'Rovers',
    status: 'success',
    achievement: 'Found evidence of past water',
    details: 'Designed for 90-day missions, Spirit lasted 6 years and Opportunity an incredible 15 years. Changed our understanding of Mars.',
  },
  {
    year: 2012,
    name: 'Curiosity',
    country: '🇺🇸',
    type: 'Rover',
    status: 'active',
    achievement: 'Found ancient habitable environment',
    details: 'Car-sized rover with a nuclear power source. Still operating today, having traveled over 30 km across Gale Crater.',
  },
  {
    year: 2021,
    name: 'Perseverance',
    country: '🇺🇸',
    type: 'Rover + Helicopter',
    status: 'active',
    achievement: 'Collecting samples for Earth return',
    details: 'Carries Ingenuity, the first aircraft to fly on another planet. Searching for biosignatures in Jezero Crater.',
  },
  {
    year: 2021,
    name: 'Tianwen-1',
    country: '🇨🇳',
    type: 'Orbiter + Rover',
    status: 'active',
    achievement: 'China\'s first Mars mission',
    details: 'Zhurong rover landed successfully in Utopia Planitia, making China the second nation to operate a rover on Mars.',
  },
];

function MissionCard({ mission, isExpanded, onToggle }: { mission: typeof MISSIONS[0]; isExpanded: boolean; onToggle: () => void }) {
  return (
    <motion.div
      layout
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isExpanded ? 'bg-white/[0.05]' : 'bg-white/[0.02] hover:bg-white/[0.04]'
      } border border-white/[0.05]`}
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{mission.country}</span>
            <div>
              <h3 className="text-lg font-bold text-white">{mission.name}</h3>
              <p className="text-sm text-zinc-500">{mission.year}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              mission.status === 'active' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-zinc-500/20 text-zinc-400 border border-zinc-500/30'
            }`}>
              {mission.status === 'active' ? '● Active' : 'Completed'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs bg-[#ff4d00]/20 text-[#ff4d00] border border-[#ff4d00]/30">
              {mission.type}
            </span>
          </div>
        </div>
        
        <p className="text-zinc-300 font-medium mb-2">{mission.achievement}</p>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          className="overflow-hidden"
        >
          <p className="text-zinc-400 pt-4 border-t border-white/10 mt-4">
            {mission.details}
          </p>
        </motion.div>
        
        <div className="flex justify-end mt-4">
          <motion.span 
            className="text-zinc-500 text-sm"
            animate={{ rotate: isExpanded ? 180 : 0 }}
          >
            ▼
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExplorationHistory() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'active'>('all');
  
  const filteredMissions = filter === 'all' 
    ? MISSIONS 
    : MISSIONS.filter(m => m.status === 'active');
  
  return (
    <section className="py-32 bg-gradient-to-b from-[#030303] to-[#0a0505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#ff4d00] text-sm font-medium tracking-wider uppercase mb-4 block">
            60+ Years of Exploration
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Missions to Mars
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            From the first flybys to today's rovers and helicopters, explore the history 
            of humanity's quest to understand the Red Planet.
          </p>
          
          {/* Filter buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#ff4d00] text-white'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10'
              }`}
            >
              All Missions
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'active'
                  ? 'bg-green-500 text-white'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10'
              }`}
            >
              Currently Active
            </button>
          </div>
        </motion.div>
        
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: '50+', label: 'Total Missions' },
            { value: '18', label: 'Successful Landings' },
            { value: '6', label: 'Active Spacecraft' },
            { value: '5', label: 'Countries Involved' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <p className="text-3xl font-bold text-[#ff4d00]">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Mission cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredMissions.map((mission, i) => (
            <motion.div
              key={mission.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <MissionCard 
                mission={mission}
                isExpanded={expandedId === mission.name}
                onToggle={() => setExpandedId(expandedId === mission.name ? null : mission.name)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
