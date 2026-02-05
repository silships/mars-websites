'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQS = [
  {
    question: "Is this actually real? Can I really go to Mars?",
    answer: "Yes! While currently in the final planning stages, Mars travel is expected to become reality by the early 2030s. Companies like SpaceX are actively developing the technology. Booking now secures your priority position.",
    emoji: "🤯",
  },
  {
    question: "How fit do I need to be?",
    answer: "You'll need to pass a comprehensive medical exam and complete 6 months of pre-flight training. You don't need to be an astronaut, but good cardiovascular health and psychological resilience are essential. We accept ages 18-65.",
    emoji: "💪",
  },
  {
    question: "Is it a one-way trip?",
    answer: "Not necessarily! Return missions will be available, though they add significant cost and complexity. Many pioneers choose one-way for the adventure of building a new civilization. The choice is yours.",
    emoji: "🔄",
  },
  {
    question: "What about radiation?",
    answer: "Our spacecraft feature advanced radiation shielding. During the journey, you'll receive about the same radiation exposure as a year on the ISS. Mars habitats are designed with additional protection.",
    emoji: "☢️",
  },
  {
    question: "Can I bring my family?",
    answer: "Absolutely! We offer family packages with shared cabin options. Children must be at least 12 years old. Imagine raising kids who'll grow up as true Martians!",
    emoji: "👨‍👩‍👧‍👦",
  },
  {
    question: "What's the food like?",
    answer: "Modern space cuisine has come a long way! Expect a variety of specially prepared meals, fresh vegetables from onboard hydroponics, and yes, even coffee. Founder class gets personal chef service.",
    emoji: "🍽️",
  },
  {
    question: "Can I work remotely from Mars?",
    answer: "With a 4-24 minute communication delay, real-time calls won't work. But async work, content creation, and certain roles are totally doable. Many passengers plan to document their journey full-time.",
    emoji: "💻",
  },
  {
    question: "What's the refund policy?",
    answer: "Full refund up to 30 days before launch. 50% refund up to 7 days. Within 7 days, credit for future flights only. We understand life happens. Space travel is a big commitment.",
    emoji: "💰",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof FAQS[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-zinc-800"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center gap-4 text-left hover:bg-zinc-900/30 transition-colors px-4 -mx-4 rounded-lg"
      >
        <span className="text-3xl">{faq.emoji}</span>
        <span className="flex-1 text-lg font-bold text-white">{faq.question}</span>
        <motion.span 
          className="text-[#ff4d00] text-2xl"
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          +
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-16 pr-4 text-zinc-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TravelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
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
            GOT QUESTIONS?
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            <span className="text-[#ff4d00]">FAQ</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Everything you need to know before booking your trip to Mars.
          </p>
        </motion.div>
        
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
        
        {/* More questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-500 mb-4">Still have questions?</p>
          <button className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-full font-bold transition-all hover:bg-white/5">
            Chat with a Mars Specialist 💬
          </button>
        </motion.div>
      </div>
    </section>
  );
}
