'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';
import GlassCard from './GlassCard';

interface GalleryItem {
  title: string;
  location: string;
  description: string;
  gradient: string;
  span?: 'wide' | 'tall' | 'large';
}

const galleryItems: GalleryItem[] = [
  {
    title: "Olympus Mons",
    location: "Tharsis Region",
    description: "The largest volcano in the solar system, standing 21.9 km high",
    gradient: "from-[#8b0000] via-[#cf4520] to-[#2d1810]",
    span: "large"
  },
  {
    title: "Valles Marineris",
    location: "Equatorial Region",
    description: "A vast canyon system stretching 4,000 km",
    gradient: "from-[#4a1c0a] via-[#8b4513] to-[#1a0a00]",
    span: "wide"
  },
  {
    title: "Gale Crater",
    location: "Aeolis Quadrangle",
    description: "Home to the Curiosity rover since 2012",
    gradient: "from-[#2d1810] via-[#4a3020] to-[#1a0a00]",
  },
  {
    title: "Jezero Crater",
    location: "Syrtis Major",
    description: "Ancient river delta, Perseverance landing site",
    gradient: "from-[#5d3a1a] via-[#8b5a2b] to-[#2d1810]",
  },
  {
    title: "Polar Ice Caps",
    location: "North & South Poles",
    description: "Water ice and frozen CO2, key to future colonization",
    gradient: "from-[#e8e8e8] via-[#a0c4d8] to-[#4a6070]",
    span: "wide"
  },
  {
    title: "Hellas Planitia",
    location: "Southern Hemisphere",
    description: "One of the largest impact craters in the solar system",
    gradient: "from-[#3d2817] via-[#6b4423] to-[#1a0a00]",
  },
];

const GalleryCard: React.FC<{ item: GalleryItem; index: number }> = ({ item, index }) => {
  const spanClasses = {
    wide: 'md:col-span-2',
    tall: 'md:row-span-2',
    large: 'md:col-span-2 md:row-span-2',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl ${item.span ? spanClasses[item.span] : ''}`}
    >
      {/* Gradient background simulating Mars terrain */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Content */}
      <div className="relative h-full min-h-[250px] p-6 flex flex-col justify-end">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
        
        {/* Location badge */}
        <div className="relative inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs text-white/80 w-fit mb-3">
          <MapPin className="w-3 h-3" />
          {item.location}
        </div>
        
        {/* Title */}
        <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#ff4d00] transition-colors">
          {item.title}
        </h3>
        
        {/* Description */}
        <p className="relative text-white/70 text-sm max-w-md">
          {item.description}
        </p>
        
        {/* Explore link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="relative mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <button className="flex items-center gap-2 text-[#ff4d00] text-sm font-mono uppercase tracking-wider hover:gap-3 transition-all">
            Explore
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const MarsGallery: React.FC = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#ff4d00]/10 border border-[#ff4d00]/30 text-[#ff4d00] text-sm font-mono uppercase tracking-wider mb-6">
            Surface Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Explore Martian</span>{' '}
            <span className="text-[#ff4d00]">Landscapes</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From towering volcanoes to vast canyons, Mars hosts some of the most 
            dramatic terrain in our solar system.
          </p>
        </motion.div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarsGallery;
