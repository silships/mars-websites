'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PremiumFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  
  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.03]);
  const textY = useTransform(scrollYProgress, [0.5, 1], [100, 0]);

  return (
    <footer ref={containerRef} className="bg-[#050504] border-t border-zinc-900/50 relative overflow-hidden">
      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-24">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-extralight text-white mb-6">Mars Program</p>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
                The greatest journey in human history begins with a single step. 
                Join us in writing the next chapter.
              </p>
              
              {/* Status indicator */}
              <div className="mt-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500/80 rounded-full animate-pulse" />
                <span className="text-[10px] tracking-[0.3em] text-zinc-600">PROGRAM ACTIVE</span>
              </div>
            </motion.div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] text-zinc-700 mb-6">PROGRAM</p>
            <ul className="space-y-4">
              {['Mission', 'Technology', 'Timeline', 'Safety'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.3em] text-zinc-700 mb-6">RESOURCES</p>
            <ul className="space-y-4">
              {['FAQ', 'Press', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] text-zinc-700 mb-6">UPDATES</p>
            <p className="text-sm text-zinc-600 mb-4">
              Receive mission updates and program news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 bg-transparent border border-zinc-800 text-white text-sm placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors"
              />
              <button className="px-4 py-3 border border-zinc-800 border-l-0 text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-zinc-900/50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-700 tracking-wider">
            © 2026 MARS PROGRAM. THE FUTURE BELONGS TO THOSE WHO REACH FOR IT.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-zinc-700 hover:text-zinc-500 transition-colors tracking-wider">PRIVACY</a>
            <a href="#" className="text-[10px] text-zinc-700 hover:text-zinc-500 transition-colors tracking-wider">TERMS</a>
            <a href="#" className="text-[10px] text-zinc-700 hover:text-zinc-500 transition-colors tracking-wider">LEGAL</a>
          </div>
        </div>
      </div>
      
      {/* Giant MARS text */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.p
          className="text-[30vw] font-extralight text-white whitespace-nowrap select-none tracking-tight"
          style={{ opacity: textOpacity, y: textY }}
        >
          MARS
        </motion.p>
        
        {/* Gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050504] via-transparent to-[#050504]" />
      </div>
      
      {/* Final line */}
      <div className="text-center pb-8">
        <p className="text-[10px] text-zinc-800 tracking-[0.4em]">
          AD ASTRA PER ASPERA
        </p>
      </div>
    </footer>
  );
}
