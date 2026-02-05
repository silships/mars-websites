'use client';

import dynamic from 'next/dynamic';

// Dynamic imports for performance
const LearnHero = dynamic(() => import('@/components/learn/LearnHero'), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#030303]">
      <div className="text-center">
        <div className="w-16 h-16 border-2 border-[#ff4d00]/30 border-t-[#ff4d00] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-zinc-400 text-sm">Preparing your journey to Mars...</p>
      </div>
    </div>
  ),
});

const InteractiveFacts = dynamic(() => import('@/components/learn/InteractiveFacts'), { ssr: false });
const SurfaceFeatures = dynamic(() => import('@/components/learn/SurfaceFeatures'), { ssr: false });
const WaterStory = dynamic(() => import('@/components/learn/WaterStory'), { ssr: false });
const ExplorationHistory = dynamic(() => import('@/components/learn/ExplorationHistory'), { ssr: false });
const MarsQuiz = dynamic(() => import('@/components/learn/MarsQuiz'), { ssr: false });
const CallToAction = dynamic(() => import('@/components/learn/CallToAction'), { ssr: false });

import LearnNavbar from '@/components/learn/LearnNavbar';
import LearnFooter from '@/components/learn/LearnFooter';

export default function Home3() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <LearnNavbar />
      
      <section id="hero">
        <LearnHero />
      </section>
      
      <section id="facts">
        <InteractiveFacts />
      </section>
      
      <section id="explore">
        <SurfaceFeatures />
      </section>
      
      <section id="water">
        <WaterStory />
      </section>
      
      <section id="missions">
        <ExplorationHistory />
      </section>
      
      <section id="quiz">
        <MarsQuiz />
      </section>
      
      <CallToAction />
      
      <LearnFooter />
    </main>
  );
}
