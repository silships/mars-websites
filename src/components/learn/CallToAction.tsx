'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#0f0505] to-[#030303]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,0,0.1)_0%,_transparent_60%)]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff4d00]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-6xl mb-6 block">🚀</span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore Further?
          </h2>
          
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Mars awaits. Join millions of space enthusiasts tracking the latest discoveries, 
            mission updates, and breakthroughs in our understanding of the Red Planet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://mars.nasa.gov/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              NASA Mars Exploration
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://www.spacex.com/human-spaceflight/mars/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 hover:bg-white/5 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              SpaceX Mars Program
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
        
        {/* Fun facts ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
        >
          <p className="text-sm text-zinc-500 mb-3">DID YOU KNOW?</p>
          <p className="text-lg text-zinc-300">
            If you could drive a car at highway speeds (100 km/h) from Earth to Mars, 
            it would take you over <span className="text-[#ff4d00] font-bold">250 years</span> to get there!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
