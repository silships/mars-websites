'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Camera, Wrench } from 'lucide-react';

interface Rover {
  id: string;
  name: string;
  status: 'active' | 'standby' | 'offline';
  position: { x: number; y: number };
  heading: number;
  lastContact: string;
  distanceTraveled: number;
}

const rovers: Rover[] = [
  {
    id: 'perseverance',
    name: 'Perseverance',
    status: 'active',
    position: { x: 45, y: 35 },
    heading: 127,
    lastContact: '2 min ago',
    distanceTraveled: 28.4,
  },
  {
    id: 'curiosity',
    name: 'Curiosity',
    status: 'active',
    position: { x: 65, y: 55 },
    heading: 45,
    lastContact: '5 min ago',
    distanceTraveled: 31.2,
  },
  {
    id: 'ingenuity',
    name: 'Ingenuity',
    status: 'standby',
    position: { x: 48, y: 38 },
    heading: 90,
    lastContact: '1 hour ago',
    distanceTraveled: 17.8,
  },
];

const RoverMarker: React.FC<{ rover: Rover; isSelected: boolean; onClick: () => void }> = ({ 
  rover, 
  isSelected,
  onClick 
}) => {
  const statusColors = {
    active: '#22c55e',
    standby: '#eab308',
    offline: '#ef4444',
  };
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ left: `${rover.position.x}%`, top: `${rover.position.y}%` }}
      whileHover={{ scale: 1.2 }}
      onClick={onClick}
    >
      {/* Ping animation */}
      {rover.status === 'active' && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: statusColors[rover.status] }}
          animate={{ scale: [1, 2, 2], opacity: [0.5, 0.2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      
      {/* Marker */}
      <div 
        className={`relative w-4 h-4 rounded-full border-2 ${isSelected ? 'ring-2 ring-offset-2 ring-offset-black' : ''}`}
        style={{ 
          backgroundColor: statusColors[rover.status],
          borderColor: 'white',
          boxShadow: `0 0 10px ${statusColors[rover.status]}`,
        }}
      />
      
      {/* Label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap">
        <span className="text-xs font-mono text-white bg-black/60 px-2 py-1 rounded">
          {rover.name}
        </span>
      </div>
    </motion.div>
  );
};

const RoverDetails: React.FC<{ rover: Rover }> = ({ rover }) => {
  const statusColors = {
    active: '#22c55e',
    standby: '#eab308',
    offline: '#ef4444',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-4 rounded-xl bg-white/5 border border-white/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: statusColors[rover.status] }}
        />
        <h4 className="font-bold">{rover.name}</h4>
        <span 
          className="text-xs font-mono uppercase px-2 py-0.5 rounded"
          style={{ 
            backgroundColor: `${statusColors[rover.status]}20`,
            color: statusColors[rover.status],
          }}
        >
          {rover.status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-zinc-500 text-xs uppercase mb-1">Position</div>
          <div className="font-mono">{rover.position.x.toFixed(1)}°N, {rover.position.y.toFixed(1)}°E</div>
        </div>
        <div>
          <div className="text-zinc-500 text-xs uppercase mb-1">Heading</div>
          <div className="font-mono flex items-center gap-1">
            <Navigation className="w-3 h-3" style={{ transform: `rotate(${rover.heading}deg)` }} />
            {rover.heading}°
          </div>
        </div>
        <div>
          <div className="text-zinc-500 text-xs uppercase mb-1">Last Contact</div>
          <div className="font-mono">{rover.lastContact}</div>
        </div>
        <div>
          <div className="text-zinc-500 text-xs uppercase mb-1">Total Distance</div>
          <div className="font-mono">{rover.distanceTraveled} km</div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10 flex gap-2">
        <button className="flex-1 py-2 text-xs font-mono uppercase rounded bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-1">
          <Camera className="w-3 h-3" />
          Images
        </button>
        <button className="flex-1 py-2 text-xs font-mono uppercase rounded bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-1">
          <Wrench className="w-3 h-3" />
          Diagnostics
        </button>
      </div>
    </motion.div>
  );
};

export const RoverMap: React.FC = () => {
  const [selectedRover, setSelectedRover] = useState<string | null>('perseverance');
  const selected = rovers.find(r => r.id === selectedRover);
  
  return (
    <section className="relative py-20 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded border border-[#ff4d00]/30 bg-[#ff4d00]/5 text-[#ff4d00] text-sm font-mono uppercase tracking-wider mb-6">
            Surface Operations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-white">Rover</span>{' '}
            <span className="text-[#ff4d00]">Positions</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <div 
              className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
              style={{
                background: `
                  radial-gradient(circle at 30% 40%, rgba(207, 69, 32, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 70% 60%, rgba(139, 37, 0, 0.3) 0%, transparent 50%),
                  linear-gradient(135deg, #2d1000 0%, #1a0a00 50%, #0d0500 100%)
                `,
              }}
            >
              {/* Grid overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 77, 0, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 77, 0, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '10% 10%',
                }}
              />
              
              {/* Terrain texture */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Rover markers */}
              {rovers.map(rover => (
                <RoverMarker
                  key={rover.id}
                  rover={rover}
                  isSelected={selectedRover === rover.id}
                  onClick={() => setSelectedRover(rover.id)}
                />
              ))}
              
              {/* Map legend */}
              <div className="absolute bottom-4 left-4 flex gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-zinc-400">Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-zinc-400">Standby</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-zinc-400">Offline</span>
                </div>
              </div>
              
              {/* Coordinates */}
              <div className="absolute top-4 right-4 font-mono text-xs text-zinc-500">
                JEZERO CRATER REGION
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Active Vehicles
            </h3>
            
            {rovers.map(rover => (
              <motion.button
                key={rover.id}
                onClick={() => setSelectedRover(rover.id)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedRover === rover.id 
                    ? 'bg-[#ff4d00]/10 border-[#ff4d00]/30' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: rover.status === 'active' ? '#22c55e' 
                        : rover.status === 'standby' ? '#eab308' : '#ef4444' 
                    }}
                  />
                  <span className="font-medium">{rover.name}</span>
                  <span className="ml-auto text-xs text-zinc-500">{rover.lastContact}</span>
                </div>
              </motion.button>
            ))}
            
            {selected && <RoverDetails rover={selected} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoverMap;
