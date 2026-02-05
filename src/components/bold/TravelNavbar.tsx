'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function TravelNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-900' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🚀</span>
            <div>
              <span className="text-xl font-black text-white">MARS</span>
              <span className="text-xl font-black text-[#ff4d00]">EXPRESS</span>
            </div>
          </button>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'journey', label: 'The Journey' },
              { id: 'book', label: 'Classes' },
              { id: 'faq', label: 'FAQ' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA */}
          <a 
            href="#book"
            onClick={(e) => { e.preventDefault(); scrollTo('book'); }}
            className="px-6 py-3 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full font-bold text-sm transition-all flex items-center gap-2"
          >
            <span>Book Now</span>
            <span className="hidden sm:inline">→</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
