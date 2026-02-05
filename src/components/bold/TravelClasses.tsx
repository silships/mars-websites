'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const TRAVEL_CLASSES = [
  {
    id: 'pioneer',
    name: 'PIONEER',
    tagline: 'For the true adventurers',
    price: '150K',
    color: '#22c55e',
    features: [
      'Shared cabin (4 travelers)',
      'Standard life support',
      'Basic meal plan',
      'Window seat rotation',
      'VR entertainment system',
      '50kg cargo allowance',
    ],
    perks: ['First humans on Mars certificate', 'Pioneer badge'],
    popular: false,
  },
  {
    id: 'explorer',
    name: 'EXPLORER',
    tagline: 'The perfect balance',
    price: '350K',
    color: '#ff4d00',
    features: [
      'Semi-private cabin (2 travelers)',
      'Enhanced life support',
      'Gourmet meal selection',
      'Dedicated window time',
      'Premium entertainment suite',
      '150kg cargo allowance',
      'Mars surface EVA suit included',
    ],
    perks: ['Naming rights to a Mars crater', 'Explorer insignia', 'Priority landing'],
    popular: true,
  },
  {
    id: 'founder',
    name: 'FOUNDER',
    tagline: 'The ultimate experience',
    price: '1M+',
    color: '#fbbf24',
    features: [
      'Private luxury cabin',
      'Premium life support + backup',
      'Personal chef service',
      '24/7 window access',
      'Full media suite + Starlink',
      'Unlimited cargo',
      'Custom EVA suit',
      'Personal rover on Mars',
    ],
    perks: ['Colony founding member status', 'Land allocation rights', 'Lifetime Mars visa', 'Name a mountain'],
    popular: false,
  },
];

function ClassCard({ travelClass, isSelected, onSelect }: { 
  travelClass: typeof TRAVEL_CLASSES[0]; 
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onClick={onSelect}
      className={`relative cursor-pointer p-8 rounded-3xl transition-all duration-500 ${
        isSelected 
          ? 'bg-zinc-900 border-2' 
          : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700'
      }`}
      style={{ borderColor: isSelected ? travelClass.color : undefined }}
    >
      {/* Popular badge */}
      {travelClass.popular && (
        <div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black"
          style={{ backgroundColor: travelClass.color }}
        >
          MOST POPULAR
        </div>
      )}
      
      {/* Header */}
      <div className="text-center mb-8">
        <h3 
          className="text-2xl font-black tracking-wider mb-2"
          style={{ color: travelClass.color }}
        >
          {travelClass.name}
        </h3>
        <p className="text-zinc-500 text-sm">{travelClass.tagline}</p>
      </div>
      
      {/* Price */}
      <div className="text-center mb-8">
        <span className="text-5xl font-black text-white">${travelClass.price}</span>
        <span className="text-zinc-500 text-sm block mt-1">per person</span>
      </div>
      
      {/* Features */}
      <ul className="space-y-3 mb-8">
        {travelClass.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span style={{ color: travelClass.color }}>✓</span>
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Perks */}
      <div className="pt-6 border-t border-zinc-800">
        <p className="text-xs text-zinc-500 mb-3 tracking-wider">EXCLUSIVE PERKS</p>
        <div className="flex flex-wrap gap-2">
          {travelClass.perks.map((perk) => (
            <span 
              key={perk}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: `${travelClass.color}20`,
                color: travelClass.color,
              }}
            >
              {perk}
            </span>
          ))}
        </div>
      </div>
      
      {/* Select button */}
      <button
        className="w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all"
        style={{ 
          backgroundColor: isSelected ? travelClass.color : 'transparent',
          color: isSelected ? 'black' : travelClass.color,
          border: `2px solid ${travelClass.color}`,
        }}
      >
        {isSelected ? 'SELECTED' : 'SELECT CLASS'}
      </button>
    </motion.div>
  );
}

export default function TravelClasses() {
  const [selectedClass, setSelectedClass] = useState('explorer');
  
  return (
    <section id="book" className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,77,0,0.1)_0%,_transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff4d00] text-sm font-bold tracking-[0.3em] mb-4 block">
            CHOOSE YOUR ADVENTURE
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            PICK YOUR <span className="text-[#ff4d00]">CLASS</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From budget-friendly pioneer bunks to luxury founder suites. 
            How do you want to arrive on Mars?
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {TRAVEL_CLASSES.map((travelClass) => (
            <ClassCard 
              key={travelClass.id}
              travelClass={travelClass}
              isSelected={selectedClass === travelClass.id}
              onSelect={() => setSelectedClass(travelClass.id)}
            />
          ))}
        </div>
        
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-zinc-600"
        >
          {[
            '🛡️ Full refund until T-30 days',
            '🏥 Medical coverage included',
            '🔄 Free rebooking',
            '✨ 0% interest payment plans',
          ].map((badge) => (
            <span key={badge} className="text-sm">{badge}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
