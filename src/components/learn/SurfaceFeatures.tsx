'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const FEATURES = [
  {
    id: 'olympus',
    name: 'Olympus Mons',
    type: 'Volcano',
    description: 'The largest volcano and mountain in the solar system. Standing at 21.9 km high (nearly 3x Mount Everest), it\'s so massive that its base would cover most of France.',
    stats: [
      { label: 'Height', value: '21.9 km' },
      { label: 'Diameter', value: '624 km' },
      { label: 'Caldera', value: '85 km' },
    ],
    gradient: 'from-orange-600 to-red-700',
    image: 'radial-gradient(ellipse at 30% 40%, #8b4513 0%, #654321 40%, #3d2314 100%)',
  },
  {
    id: 'valles',
    name: 'Valles Marineris',
    type: 'Canyon System',
    description: 'The Grand Canyon of Mars, stretching 4,000 km long and reaching depths of 7 km. It would span the entire United States from coast to coast.',
    stats: [
      { label: 'Length', value: '4,000 km' },
      { label: 'Depth', value: '7 km' },
      { label: 'Width', value: '200 km' },
    ],
    gradient: 'from-amber-700 to-orange-800',
    image: 'linear-gradient(180deg, #8b4513 0%, #2d1810 50%, #1a0f0a 100%)',
  },
  {
    id: 'hellas',
    name: 'Hellas Planitia',
    type: 'Impact Basin',
    description: 'One of the largest impact craters in the solar system, created by an asteroid collision 4 billion years ago. The deepest point on Mars lies here.',
    stats: [
      { label: 'Diameter', value: '2,300 km' },
      { label: 'Depth', value: '7.2 km' },
      { label: 'Age', value: '4B years' },
    ],
    gradient: 'from-stone-600 to-stone-800',
    image: 'radial-gradient(circle at center, #4a3728 0%, #2d1f17 60%, #1a110c 100%)',
  },
  {
    id: 'polar',
    name: 'Polar Ice Caps',
    type: 'Ice Formation',
    description: 'Both poles have permanent ice caps made of water ice and frozen CO2 (dry ice). In winter, the caps can extend to 60° latitude, covering a huge portion of the planet.',
    stats: [
      { label: 'North Cap', value: '1,000 km' },
      { label: 'South Cap', value: '350 km' },
      { label: 'Ice Depth', value: '3 km' },
    ],
    gradient: 'from-blue-200 to-cyan-400',
    image: 'radial-gradient(ellipse at center, #e8f4f8 0%, #b8d4e3 40%, #87aec5 100%)',
  },
];

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-500">
        {/* Feature image/visualization */}
        <div 
          className="h-64 relative overflow-hidden"
          style={{ background: feature.image }}
        >
          {/* Animated overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"
            animate={{ opacity: isHovered ? 0.3 : 0.7 }}
          />
          
          {/* Feature type badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${feature.gradient} text-white`}>
              {feature.type}
            </span>
          </div>
          
          {/* Stats overlay on hover */}
          <motion.div 
            className="absolute bottom-4 left-4 right-4 flex justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {feature.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-white font-bold">{stat.value}</p>
                <p className="text-zinc-400 text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff4d00] transition-colors">
            {feature.name}
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SurfaceFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  return (
    <section id="explore" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#0a0505] to-[#030303]"
        style={{ y: backgroundY }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,77,0,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,77,0,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff4d00] text-sm font-medium tracking-wider uppercase mb-4 block">
            Martian Geography
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore the Surface
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Mars has some of the most extreme geological features in our solar system. 
            Discover the volcanoes, canyons, and ice caps that shape the Red Planet.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
        
        {/* Fun comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#ff4d00]/10 to-transparent border border-[#ff4d00]/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl">🏔️</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Did you know?</h3>
              <p className="text-zinc-300 leading-relaxed">
                If Olympus Mons were placed on Earth, its peak would extend above 99% of our atmosphere. 
                Standing at its base, you wouldn't be able to see the summit because it would be 
                <span className="text-[#ff4d00] font-semibold"> beyond the horizon</span> due to the curvature of the planet!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
