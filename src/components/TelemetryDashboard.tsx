'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Wind, 
  Gauge, 
  Radio,
  Battery,
  Sun,
  Cpu,
  HardDrive
} from 'lucide-react';

// Simulated telemetry hook
const useSimulatedTelemetry = () => {
  const [data, setData] = useState({
    temperature: -60,
    pressure: 610,
    windSpeed: 7.2,
    solarFlux: 589,
    batteryLevel: 78,
    cpuUsage: 34,
    memoryUsage: 56,
    signalStrength: 92,
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        pressure: Math.max(580, Math.min(640, prev.pressure + (Math.random() - 0.5) * 5)),
        windSpeed: Math.max(0, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 1)),
        solarFlux: Math.max(400, Math.min(700, prev.solarFlux + (Math.random() - 0.5) * 20)),
        batteryLevel: Math.max(20, Math.min(100, prev.batteryLevel + (Math.random() - 0.5) * 0.5)),
        cpuUsage: Math.max(10, Math.min(90, prev.cpuUsage + (Math.random() - 0.5) * 5)),
        memoryUsage: Math.max(30, Math.min(80, prev.memoryUsage + (Math.random() - 0.5) * 2)),
        signalStrength: Math.max(60, Math.min(100, prev.signalStrength + (Math.random() - 0.5) * 3)),
      }));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return data;
};

// Rolling history hook
const useRollingHistory = (value: number, maxLength = 30) => {
  const [history, setHistory] = useState<number[]>(Array(maxLength).fill(value));
  
  useEffect(() => {
    setHistory(prev => [...prev.slice(1), value]);
  }, [value]);
  
  return history;
};

// Mini sparkline component
const Sparkline: React.FC<{ data: number[]; color: string; height?: number }> = ({ 
  data, 
  color, 
  height = 40 
}) => {
  const width = 120;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  const path = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  
  return (
    <svg width={width} height={height} className="opacity-60">
      <defs>
        <linearGradient id={`sparkline-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${path} L ${width} ${height} L 0 ${height} Z`}
        fill={`url(#sparkline-${color})`}
      />
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Arc gauge component
const ArcGauge: React.FC<{
  value: number;
  max: number;
  label: string;
  unit: string;
  color: string;
}> = ({ value, max, label, unit, color }) => {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.75;
  const strokeDashoffset = arcLength - (arcLength * percentage) / 100;
  
  return (
    <div className="relative w-32 h-32">
      <svg viewBox="0 0 120 120" className="w-full h-full" style={{ transform: 'rotate(135deg)' }}>
        <circle
          cx="60" cy="60" r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          strokeDasharray={arcLength}
        />
        <circle
          cx="60" cy="60" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={arcLength}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-2xl font-bold">{Math.floor(value)}</span>
        <span className="text-xs text-zinc-500">{unit}</span>
        <span className="text-xs text-zinc-400 mt-1">{label}</span>
      </div>
    </div>
  );
};

// Telemetry card
const TelemetryCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
  unit: string;
  color: string;
  history?: number[];
  trend?: 'up' | 'down' | 'stable';
}> = ({ icon, label, value, unit, color, history, trend }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: `${color}50` }}
      className="p-4 rounded-xl bg-white/5 border border-white/10 transition-colors"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-lg bg-white/5" style={{ color }}>
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-mono ${
            trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-zinc-400'
          }`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'}
          </span>
        )}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="font-mono text-2xl font-bold">
            {typeof value === 'number' ? value.toFixed(1) : value}
            <span className="text-sm text-zinc-500 ml-1">{unit}</span>
          </div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider">{label}</div>
        </div>
        {history && <Sparkline data={history} color={color} height={30} />}
      </div>
    </motion.div>
  );
};

// Terminal log component
const MissionLog: React.FC = () => {
  const [logs, setLogs] = useState<Array<{ time: string; level: string; msg: string }>>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const messages = [
    { level: 'INFO', msg: 'Telemetry sync completed' },
    { level: 'INFO', msg: 'Solar panel orientation adjusted' },
    { level: 'WARN', msg: 'Dust accumulation detected on solar array' },
    { level: 'INFO', msg: 'Memory optimization routine executed' },
    { level: 'INFO', msg: 'Navigation waypoint updated' },
    { level: 'SUCCESS', msg: 'Sample analysis complete' },
    { level: 'INFO', msg: 'Atmospheric pressure recorded' },
    { level: 'WARN', msg: 'Temperature approaching lower threshold' },
    { level: 'INFO', msg: 'Wheel diagnostics: nominal' },
  ];
  
  useEffect(() => {
    const addLog = () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      const time = new Date().toLocaleTimeString();
      setLogs(prev => [...prev.slice(-15), { time, ...msg }]);
    };
    
    addLog();
    const interval = setInterval(addLog, 3000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);
  
  const levelColors: Record<string, string> = {
    INFO: '#3b82f6',
    WARN: '#eab308',
    ERROR: '#ef4444',
    SUCCESS: '#22c55e',
  };
  
  return (
    <div className="rounded-xl bg-black/60 border border-white/10 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="font-mono text-xs text-zinc-500">MISSION_LOG.terminal</span>
      </div>
      <div ref={scrollRef} className="h-64 overflow-auto p-4 font-mono text-xs space-y-1">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-zinc-600 shrink-0">{log.time}</span>
            <span 
              className="shrink-0 font-semibold"
              style={{ color: levelColors[log.level] }}
            >
              [{log.level}]
            </span>
            <span className="text-zinc-300">{log.msg}</span>
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-[#ff4d00] animate-pulse" />
      </div>
    </div>
  );
};

export const TelemetryDashboard: React.FC = () => {
  const telemetry = useSimulatedTelemetry();
  const tempHistory = useRollingHistory(telemetry.temperature);
  const pressureHistory = useRollingHistory(telemetry.pressure);
  const windHistory = useRollingHistory(telemetry.windSpeed);
  const solarHistory = useRollingHistory(telemetry.solarFlux);
  
  return (
    <section className="relative py-20 px-6 bg-[#030303]">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 77, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 77, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded border border-[#ff4d00]/30 bg-[#ff4d00]/5 text-[#ff4d00] text-sm font-mono uppercase tracking-wider mb-6">
            Live Telemetry
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-white">Real-Time</span>{' '}
            <span className="text-[#ff4d00]">Mission Data</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Atmospheric data */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <TelemetryCard
                icon={<Thermometer className="w-5 h-5" />}
                label="Surface Temperature"
                value={telemetry.temperature}
                unit="°C"
                color="#ff4d00"
                history={tempHistory}
                trend={telemetry.temperature > -55 ? 'up' : 'down'}
              />
              <TelemetryCard
                icon={<Gauge className="w-5 h-5" />}
                label="Atmospheric Pressure"
                value={telemetry.pressure}
                unit="Pa"
                color="#00f3ff"
                history={pressureHistory}
              />
              <TelemetryCard
                icon={<Wind className="w-5 h-5" />}
                label="Wind Speed"
                value={telemetry.windSpeed}
                unit="m/s"
                color="#22c55e"
                history={windHistory}
              />
              <TelemetryCard
                icon={<Sun className="w-5 h-5" />}
                label="Solar Irradiance"
                value={telemetry.solarFlux}
                unit="W/m²"
                color="#eab308"
                history={solarHistory}
              />
            </div>
            
            {/* Mission log */}
            <MissionLog />
          </div>
          
          {/* Right: System status */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-6">
                Rover Systems
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ArcGauge
                  value={telemetry.batteryLevel}
                  max={100}
                  label="Battery"
                  unit="%"
                  color="#22c55e"
                />
                <ArcGauge
                  value={telemetry.signalStrength}
                  max={100}
                  label="Signal"
                  unit="%"
                  color="#00f3ff"
                />
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Computer Status
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#ff4d00]" />
                    <span className="text-sm text-zinc-400">CPU</span>
                  </div>
                  <span className="font-mono text-sm">{telemetry.cpuUsage.toFixed(0)}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#ff4d00]"
                    style={{ width: `${telemetry.cpuUsage}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#00f3ff]" />
                    <span className="text-sm text-zinc-400">Memory</span>
                  </div>
                  <span className="font-mono text-sm">{telemetry.memoryUsage.toFixed(0)}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00f3ff]"
                    style={{ width: `${telemetry.memoryUsage}%` }}
                  />
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-[#ff4d00]/10 border border-[#ff4d00]/30">
              <div className="flex items-center gap-3">
                <Radio className="w-5 h-5 text-[#ff4d00]" />
                <div>
                  <div className="text-sm font-medium">Deep Space Network</div>
                  <div className="text-xs text-zinc-400">Connected via Goldstone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemetryDashboard;
