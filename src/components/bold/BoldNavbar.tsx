'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function BoldNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 500);
  });
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black text-white hover:text-[#ff4d00] transition-colors"
          >
            MARS
          </button>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'stats', label: 'POWER' },
              { id: 'features', label: 'FEATURES' },
              { id: 'comparison', label: 'VS EARTH' },
              { id: 'timeline', label: 'STORY' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-bold text-zinc-400 hover:text-white transition-colors tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* CTA */}
          <a 
            href="https://www.spacex.com/human-spaceflight/mars/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#ff4d00] hover:bg-[#ff6b2d] text-sm font-bold tracking-wider transition-all"
          >
            JOIN ME
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
