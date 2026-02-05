'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TravelCTA() {
  const [spotsLeft, setSpotsLeft] = useState(847);
  
  // Fake "spots disappearing" effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotsLeft(prev => Math.max(prev - Math.floor(Math.random() * 3), 100));
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,0,0.2)_0%,_transparent_60%)]" />
        
        {/* Animated stars/particles rushing past (like hyperspeed) */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-white to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10%',
              height: `${50 + Math.random() * 100}px`,
            }}
            animate={{
              top: ['110%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/20 border border-red-500/40 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 font-bold">
            Only <span className="text-white">{spotsLeft}</span> spots left for 2031!
          </span>
        </motion.div>
        
        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] mb-8"
        >
          STOP <span className="text-[#ff4d00]">DREAMING</span>
          <br />
          START <span className="text-[#ff4d00]">PACKING</span>
        </motion.h2>
        
        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto"
        >
          Your great-great-grandchildren will ask where you were when humanity became multiplanetary.
          <span className="text-white font-bold"> Make sure you have a good answer.</span>
        </motion.p>
        
        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a 
            href="#book"
            className="group px-10 py-5 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full font-black text-xl transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>BOOK NOW</span>
            <motion.span 
              className="text-2xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </a>
          <a 
            href="#journey"
            className="px-10 py-5 border-2 border-white/30 hover:border-white/50 rounded-full font-bold text-xl transition-all duration-300 hover:bg-white/5"
          >
            Learn More
          </a>
        </motion.div>
        
        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
        >
          <span>✓ Refundable deposit</span>
          <span>✓ Payment plans available</span>
          <span>✓ 24/7 support</span>
          <span>✓ Medical coverage included</span>
        </motion.div>
        
        {/* Fun tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-zinc-700 text-lg font-bold tracking-widest"
        >
          SEE YOU ON THE RED PLANET 🔴
        </motion.p>
      </div>
    </section>
  );
}
