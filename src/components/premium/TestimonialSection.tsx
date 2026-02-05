'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote: "This isn't about leaving Earth behind. It's about extending what it means to be human. We're not abandoning our home, we're expanding it.",
    author: "Dr. Sarah Chen",
    title: "Astrophysicist, MIT",
    image: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
  },
  {
    quote: "For the first time in history, we have both the technology and the will to become a multi-planetary species. The window is now.",
    author: "James Morrison",
    title: "Former NASA Administrator",
    image: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
  },
  {
    quote: "I've spent my entire career preparing for this moment. Mars isn't a destination anymore. It's a beginning.",
    author: "Dr. Elena Rodriguez",
    title: "Mission Commander",
    image: 'bg-gradient-to-br from-zinc-800 to-zinc-900',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-40 bg-[#080604] overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(80,50,40,0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(80,50,40,0.15) 0%, transparent 70%)',
              'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(80,50,40,0.15) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-8 md:px-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] tracking-[0.6em] text-zinc-600 mb-20 text-center">VOICES</p>
          
          {/* Quote container */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                {/* Quote mark */}
                <span className="text-6xl text-zinc-800 font-serif mb-8">"</span>
                
                {/* Quote */}
                <p className="text-2xl md:text-4xl lg:text-5xl font-extralight text-white leading-[1.4] max-w-4xl mb-12">
                  {TESTIMONIALS[currentIndex].quote}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-6">
                  <div 
                    className={`w-14 h-14 rounded-full ${TESTIMONIALS[currentIndex].image} flex items-center justify-center`}
                  >
                    <span className="text-xl text-zinc-600">
                      {TESTIMONIALS[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-light">{TESTIMONIALS[currentIndex].author}</p>
                    <p className="text-sm text-zinc-600">{TESTIMONIALS[currentIndex].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-8 mt-16">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="group relative py-4"
              >
                <div className={`w-16 h-px transition-all duration-500 ${
                  currentIndex === index ? 'bg-white' : 'bg-zinc-800 group-hover:bg-zinc-600'
                }`} />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-zinc-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
