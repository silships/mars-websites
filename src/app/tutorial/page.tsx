import Link from 'next/link';

export default function Tutorial() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-400 hover:text-[#ff4d00]">
            ← Back
          </Link>
          <a 
            href="https://www.linkedin.com/in/silbormueller/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
          >
            <span>Sil Bormüller</span>
            <img 
              src="/sil-avatar.png" 
              alt="Sil Bormüller" 
              className="w-7 h-7 rounded-full object-cover"
            />
          </a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <p className="text-[#ff4d00] text-xs tracking-[0.3em] mb-4">TUTORIAL</p>
          <h1 className="text-4xl font-light mb-4">Build cool Websites with AI</h1>
          <p className="text-zinc-500">
            Using Cursor, Claude Code and the premium-frontend-design skill
          </p>
        </header>

        {/* Variants */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-600 mb-6">INCLUDED VARIANTS</h2>
          <div className="space-y-3">
            <VariantLink href="/" name="Terminal" desc="Boot sequence, CLI, ASCII" />
            <VariantLink href="/home2" name="Cinematic" desc="Editorial, parallax, film grain" />
            <VariantLink href="/home3" name="Educational" desc="Facts, quiz, timeline" />
          </div>
        </section>

        {/* Run This Project */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-600 mb-6">RUN THIS PROJECT</h2>
          <ol className="space-y-6">
            <li>
              <p className="text-zinc-300 mb-2">1. Download or clone</p>
              <Code>git clone https://github.com/silships/mars-websites.git</Code>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">2. Open in Cursor or Claude Code</p>
              <p className="text-sm text-zinc-600">
                <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00]">cursor.com</a>
              </p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">3. Ask the AI</p>
              <Prompt>Install dependencies and start the dev server</Prompt>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">4. Open browser</p>
              <p className="text-sm text-zinc-500">http://localhost:3000</p>
            </li>
          </ol>
        </section>

        {/* What are Skills */}
        <section className="mb-16 p-6 border border-white/10">
          <h2 className="text-xs tracking-[0.2em] text-zinc-600 mb-4">WHAT ARE SKILLS?</h2>
          <p className="text-zinc-400 leading-relaxed">
            Skills are expertise packs for AI assistants. They work with Cursor, Claude Code, Cline, Windsurf, and others. 
            Browse all at <a href="https://skills.sh" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00]">skills.sh</a>
          </p>
        </section>

        {/* Create Your Own */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-600 mb-6">CREATE YOUR OWN</h2>
          <ol className="space-y-6">
            <li>
              <p className="text-zinc-300 mb-2">1. Create a new folder, open in Cursor</p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">2. Install the skill</p>
              <Code>npx skills add kv0906/cc-skills/premium-frontend-design</Code>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">3. Ask for what you want</p>
              <div className="space-y-2">
                <Prompt>Create a premium website about space exploration</Prompt>
                <Prompt>Build a cinematic landing page for a coffee brand</Prompt>
                <Prompt>Make a terminal-style portfolio website</Prompt>
              </div>
            </li>
          </ol>
        </section>

        {/* Other Skills */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-600 mb-6">OTHER SKILLS</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-zinc-400">frontend-design</span>
              <span className="text-zinc-600 font-mono text-xs">anthropics/skills</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-zinc-400">vercel-react-best-practices</span>
              <span className="text-zinc-600 font-mono text-xs">vercel-labs/agent-skills</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-zinc-400">web-design-guidelines</span>
              <span className="text-zinc-600 font-mono text-xs">vercel-labs/agent-skills</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10 text-center text-sm text-zinc-600">
          <p className="mb-2">
            Created by <a href="https://www.linkedin.com/in/silbormueller/" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00] hover:underline">Sil Bormüller</a>
          </p>
          <p>Built with Cursor + premium-frontend-design skill</p>
        </footer>
      </div>
    </main>
  );
}

function VariantLink({ href, name, desc }: { href: string; name: string; desc: string }) {
  return (
    <Link 
      href={href}
      className="flex justify-between items-center py-3 px-4 border border-white/10 hover:border-[#ff4d00]/30 transition-colors"
    >
      <span className="text-white">{name}</span>
      <span className="text-sm text-zinc-600">{desc}</span>
    </Link>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black border border-white/10 px-4 py-3 font-mono text-sm text-[#ff4d00] overflow-x-auto">
      {children}
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-[#ff4d00]/30 pl-4 py-1 text-sm text-zinc-400 italic">
      "{children}"
    </div>
  );
}
