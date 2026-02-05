'use client';

import dynamic from 'next/dynamic';

// Terminal Hacker variant (newest!)
const TerminalHero = dynamic(() => import('@/components/TerminalHero'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center font-mono">
        <div className="text-[#ff4d00] text-sm mb-2">INITIALIZING...</div>
        <div className="w-48 h-1 bg-zinc-800 rounded overflow-hidden">
          <div className="h-full bg-[#ff4d00] animate-pulse" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  ),
});

// Mission Control variant
const MissionControlHero = dynamic(() => import('@/components/MissionControlHero'), { ssr: false });
const TelemetryDashboard = dynamic(() => import('@/components/TelemetryDashboard'), { ssr: false });
const RoverMap = dynamic(() => import('@/components/RoverMap'), { ssr: false });

// Original Explorer variant
const MarsHero = dynamic(() => import('@/components/MarsHero'), { ssr: false });
import MarsFacts from '@/components/MarsFacts';
import MarsTimeline from '@/components/MarsTimeline';
import MarsGallery from '@/components/MarsGallery';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Toggle between variants: 'terminal' | 'mission-control' | 'explorer'
const VARIANT = 'terminal';

export default function Home() {
  // Terminal/Hacker variant
  if (VARIANT === 'terminal') {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <TerminalHero />
      </main>
    );
  }
  
  // Mission Control variant
  if (VARIANT === 'mission-control') {
    return (
      <main className="min-h-screen bg-[#030303] text-white">
        <Navbar />
        
        <section id="home">
          <MissionControlHero />
        </section>
        
        <section id="telemetry">
          <TelemetryDashboard />
        </section>
        
        <section id="rovers">
          <RoverMap />
        </section>
        
        <section id="missions">
          <MarsTimeline />
        </section>
        
        <Footer />
      </main>
    );
  }
  
  // Original Explorer variant
  return (
    <main className="min-h-screen bg-[#050505] text-white tech-grid">
      <Navbar />
      
      <section id="home">
        <MarsHero />
      </section>
      
      <section id="facts">
        <MarsFacts />
      </section>
      
      <section id="missions">
        <MarsTimeline />
      </section>
      
      <section id="gallery">
        <MarsGallery />
      </section>
      
      <Footer />
    </main>
  );
}
