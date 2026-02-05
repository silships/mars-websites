'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="relative">
        <div className="text-5xl md:text-7xl font-black text-white tabular-nums">
          {String(value).padStart(2, '0')}
        </div>
        <div className="absolute -inset-2 bg-[#ff4d00]/20 blur-xl -z-10" />
      </div>
      <p className="text-xs md:text-sm text-zinc-500 mt-2 tracking-widest uppercase">{label}</p>
    </div>
  );
}

function FloatingSpaceship() {
  return (
    <motion.div
      className="absolute right-[10%] top-1/2 -translate-y-1/2 text-8xl md:text-[150px]"
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      🚀
    </motion.div>
  );
}

export default function TravelHero() {
  const launchDate = new Date('2031-06-15');
  const countdown = useCountdown(launchDate);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Animated starfield */}
      <div className="absolute inset-0">
        {mounted && [...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      
      {/* Mars in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] opacity-30">
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #ff6b35 0%, #c41e00 40%, #4a0000 100%)',
            filter: 'blur(2px)',
          }}
        />
      </div>
      
      <FloatingSpaceship />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 bg-[#ff4d00]/10 border border-[#ff4d00]/30 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-bold text-[#ff4d00] tracking-wider">NOW BOOKING 2031 DEPARTURES</span>
        </motion.div>
        
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6"
        >
          YOUR TICKET TO
          <br />
          <span className="text-[#ff4d00]">MARS</span> IS HERE
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 max-w-xl mb-12"
        >
          7 months. 225 million kilometers. One giant leap for your bucket list.
          <span className="text-white font-bold"> Are you ready?</span>
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <a 
            href="#book"
            className="group px-8 py-4 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3"
          >
            <span>Book Your Seat</span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="#journey"
            className="px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/5"
          >
            View The Journey
          </a>
        </motion.div>
        
        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-zinc-500 tracking-widest mb-4">NEXT LAUNCH WINDOW</p>
          <div className="flex gap-6 md:gap-10">
            <CountdownUnit value={countdown.days} label="Days" />
            <div className="text-4xl md:text-6xl text-zinc-700 font-light">:</div>
            <CountdownUnit value={countdown.hours} label="Hours" />
            <div className="text-4xl md:text-6xl text-zinc-700 font-light">:</div>
            <CountdownUnit value={countdown.minutes} label="Minutes" />
            <div className="text-4xl md:text-6xl text-zinc-700 font-light hidden md:block">:</div>
            <div className="hidden md:block">
              <CountdownUnit value={countdown.seconds} label="Seconds" />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-zinc-600 text-sm tracking-widest">SCROLL TO EXPLORE</p>
      </motion.div>
    </section>
  );
}
