'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const TIERS = [
  {
    id: 'pioneer',
    name: 'Pioneer',
    price: '150,000',
    tagline: 'Join the first wave',
    features: ['Shared quarters (4 travelers)', 'Standard life support', '50kg cargo allowance', 'Colony work assignment'],
    color: 'rgba(100, 180, 100, 0.5)',
  },
  {
    id: 'explorer',
    name: 'Explorer',
    price: '350,000',
    tagline: 'Enhanced passage',
    features: ['Semi-private cabin', 'Premium life support', '150kg cargo allowance', 'EVA suit included', 'Priority landing'],
    featured: true,
    color: 'rgba(255, 150, 100, 0.5)',
  },
  {
    id: 'founder',
    name: 'Founder',
    price: '1,000,000',
    tagline: 'Shape the future',
    features: ['Private suite', 'Concierge service', 'Unlimited cargo', 'Land allocation', 'Colony governance rights', 'Return flight option'],
    color: 'rgba(255, 200, 100, 0.5)',
  },
];

function TierCard({ tier, isSelected, onSelect }: { 
  tier: typeof TIERS[0]; 
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      onClick={onSelect}
      className="relative w-full text-left"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={`relative p-10 transition-all duration-700 overflow-hidden ${
          isSelected ? 'bg-zinc-900/80' : 'bg-zinc-950/50 hover:bg-zinc-900/30'
        }`}
      >
        {/* Animated glow on selection */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${tier.color} 0%, transparent 70%)`,
              }}
            />
          )}
        </AnimatePresence>
        
        {/* Featured badge */}
        {tier.featured && (
          <div className="absolute top-6 right-6">
            <span className="text-[9px] tracking-[0.3em] text-orange-300/60">RECOMMENDED</span>
          </div>
        )}
        
        {/* Content */}
        <div className="relative">
          <p className="text-[10px] tracking-[0.4em] text-zinc-600 mb-4">{tier.name.toUpperCase()}</p>
          
          <div className="mb-6">
            <span className="text-4xl md:text-5xl font-extralight text-white">${tier.price}</span>
          </div>
          
          <p className="text-sm text-zinc-500 mb-8 font-light">{tier.tagline}</p>
          
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, i) => (
              <motion.li 
                key={feature} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="w-1 h-1 mt-2 bg-zinc-600 rounded-full flex-shrink-0" />
                <span className="text-sm text-zinc-400 font-light">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Selection indicator line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isSelected ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-px bg-zinc-800" />
        <div className="absolute top-0 left-0 h-8 w-px bg-zinc-800" />
        <div className="absolute bottom-0 right-0 w-8 h-px bg-zinc-800" />
        <div className="absolute bottom-0 right-0 h-8 w-px bg-zinc-800" />
      </div>
    </motion.button>
  );
}

export default function ReserveSection() {
  const [selectedTier, setSelectedTier] = useState('explorer');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="reserve" className="relative py-40 bg-[#080604] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(100, 60, 40, 0.2) 0%, transparent 60%)',
          }}
        />
        
        {/* Grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[10px] tracking-[0.6em] text-zinc-600 mb-6">SECURE YOUR PLACE</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-6">
            Reserve Your <span className="italic text-orange-100/80">Passage</span>
          </h2>
          <p className="text-zinc-500 font-light max-w-xl mx-auto">
            Limited positions available for the 2031 departure window. 
            Priority access for early registrations.
          </p>
        </motion.div>
        
        {/* Tier selection */}
        <motion.div 
          className="grid md:grid-cols-3 gap-px bg-zinc-800/30 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TierCard 
                tier={tier}
                isSelected={selectedTier === tier.id}
                onSelect={() => setSelectedTier(tier.id)}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-zinc-400 font-light mb-8">
                  Join the waitlist. Be first to know when reservations open.
                </p>
                
                <div className="flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 bg-transparent border border-zinc-800 text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors font-light"
                  />
                  <button 
                    onClick={handleSubmit}
                    className="group relative px-10 py-4 overflow-hidden"
                  >
                    <span className="relative z-10 text-sm tracking-[0.2em] text-white group-hover:text-black transition-colors duration-500">
                      NOTIFY ME
                    </span>
                    <div className="absolute inset-0 border border-zinc-700 group-hover:border-white transition-colors duration-500" />
                    <motion.div 
                      className="absolute inset-0 bg-white origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8"
              >
                <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-green-500/50 flex items-center justify-center">
                  <span className="text-green-400">✓</span>
                </div>
                <p className="text-white text-lg mb-2">You're on the list.</p>
                <p className="text-zinc-500 text-sm">We'll contact you when reservations open.</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <p className="text-[10px] text-zinc-700 mt-8 tracking-wider">
            BY SIGNING UP, YOU AGREE TO RECEIVE PROGRAM UPDATES
          </p>
        </motion.div>
        
        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center gap-12 text-[10px] tracking-[0.2em] text-zinc-700"
        >
          <span>REFUNDABLE DEPOSIT</span>
          <span>•</span>
          <span>PAYMENT PLANS</span>
          <span>•</span>
          <span>MEDICAL COVERAGE</span>
        </motion.div>
      </div>
    </section>
  );
}
