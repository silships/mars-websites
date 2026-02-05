'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Mission Control' },
  { id: 'telemetry', label: 'Telemetry' },
  { id: 'rovers', label: 'Rovers' },
  { id: 'missions', label: 'History' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-2' : 'top-4'
        }`}
      >
        <div 
          className={`flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-xl transition-all duration-300 ${
            isScrolled ? 'bg-black/80 border border-white/10' : 'bg-white/5 border border-white/10'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 px-4">
            <Rocket className="w-5 h-5 text-[#ff4d00]" />
            <span className="font-bold text-white hidden sm:block">MARS</span>
          </div>
          
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          
          {/* Desktop nav items */}
          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          
          {/* CTA */}
          <button className="px-4 py-2 bg-[#ff4d00] text-black text-sm font-bold rounded-full hover:scale-105 transition-transform hidden sm:block">
            Join Mission
          </button>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 sm:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-4 right-4 z-50 p-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 sm:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
            <button className="mt-2 px-4 py-3 bg-[#ff4d00] text-black font-bold rounded-lg">
              Join Mission
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
