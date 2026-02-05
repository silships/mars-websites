'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'facts', label: 'Facts' },
  { id: 'explore', label: 'Surface' },
  { id: 'water', label: 'Water' },
  { id: 'missions', label: 'Missions' },
  { id: 'quiz', label: 'Quiz' },
];

export default function LearnNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.05]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff4d00] to-[#ff7b3d] flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xl">🔴</span>
              </div>
              <span className="font-bold text-lg text-white">
                Learn<span className="text-[#ff4d00]">Mars</span>
              </span>
            </a>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* CTA button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('quiz')}
                className="px-5 py-2 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full text-sm font-medium transition-all"
              >
                Take Quiz
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl md:hidden overflow-hidden border-b border-white/[0.05]"
      >
        <div className="p-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full px-4 py-3 text-left text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('quiz')}
            className="w-full px-4 py-3 mt-2 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-lg font-medium transition-all text-center"
          >
            Take Quiz
          </button>
        </div>
      </motion.div>
    </>
  );
}
