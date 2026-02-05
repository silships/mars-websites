'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ASCII Art Mars
const MARS_ASCII = `
                    ████████████                    
                ████████████████████                
            ██████████████████████████              
          ████████████░░██████████████████          
        ██████████░░░░░░░░████████████████          
      ████████████░░░░░░░░░░██████████████████      
      ██████████░░░░░░░░░░░░░░████████████████      
    ████████████░░░░░░░░░░░░░░██████████████████    
    ██████████░░░░░░░░░░░░░░░░░░████████████████    
    ██████████░░░░░░░░░░░░░░░░░░████████████████    
    ████████░░░░░░░░░░░░░░░░░░░░░░██████████████    
    ████████░░░░░░░░░░░░░░░░░░░░████████████████    
      ██████████░░░░░░░░░░░░░░██████████████████    
      ████████████░░░░░░░░░░████████████████        
        ██████████████████████████████████          
          ██████████████████████████████            
            ████████████████████████                
                ████████████████                    
`;

// Boot messages
const BOOT_MESSAGES = [
  { delay: 0, text: '[BOOT] Initializing Mars Communication Array...' },
  { delay: 400, text: '[BOOT] Loading Deep Space Network protocols...' },
  { delay: 800, text: '[NET] Establishing connection to Goldstone DSN...' },
  { delay: 1200, text: '[NET] Signal acquired: 2.1 GHz downlink active' },
  { delay: 1600, text: '[SYS] Loading telemetry decoders...' },
  { delay: 2000, text: '[SYS] Perseverance rover systems: ONLINE' },
  { delay: 2400, text: '[SYS] Curiosity rover systems: ONLINE' },
  { delay: 2800, text: '[SYS] Ingenuity helicopter: STANDBY' },
  { delay: 3200, text: '[OK] All systems nominal' },
  { delay: 3600, text: '[OK] Mars Explorer Terminal v2.4.1 ready' },
  { delay: 4000, text: '' },
  { delay: 4200, text: 'Type "help" for available commands' },
];

// Typing effect hook
const useTypewriter = (text: string, speed: number = 30, startDelay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);
  
  return { displayText, isComplete };
};

// Terminal window component
const TerminalWindow: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
}> = ({ title, children, className = '', color = '#ff4d00' }) => (
  <div className={`rounded-lg overflow-hidden border border-white/10 bg-black/80 backdrop-blur ${className}`}>
    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-white/5">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <span className="font-mono text-xs text-zinc-400">{title}</span>
      <div className="ml-auto flex items-center gap-2">
        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
        <span className="font-mono text-xs" style={{ color }}>LIVE</span>
      </div>
    </div>
    <div className="p-4 font-mono text-sm">
      {children}
    </div>
  </div>
);

// Boot sequence component
const BootSequence: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  
  useEffect(() => {
    BOOT_MESSAGES.forEach((msg, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
        if (index === BOOT_MESSAGES.length - 1) {
          setTimeout(onComplete, 1000);
        }
      }, msg.delay);
    });
  }, [onComplete]);
  
  return (
    <div className="font-mono text-sm space-y-1">
      {BOOT_MESSAGES.slice(0, visibleLines).map((msg, i) => (
        <div 
          key={i} 
          className={`
            ${msg.text.includes('[OK]') ? 'text-green-400' : ''}
            ${msg.text.includes('[BOOT]') ? 'text-cyan-400' : ''}
            ${msg.text.includes('[NET]') ? 'text-purple-400' : ''}
            ${msg.text.includes('[SYS]') ? 'text-yellow-400' : ''}
            ${!msg.text.startsWith('[') ? 'text-zinc-400' : ''}
          `}
        >
          {msg.text}
        </div>
      ))}
      <span className="inline-block w-2 h-4 bg-[#ff4d00] animate-pulse" />
    </div>
  );
};

// Command line input
const CommandLine: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const commands: Record<string, string> = {
    help: `Available commands:
  status    - Show rover status
  weather   - Current Mars weather
  position  - Rover coordinates
  sol       - Current mission sol
  uplink    - Send command to rover
  clear     - Clear terminal`,
    status: `PERSEVERANCE: ████████████████░░░░ 82% POWER
CURIOSITY:    ██████████████░░░░░░ 71% POWER  
INGENUITY:    ████████░░░░░░░░░░░░ 43% STANDBY`,
    weather: `MARS WEATHER REPORT - SOL 1247
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Temperature: -63°C (High: -12°C)
Pressure:    610 Pa
Wind:        7.2 m/s NNW
UV Index:    MODERATE
Dust:        CLEAR`,
    position: `ROVER POSITIONS (Areocentric)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Perseverance: 18.4447°N, 77.4508°E
  Location: Jezero Crater
  Elevation: -2.5 km

Curiosity: 4.5895°S, 137.4417°E  
  Location: Gale Crater
  Elevation: -4.5 km`,
    sol: `Current Mission Sol: 1247
Earth Date: February 4, 2026
Mars Year: 37
Solar Longitude: 142.3°`,
    uplink: `[WARN] Uplink requires authorization
Enter credentials or type 'abort'`,
    clear: 'CLEAR',
  };
  
  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === 'clear') {
      setHistory([]);
    } else {
      const output = commands[trimmed] || `Command not found: ${cmd}\nType 'help' for available commands`;
      setHistory(prev => [...prev, { cmd, output }]);
    }
    setInput('');
  };
  
  return (
    <div className="space-y-2" onClick={() => inputRef.current?.focus()}>
      {history.map((item, i) => (
        <div key={i}>
          <div className="text-[#ff4d00]">
            <span className="text-zinc-500">mars@explorer</span>
            <span className="text-zinc-400">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-zinc-400">$ </span>
            {item.cmd}
          </div>
          <pre className="text-zinc-300 whitespace-pre-wrap mt-1 mb-2">{item.output}</pre>
        </div>
      ))}
      <div className="flex items-center">
        <span className="text-zinc-500">mars@explorer</span>
        <span className="text-zinc-400">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-zinc-400">$ </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)}
          className="flex-1 bg-transparent outline-none text-[#ff4d00] caret-[#ff4d00]"
          autoFocus
        />
        <span className="w-2 h-4 bg-[#ff4d00] animate-pulse" />
      </div>
    </div>
  );
};

// Live data feed
const LiveDataFeed: React.FC = () => {
  const [data, setData] = useState<string[]>([]);
  
  useEffect(() => {
    const messages = [
      'RX: Telemetry packet received [2048 bytes]',
      'TX: Heartbeat signal acknowledged',
      'RX: Image data chunk 47/128',
      'SYS: Memory optimization complete',
      'RX: Atmospheric sensor reading',
      'TX: Navigation waypoint confirmed',
      'RX: Wheel encoder telemetry',
      'SYS: Cache flush completed',
      'RX: Solar panel voltage: 28.4V',
      'TX: Science sequence initiated',
    ];
    
    const interval = setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
      setData(prev => [...prev.slice(-12), `[${timestamp}] ${msg}`]);
    }, 800);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="space-y-0.5 text-xs">
      {data.map((line, i) => (
        <div 
          key={i} 
          className={`
            ${line.includes('RX:') ? 'text-green-400' : ''}
            ${line.includes('TX:') ? 'text-cyan-400' : ''}
            ${line.includes('SYS:') ? 'text-yellow-400' : ''}
          `}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

// System metrics
const SystemMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState({
    cpu: 34,
    mem: 56,
    net: 2.1,
    lat: 847,
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.max(10, Math.min(90, metrics.cpu + (Math.random() - 0.5) * 10)),
        mem: Math.max(30, Math.min(80, metrics.mem + (Math.random() - 0.5) * 5)),
        net: Math.max(0.5, Math.min(5, metrics.net + (Math.random() - 0.5) * 0.5)),
        lat: Math.max(700, Math.min(1000, metrics.lat + (Math.random() - 0.5) * 50)),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [metrics]);
  
  const bar = (value: number, max: number, color: string) => {
    const filled = Math.round((value / max) * 20);
    return (
      <span style={{ color }}>
        {'█'.repeat(filled)}
        <span className="text-zinc-700">{'░'.repeat(20 - filled)}</span>
      </span>
    );
  };
  
  return (
    <div className="space-y-2 text-xs">
      <div>CPU  {bar(metrics.cpu, 100, '#22c55e')} {metrics.cpu.toFixed(0)}%</div>
      <div>MEM  {bar(metrics.mem, 100, '#3b82f6')} {metrics.mem.toFixed(0)}%</div>
      <div>NET  {bar(metrics.net, 5, '#a855f7')} {metrics.net.toFixed(1)} Mbps</div>
      <div>LAT  {bar(metrics.lat, 1000, '#eab308')} {metrics.lat.toFixed(0)}s</div>
    </div>
  );
};

export const TerminalHero: React.FC = () => {
  const [booted, setBooted] = useState(false);
  
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      {/* Scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)',
        }}
      />
      
      {/* CRT glow effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center justify-between"
        >
          <div className="font-mono">
            <span className="text-[#ff4d00] text-xl font-bold">MARS://EXPLORER</span>
            <span className="text-zinc-500 text-sm ml-4">v2.4.1</span>
          </div>
          <div className="font-mono text-xs text-zinc-500">
            DSN: GOLDSTONE | SIGNAL: LOCKED | DELAY: 12m 34s
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          {!booted ? (
            <motion.div
              key="boot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TerminalWindow title="boot.log" className="max-w-2xl">
                {/* ASCII Mars */}
                <pre className="text-[#ff4d00] text-[6px] leading-[6px] mb-4 opacity-60">
                  {MARS_ASCII}
                </pre>
                <BootSequence onComplete={() => setBooted(true)} />
              </TerminalWindow>
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            >
              {/* Main terminal */}
              <div className="lg:col-span-2">
                <TerminalWindow title="mars@explorer:~" className="h-[500px] overflow-auto">
                  <CommandLine />
                </TerminalWindow>
              </div>
              
              {/* Side panels */}
              <div className="space-y-4">
                <TerminalWindow title="system.metrics" color="#22c55e">
                  <SystemMetrics />
                </TerminalWindow>
                
                <TerminalWindow title="data.stream" color="#3b82f6" className="h-[280px] overflow-hidden">
                  <LiveDataFeed />
                </TerminalWindow>
              </div>
              
              {/* Bottom panels */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <TerminalWindow title="rover.status" color="#eab308">
                  <pre className="text-xs text-zinc-300">{`
┌─────────────────────────────┐
│  PERSEVERANCE    [ACTIVE]   │
│  ████████████░░░░  82%      │
│  Jezero Crater              │
├─────────────────────────────┤
│  CURIOSITY       [ACTIVE]   │
│  ██████████░░░░░░  71%      │
│  Gale Crater                │
├─────────────────────────────┤
│  INGENUITY       [STANDBY]  │
│  ██████░░░░░░░░░░  43%      │
│  Near Perseverance          │
└─────────────────────────────┘`}
                  </pre>
                </TerminalWindow>
                
                <TerminalWindow title="weather.mars" color="#a855f7">
                  <pre className="text-xs text-zinc-300">{`
╔═══════════════════════════════╗
║   MARS ATMOSPHERIC DATA       ║
╠═══════════════════════════════╣
║  Temp:     -63°C              ║
║  High:     -12°C              ║
║  Low:      -89°C              ║
║  Pressure: 610 Pa             ║
║  Wind:     7.2 m/s NNW        ║
║  Dust:     ▓▓░░░░░░  CLEAR    ║
╚═══════════════════════════════╝`}
                  </pre>
                </TerminalWindow>
                
                <TerminalWindow title="mission.log" color="#00f3ff">
                  <div className="text-xs space-y-1">
                    <div className="text-green-400">[14:32] Sample collection complete</div>
                    <div className="text-cyan-400">[14:28] Navigation to site B7</div>
                    <div className="text-yellow-400">[14:15] Dust devil detected 2km N</div>
                    <div className="text-zinc-400">[14:02] Calibration sequence done</div>
                    <div className="text-zinc-400">[13:45] Solar array cleaned</div>
                    <div className="text-zinc-500">[13:30] Standby mode exit</div>
                  </div>
                </TerminalWindow>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TerminalHero;
