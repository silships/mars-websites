'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Wifi, AlertTriangle, CheckCircle2 } from 'lucide-react';

// Mars rotating planet component
const MarsPlanet: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#ff4d00]/30 via-[#ff4d00]/10 to-transparent blur-3xl" />
      
      {/* Planet */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #e27b58 0%, #cf4520 30%, #8b2500 70%, #3d1000 100%)',
          boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.6), inset 10px 10px 40px rgba(255,200,150,0.2)',
        }}
      >
        {/* Surface features */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Polar cap */}
        <div 
          className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-8 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%)',
          }}
        />
      </motion.div>
      
      {/* Orbit ring */}
      <div className="absolute inset-[-20%] border border-[#ff4d00]/20 rounded-full" />
      <div className="absolute inset-[-40%] border border-[#ff4d00]/10 rounded-full" />
    </div>
  );
};

// Status indicator
const StatusIndicator: React.FC<{ status: 'online' | 'warning' | 'offline'; label: string }> = ({ status, label }) => {
  const colors = {
    online: '#22c55e',
    warning: '#eab308',
    offline: '#ef4444',
  };
  
  return (
    <div className="flex items-center gap-2">
      <span 
        className="w-2 h-2 rounded-full animate-pulse"
        style={{ backgroundColor: colors[status] }}
      />
      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
        {label}
      </span>
    </div>
  );
};

// Live clock
const MissionClock: React.FC = () => {
  const [time, setTime] = useState({ utc: '', sol: 0, localMars: '' });
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.toISOString().split('T')[1].split('.')[0];
      
      // Simulate Mars sol (approximately 1 sol = 24h 37m)
      const msSinceEpoch = now.getTime();
      const solsSinceLanding = Math.floor(msSinceEpoch / (24 * 60 * 60 * 1000 * 1.0275)) % 1000 + 3847;
      
      // Mars local time (simplified)
      const marsHour = (now.getUTCHours() + 3) % 24;
      const marsMin = now.getUTCMinutes();
      const localMars = `${marsHour.toString().padStart(2, '0')}:${marsMin.toString().padStart(2, '0')}`;
      
      setTime({ utc, sol: solsSinceLanding, localMars });
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      <div>
        <div className="font-mono text-2xl text-white">{time.utc}</div>
        <div className="text-xs text-zinc-500 uppercase">UTC</div>
      </div>
      <div>
        <div className="font-mono text-2xl text-[#ff4d00]">SOL {time.sol}</div>
        <div className="text-xs text-zinc-500 uppercase">Mission Day</div>
      </div>
      <div>
        <div className="font-mono text-2xl text-white">{time.localMars}</div>
        <div className="text-xs text-zinc-500 uppercase">Mars Local</div>
      </div>
    </div>
  );
};

export const MissionControlHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030303]">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 77, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 77, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Scan line animation */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff4d00]/50 to-transparent"
        initial={{ top: 0 }}
        animate={{ top: '100%' }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mission Info */}
          <div>
            {/* Top bar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6 mb-8"
            >
              <StatusIndicator status="online" label="Signal Lock" />
              <StatusIndicator status="online" label="Telemetry" />
              <StatusIndicator status="warning" label="Dust Storm" />
            </motion.div>
            
            {/* Mission badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#ff4d00]/30 bg-[#ff4d00]/5 mb-6"
            >
              <Radio className="w-4 h-4 text-[#ff4d00]" />
              <span className="font-mono text-sm text-[#ff4d00] uppercase tracking-wider">
                Live Mission Feed
              </span>
            </motion.div>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className="text-white">MISSION</span>
              <br />
              <span className="text-[#ff4d00]">CONTROL</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-zinc-400 mb-8 max-w-lg"
            >
              Real-time monitoring of Mars exploration missions. 
              Live telemetry, rover positions, and atmospheric data 
              from the Red Planet.
            </motion.p>
            
            {/* Mission clock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <MissionClock />
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <button className="px-6 py-3 bg-[#ff4d00] text-black font-bold uppercase tracking-wider rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                Connect to Feed
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 text-white font-mono uppercase tracking-wider rounded-lg hover:bg-white/10 transition-colors">
                View Archives
              </button>
            </motion.div>
          </div>
          
          {/* Right: Mars visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center"
          >
            <MarsPlanet />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom status bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-xs font-mono text-zinc-400">PERSEVERANCE: NOMINAL</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-xs font-mono text-zinc-400">INGENUITY: STANDBY</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-mono text-zinc-400">CURIOSITY: LOW POWER</span>
            </div>
          </div>
          <div className="text-xs font-mono text-zinc-600">
            SIGNAL DELAY: 12m 34s | BANDWIDTH: 2.1 Mbps
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionControlHero;
