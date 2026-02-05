'use client';

import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "I sold my house, quit my job, and booked a one-way ticket. Best decision I ever made. See you on Mars! 🚀",
    name: "Sarah Chen",
    title: "Future Mars Colonist",
    avatar: "👩‍🚀",
    class: "Founder Class",
  },
  {
    quote: "The zero-G training was intense but SO worth it. I've never felt more alive. Can't wait for launch day.",
    name: "Marcus Johnson",
    title: "Software Engineer → Space Pioneer",
    avatar: "👨‍💻",
    class: "Explorer Class",
  },
  {
    quote: "My grandkids will grow up on Mars. That's not science fiction anymore, that's my family's future.",
    name: "Elena Rodriguez",
    title: "Booked for Family Package",
    avatar: "👵",
    class: "Pioneer Class",
  },
  {
    quote: "Earth is nice and all, but have you seen a Martian sunset? Blue sunsets, people. BLUE. 🔵",
    name: "Alex Kim",
    title: "Mars Simulation Veteran",
    avatar: "🧑‍🔬",
    class: "Explorer Class",
  },
];

const STATS = [
  { value: '127K+', label: 'Tickets Reserved' },
  { value: '42', label: 'Countries Represented' },
  { value: '98%', label: 'Would Recommend' },
  { value: '2031', label: 'First Departure' },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,77,0,0.1)_0%,_transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#ff4d00] text-sm font-bold tracking-[0.3em] mb-4 block">
            FROM FUTURE MARTIANS
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            THEY'RE <span className="text-[#ff4d00]">READY</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Thousands have already booked their tickets. Here's what they're saying.
          </p>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <p className="text-4xl md:text-5xl font-black text-[#ff4d00]">{stat.value}</p>
              <p className="text-sm text-zinc-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
        
        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <p className="text-xl text-zinc-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-4xl">{testimonial.avatar}</span>
                <div className="flex-1">
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.title}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff4d00]/20 text-[#ff4d00]">
                  {testimonial.class}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-zinc-400 mb-6">
            Join <span className="text-white font-bold">127,000+ future Martians</span> who've already booked.
          </p>
          <a 
            href="#book"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#ff4d00] hover:bg-[#ff6b2d] rounded-full font-bold text-xl transition-all"
          >
            Reserve Your Spot
            <span className="text-2xl">🚀</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
