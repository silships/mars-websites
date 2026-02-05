'use client';

import dynamic from 'next/dynamic';

// Dynamic imports for performance
const CinematicHero = dynamic(() => import('@/components/premium/CinematicHero'), { 
  ssr: false,
  loading: () => (
    <div className="h-screen bg-[#080604] flex items-center justify-center">
      <div className="w-px h-16 bg-gradient-to-b from-zinc-800 to-transparent animate-pulse" />
    </div>
  ),
});

const EditorialSection = dynamic(() => import('@/components/premium/EditorialSection'), { ssr: false });
const JourneyPhases = dynamic(() => import('@/components/premium/JourneyPhases'), { ssr: false });
const FullBleedSection = dynamic(() => import('@/components/premium/FullBleedSection'), { ssr: false });
const TestimonialSection = dynamic(() => import('@/components/premium/TestimonialSection'), { ssr: false });
const ReserveSection = dynamic(() => import('@/components/premium/ReserveSection'), { ssr: false });
const PremiumFooter = dynamic(() => import('@/components/premium/PremiumFooter'), { ssr: false });

export default function Home2() {
  return (
    <main className="min-h-screen bg-[#080604] text-white antialiased selection:bg-white selection:text-black">
      <CinematicHero />
      <EditorialSection />
      <JourneyPhases />
      <FullBleedSection />
      <TestimonialSection />
      <ReserveSection />
      <PremiumFooter />
    </main>
  );
}
