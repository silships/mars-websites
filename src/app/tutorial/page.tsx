'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Tutorial() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-wider hover:text-[#ff4d00] transition-colors">
            ← BACK TO MARS
          </Link>
          <a 
            href="https://skills.sh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-white transition-colors"
          >
            skills.sh
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p 
            variants={fadeIn}
            className="text-[#ff4d00] text-sm tracking-[0.3em] mb-6"
          >
            TUTORIAL
          </motion.p>
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl font-light tracking-tight mb-8"
          >
            Build Premium Websites
            <br />
            <span className="text-zinc-500">with AI</span>
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            Learn how to create stunning websites like this one using Cursor, Claude Code, and the premium-frontend-design skill.
          </motion.p>
        </motion.div>
      </section>

      {/* Variants Preview */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-sm tracking-[0.3em] text-zinc-500 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            THIS PROJECT INCLUDES
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { route: '/', name: 'Terminal', desc: 'Boot sequence, CLI interface, ASCII art' },
              { route: '/home2', name: 'Cinematic', desc: 'Editorial design, parallax, film grain' },
              { route: '/home3', name: 'Educational', desc: 'Interactive facts, quiz, timeline' },
            ].map((variant, i) => (
              <motion.div
                key={variant.route}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={variant.route}
                  className="block p-8 bg-white/[0.02] border border-white/5 hover:border-[#ff4d00]/30 transition-all group"
                >
                  <p className="text-xs text-zinc-600 font-mono mb-4">{variant.route}</p>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-[#ff4d00] transition-colors">
                    {variant.name}
                  </h3>
                  <p className="text-sm text-zinc-500">{variant.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Run This Project */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm tracking-[0.3em] text-zinc-500 mb-4">STEP 1</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-12">Run This Project</h3>
          </motion.div>

          <div className="space-y-8">
            <Step number="1" title="Download or clone this repo">
              <CodeBlock>git clone https://github.com/silships/mars-websites.git</CodeBlock>
            </Step>

            <Step number="2" title="Open the folder in Cursor or Claude Code">
              <p className="text-zinc-400">
                Download <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00] hover:underline">Cursor</a> if you haven't already.
              </p>
            </Step>

            <Step number="3" title="Ask your AI assistant">
              <Prompt>Install dependencies and start the dev server</Prompt>
            </Step>

            <Step number="4" title="Open in your browser">
              <p className="text-zinc-400">
                Visit <code className="text-[#ff4d00] bg-white/5 px-2 py-1">http://localhost:3000</code>
              </p>
            </Step>
          </div>
        </div>
      </section>

      {/* What are Skills */}
      <section className="py-20 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm tracking-[0.3em] text-zinc-500 mb-4">ABOUT</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-8">What are Skills?</h3>
          </motion.div>

          <motion.div
            className="prose prose-invert prose-zinc max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Skills are <span className="text-white">expertise packs</span> that make AI coding assistants better at specific tasks. 
              Think of them as specialized knowledge that you can install with a single command.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-medium mb-2">Works with</h4>
                <p className="text-sm text-zinc-500">Cursor, Claude Code, Cline, Windsurf, GitHub Copilot, and more</p>
              </div>
              <div className="p-6 bg-white/[0.02] border border-white/5">
                <h4 className="text-white font-medium mb-2">Browse all skills</h4>
                <a href="https://skills.sh" target="_blank" rel="noopener noreferrer" className="text-sm text-[#ff4d00] hover:underline">
                  skills.sh →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Create Your Own */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm tracking-[0.3em] text-zinc-500 mb-4">STEP 2</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-12">Create Your Own</h3>
          </motion.div>

          <div className="space-y-8">
            <Step number="1" title="Create a new folder and open it in Cursor">
              <p className="text-zinc-400">Start with an empty project folder.</p>
            </Step>

            <Step number="2" title="Install the skill">
              <p className="text-zinc-400 mb-4">Ask your AI assistant:</p>
              <Prompt>Install the premium-frontend-design skill from kv0906/cc-skills</Prompt>
              <p className="text-zinc-500 text-sm mt-4">Or run manually:</p>
              <CodeBlock>npx skills add kv0906/cc-skills/premium-frontend-design</CodeBlock>
            </Step>

            <Step number="3" title="Ask for what you want">
              <div className="space-y-3">
                <Prompt>Create a premium website about space exploration</Prompt>
                <Prompt>Build a cinematic landing page for a coffee brand</Prompt>
                <Prompt>Make a terminal-style portfolio website</Prompt>
              </div>
              <p className="text-zinc-500 text-sm mt-4">
                The AI now has access to premium design patterns and will build it for you.
              </p>
            </Step>
          </div>
        </div>
      </section>

      {/* Other Skills */}
      <section className="py-20 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm tracking-[0.3em] text-zinc-500 mb-4">MORE</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-12">Other Popular Skills</h3>
          </motion.div>

          <div className="space-y-4">
            {[
              { name: 'frontend-design', install: 'npx skills add anthropics/skills/frontend-design' },
              { name: 'vercel-react-best-practices', install: 'npx skills add vercel-labs/agent-skills/vercel-react-best-practices' },
              { name: 'web-design-guidelines', install: 'npx skills add vercel-labs/agent-skills/web-design-guidelines' },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                className="p-6 bg-white/[0.02] border border-white/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="text-white font-medium mb-2">{skill.name}</h4>
                <code className="text-xs text-zinc-500 bg-black/50 px-3 py-2 block overflow-x-auto">
                  {skill.install}
                </code>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://skills.sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#ff4d00] hover:underline"
            >
              Browse all skills at skills.sh →
            </a>
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-600 text-sm">
            Built with <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">Cursor</a> + <a href="https://skills.sh" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">premium-frontend-design skill</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

// Components

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="flex gap-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#ff4d00]/30 flex items-center justify-center text-[#ff4d00] text-sm">
        {number}
      </div>
      <div className="flex-1 pt-1">
        <h4 className="text-xl font-light mb-4">{title}</h4>
        {children}
      </div>
    </motion.div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black/50 border border-white/5 p-4 font-mono text-sm overflow-x-auto">
      <span className="text-zinc-500 select-none">$ </span>
      <span className="text-[#ff4d00]">{children}</span>
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#ff4d00]/5 border border-[#ff4d00]/20 p-4 text-sm italic text-zinc-300">
      "{children}"
    </div>
  );
}
