'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BoardingPass() {
  const [name, setName] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  
  const handleGenerate = () => {
    if (name.trim()) {
      setIsGenerated(true);
    }
  };
  
  return (
    <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#ff4d00] text-sm font-bold tracking-[0.3em] mb-4 block">
            GET A PREVIEW
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            YOUR <span className="text-[#ff4d00]">BOARDING PASS</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Enter your name and see what your Mars boarding pass could look like!
          </p>
        </motion.div>
        
        {/* Name input */}
        {!isGenerated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="flex gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="flex-1 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff4d00] transition-colors"
              />
              <button
                onClick={handleGenerate}
                className="px-8 py-4 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-xl font-bold transition-all"
              >
                Generate
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Boarding Pass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          animate={{ 
            opacity: isGenerated ? 1 : 0.5, 
            scale: isGenerated ? 1 : 0.95,
            rotateX: 0,
          }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            {/* Top section */}
            <div className="bg-[#ff4d00] p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl">🚀</span>
                <div>
                  <p className="text-black/60 text-xs tracking-widest">INTERPLANETARY TRANSIT</p>
                  <p className="text-black font-black text-xl">MARS EXPRESS</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-black/60 text-xs">FLIGHT</p>
                <p className="text-black font-black text-2xl">MX-2031</p>
              </div>
            </div>
            
            {/* Main content */}
            <div className="p-8 grid md:grid-cols-3 gap-8">
              {/* Passenger info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <p className="text-zinc-500 text-xs tracking-widest mb-1">PASSENGER</p>
                  <p className="text-white text-3xl font-black uppercase">
                    {isGenerated ? name : 'YOUR NAME HERE'}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-zinc-500 text-xs tracking-widest mb-1">FROM</p>
                    <p className="text-white text-xl font-bold">EARTH 🌍</p>
                    <p className="text-zinc-500 text-sm">Kennedy Space Center</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-widest mb-1">TO</p>
                    <p className="text-white text-xl font-bold">MARS 🔴</p>
                    <p className="text-zinc-500 text-sm">Jezero Crater Base</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-zinc-500 text-xs tracking-widest mb-1">DATE</p>
                    <p className="text-white font-bold">JUN 15, 2031</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-widest mb-1">GATE</p>
                    <p className="text-white font-bold">LAUNCH PAD 39A</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs tracking-widest mb-1">SEAT</p>
                    <p className="text-white font-bold">DECK 3 / 12A</p>
                  </div>
                </div>
              </div>
              
              {/* QR Code area */}
              <div className="flex flex-col items-center justify-center p-6 bg-zinc-800/50 rounded-2xl">
                <div className="w-32 h-32 bg-white rounded-xl p-2 mb-4">
                  {/* Fake QR code pattern */}
                  <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-[2px]">
                    {[...Array(64)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-500 text-xs tracking-widest">SCAN FOR DETAILS</p>
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="px-8 py-4 border-t border-zinc-800 flex items-center justify-between text-sm">
              <p className="text-zinc-500">CLASS: <span className="text-[#ff4d00] font-bold">EXPLORER</span></p>
              <p className="text-zinc-500">DURATION: <span className="text-white font-bold">7 MONTHS</span></p>
              <p className="text-zinc-500">DISTANCE: <span className="text-white font-bold">225M KM</span></p>
            </div>
          </div>
          
          {/* Decorative ticket stub */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full" />
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full" />
        </motion.div>
        
        {/* Reset button */}
        {isGenerated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => { setIsGenerated(false); setName(''); }}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              Generate another →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
