'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PACKING_CATEGORIES = [
  {
    title: 'WE PROVIDE',
    subtitle: 'Included in your ticket',
    color: '#22c55e',
    items: [
      { name: 'Custom-fitted spacesuit', emoji: '🧑‍🚀', included: true },
      { name: 'Radiation shield undergarments', emoji: '🛡️', included: true },
      { name: 'Magnetic boots', emoji: '👢', included: true },
      { name: 'Personal tablet device', emoji: '📱', included: true },
      { name: 'Hygiene kit', emoji: '🧴', included: true },
      { name: 'Sleep pod with temperature control', emoji: '🛏️', included: true },
      { name: 'Emergency survival kit', emoji: '🆘', included: true },
      { name: 'Mars surface EVA suit (Explorer+)', emoji: '🚀', included: true },
    ],
  },
  {
    title: 'YOU BRING',
    subtitle: 'Personal items',
    color: '#ff4d00',
    items: [
      { name: 'Photos & memories (digital)', emoji: '📸', tip: 'Max 10GB' },
      { name: 'Favorite books (e-reader)', emoji: '📚', tip: 'We have a library too!' },
      { name: 'Comfort items', emoji: '🧸', tip: 'One small item' },
      { name: 'Personal music playlist', emoji: '🎵', tip: 'Pre-load recommended' },
      { name: 'Prescription medication', emoji: '💊', tip: 'Doctor approval needed' },
      { name: 'Journal', emoji: '📓', tip: 'Document your journey' },
    ],
  },
  {
    title: 'LEAVE BEHIND',
    subtitle: 'Not allowed on board',
    color: '#ef4444',
    items: [
      { name: 'Alcohol & tobacco', emoji: '🚫', reason: 'Safety regulations' },
      { name: 'Aerosol cans', emoji: '🚫', reason: 'Pressure hazard' },
      { name: 'Sharp objects', emoji: '🚫', reason: 'Zero-G danger' },
      { name: 'Pets', emoji: '🐕', reason: 'Sorry, no space dogs yet' },
      { name: 'Fresh food', emoji: '🍎', reason: 'Spoilage risk' },
      { name: 'Your ego', emoji: '😏', reason: 'Mars humbles everyone' },
    ],
  },
];

function CategoryCard({ category, index }: { category: typeof PACKING_CATEGORIES[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden border border-zinc-800"
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
      >
        <div className="text-left">
          <h3 className="text-2xl font-black" style={{ color: category.color }}>
            {category.title}
          </h3>
          <p className="text-zinc-500 text-sm">{category.subtitle}</p>
        </div>
        <motion.span 
          className="text-2xl text-zinc-500"
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          ↓
        </motion.span>
      </button>
      
      {/* Items */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-2 space-y-3">
          {category.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/30"
            >
              <span className="text-2xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="text-white font-medium">{item.name}</p>
                {'tip' in item && <p className="text-zinc-500 text-sm">{item.tip}</p>}
                {'reason' in item && <p className="text-red-400/70 text-sm">{item.reason}</p>}
              </div>
              {'included' in item && (
                <span className="text-green-400 text-xl">✓</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PackingList() {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff4d00] text-sm font-bold tracking-[0.3em] mb-4 block">
            BE PREPARED
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            PACKING <span className="text-[#ff4d00]">LIST</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Traveling light? You'll have to. But don't worry, we've got you covered.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {PACKING_CATEGORIES.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>
        
        {/* Fun note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#ff4d00]/10 to-transparent border border-[#ff4d00]/20 text-center"
        >
          <p className="text-zinc-300">
            <span className="text-2xl mr-2">💡</span>
            Pro tip: Start practicing living with less now. Mars colonists say it's the most liberating part of the journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
