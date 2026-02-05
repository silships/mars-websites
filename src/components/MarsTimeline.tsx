'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Satellite, Camera, Flag } from 'lucide-react';
import GlassCard from './GlassCard';

interface TimelineEvent {
  year: string;
  mission: string;
  agency: string;
  description: string;
  icon: React.ReactNode;
  status: 'success' | 'active' | 'planned';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1965",
    mission: "Mariner 4",
    agency: "NASA",
    description: "First successful flyby of Mars, returned 21 photos",
    icon: <Satellite className="w-5 h-5" />,
    status: "success"
  },
  {
    year: "1976",
    mission: "Viking 1 & 2",
    agency: "NASA",
    description: "First successful landing, conducted biological experiments",
    icon: <Flag className="w-5 h-5" />,
    status: "success"
  },
  {
    year: "1997",
    mission: "Mars Pathfinder",
    agency: "NASA",
    description: "Sojourner rover, first successful Mars rover",
    icon: <Rocket className="w-5 h-5" />,
    status: "success"
  },
  {
    year: "2004",
    mission: "Spirit & Opportunity",
    agency: "NASA",
    description: "Twin rovers explored opposite sides of Mars",
    icon: <Camera className="w-5 h-5" />,
    status: "success"
  },
  {
    year: "2012",
    mission: "Curiosity",
    agency: "NASA",
    description: "Car-sized rover still operating in Gale Crater",
    icon: <Rocket className="w-5 h-5" />,
    status: "active"
  },
  {
    year: "2021",
    mission: "Perseverance",
    agency: "NASA",
    description: "Searching for ancient life, collecting samples",
    icon: <Rocket className="w-5 h-5" />,
    status: "active"
  },
];

const TimelineCard: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const statusColors = {
    success: '#22c55e',
    active: '#ff4d00',
    planned: '#3b82f6'
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
        <GlassCard className="p-6 inline-block" hover>
          <div className="flex items-center gap-3 mb-3" style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}>
            <div 
              className="p-2 rounded-lg bg-white/5"
              style={{ color: statusColors[event.status] }}
            >
              {event.icon}
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-[#ff4d00]">{event.year}</div>
              <div className="text-xs text-zinc-500 uppercase">{event.agency}</div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{event.mission}</h3>
          <p className="text-zinc-400 text-sm">{event.description}</p>
          <div className="mt-3">
            <span 
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-mono uppercase"
              style={{ 
                backgroundColor: `${statusColors[event.status]}20`,
                color: statusColors[event.status],
                border: `1px solid ${statusColors[event.status]}40`
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: statusColors[event.status] }} />
              {event.status}
            </span>
          </div>
        </GlassCard>
      </div>
      
      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div 
          className="w-4 h-4 rounded-full border-2"
          style={{ 
            borderColor: statusColors[event.status],
            backgroundColor: event.status === 'active' ? statusColors[event.status] : 'transparent'
          }}
        />
      </div>
      
      {/* Spacer */}
      <div className="flex-1" />
    </motion.div>
  );
};

export const MarsTimeline: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0505] to-[#050505]" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-sm font-mono uppercase tracking-wider mb-6">
            Mission History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Journey to</span>{' '}
            <span className="text-[#ff4d00]">the Red Planet</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From the first flyby to modern rovers, humanity&apos;s quest to explore Mars 
            spans over 60 years of technological achievement.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff4d00]/30 to-transparent" />
          
          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineCard key={event.mission} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarsTimeline;
