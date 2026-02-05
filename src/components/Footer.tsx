'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-20 px-6 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505] to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-[#ff4d00]" />
              <span className="text-xl font-bold">MARS EXPLORER</span>
            </div>
            <p className="text-zinc-400 max-w-md mb-6">
              Discover the wonders of the Red Planet. Real-time data, stunning visuals, 
              and the latest discoveries from humanity&apos;s next frontier.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-[#ff4d00] hover:border-[#ff4d00]/30 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-[#ff4d00] hover:border-[#ff4d00]/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-[#ff4d00] hover:border-[#ff4d00]/30 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#ff4d00] mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#facts" className="text-zinc-400 hover:text-white transition-colors">Planet Facts</a></li>
              <li><a href="#missions" className="text-zinc-400 hover:text-white transition-colors">Missions</a></li>
              <li><a href="#gallery" className="text-zinc-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Live Data</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#ff4d00] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">NASA Mars</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">SpaceX</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">ESA Mars Express</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Mars Society</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 Mars Explorer. Built with curiosity.
          </p>
          <p className="text-zinc-600 text-xs font-mono">
            Data sourced from NASA/JPL-Caltech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
