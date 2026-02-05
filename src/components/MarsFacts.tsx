'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Thermometer, 
  Clock, 
  Mountain, 
  Orbit,
  Scale,
  Sun,
  Moon,
  Wind
} from 'lucide-react';
import GlassCard from './GlassCard';

interface FactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  description?: string;
  delay?: number;
  accent?: string;
}

const FactCard: React.FC<FactCardProps> = ({
  icon,
  label,
  value,
  unit,
  description,
  delay = 0,
  accent = '#ff4d00'
}) => (
  <GlassCard className="p-6" delay={delay}>
    <div className="flex items-start justify-between mb-4">
      <div 
        className="p-3 rounded-xl bg-white/5"
        style={{ color: accent }}
      >
        {icon}
      </div>
    </div>
    <div className="font-mono text-3xl font-bold text-white mb-1">
      {value}
      {unit && <span className="text-lg text-zinc-500 ml-1">{unit}</span>}
    </div>
    <div className="font-mono text-xs text-[#ff4d00] uppercase tracking-wider mb-2">
      {label}
    </div>
    {description && (
      <p className="text-sm text-zinc-500">{description}</p>
    )}
  </GlassCard>
);

const marsData = [
  {
    icon: <Thermometer className="w-6 h-6" />,
    label: "Average Temperature",
    value: "-60",
    unit: "°C",
    description: "Ranging from -125°C at poles to 20°C at equator"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Day Length (Sol)",
    value: "24h 37m",
    description: "A Martian day is called a Sol"
  },
  {
    icon: <Mountain className="w-6 h-6" />,
    label: "Olympus Mons",
    value: "21.9",
    unit: "km",
    description: "Tallest volcano in the solar system"
  },
  {
    icon: <Orbit className="w-6 h-6" />,
    label: "Distance from Sun",
    value: "227.9",
    unit: "M km",
    description: "Average orbital distance"
  },
  {
    icon: <Scale className="w-6 h-6" />,
    label: "Surface Gravity",
    value: "3.72",
    unit: "m/s²",
    description: "38% of Earth's gravity"
  },
  {
    icon: <Sun className="w-6 h-6" />,
    label: "Year Length",
    value: "687",
    unit: "days",
    description: "Nearly twice an Earth year"
  },
  {
    icon: <Moon className="w-6 h-6" />,
    label: "Moons",
    value: "2",
    description: "Phobos and Deimos"
  },
  {
    icon: <Wind className="w-6 h-6" />,
    label: "Atmosphere",
    value: "95%",
    unit: "CO₂",
    description: "Thin atmosphere, mostly carbon dioxide"
  },
];

export const MarsFacts: React.FC = () => {
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
            Planetary Data
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">The Red Planet</span>{' '}
            <span className="text-[#ff4d00]">by Numbers</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Mars is the fourth planet from the Sun and the second-smallest planet 
            in the Solar System, only larger than Mercury.
          </p>
        </motion.div>
        
        {/* Facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {marsData.map((fact, index) => (
            <FactCard
              key={fact.label}
              {...fact}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarsFacts;
