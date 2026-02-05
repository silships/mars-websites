'use client';

import { motion } from 'framer-motion';

export default function BoldCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,0,0.15)_0%,_transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,77,0,0.1) 50px, rgba(255,77,0,0.1) 51px),
              repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,77,0,0.1) 50px, rgba(255,77,0,0.1) 51px)
            `,
          }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Pre-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ff4d00] text-xl font-bold tracking-[0.3em] mb-8"
          >
            THE QUESTION ISN'T IF
          </motion.p>
          
          {/* Main statement */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8"
          >
            IT'S <span className="text-[#ff4d00]">WHEN</span>
            <br />
            YOU'LL
            <br />
            <span className="text-[#ff4d00]">JOIN ME</span>
          </motion.h2>
          
          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-zinc-400 mb-16 max-w-2xl mx-auto"
          >
            The bold don't wait. They don't hesitate. 
            They see a red planet and think: home.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a 
              href="https://www.spacex.com/human-spaceflight/mars/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-12 py-6 bg-[#ff4d00] hover:bg-[#ff6b2d] text-xl font-black tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-4"
            >
              CLAIM YOUR SPOT
              <motion.span 
                className="text-2xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a 
              href="https://mars.nasa.gov/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-xl font-black tracking-wider transition-all duration-300"
            >
              STUDY ME FIRST
            </a>
          </motion.div>
        </motion.div>
        
        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-0 right-0 text-zinc-700 text-lg font-bold tracking-widest"
        >
          — MARS, THE BOLD PLANET
        </motion.p>
      </div>
    </section>
  );
}
