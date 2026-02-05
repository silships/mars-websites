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
          <ol className="space-y-8">
            <li>
              <p className="text-zinc-300 mb-2">1. Open Terminal</p>
              <p className="text-sm text-zinc-500 mb-3">
                <span className="text-zinc-400">Mac:</span> Press <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">Cmd + Space</kbd>, type "Terminal", press Enter
              </p>
              <p className="text-sm text-zinc-500">
                <span className="text-zinc-400">Windows:</span> Press <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">Win</kbd>, type "cmd", press Enter
              </p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">2. Go to your projects folder</p>
              <p className="text-sm text-zinc-500 mb-3">Navigate to where you want to save the project, for example your Desktop:</p>
              <Code>cd ~/Desktop</Code>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">3. Clone the project</p>
              <p className="text-sm text-zinc-500 mb-3">This downloads the project to your computer:</p>
              <Code>git clone https://github.com/silships/mars-websites.git</Code>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">4. Download Cursor</p>
              <p className="text-sm text-zinc-500 mb-3">
                Go to <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00]">cursor.com</a> and download the app for your system. Install it like any other app.
              </p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">5. Open the project in Cursor</p>
              <p className="text-sm text-zinc-500 mb-3">
                In Cursor: <span className="text-zinc-400">File → Open Folder</span> → Navigate to <span className="text-zinc-400">Desktop → mars-websites</span> → Click Open
              </p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">6. Open the AI chat</p>
              <p className="text-sm text-zinc-500 mb-3">
                Press <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">Cmd + I</kbd> (Mac) or <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">Ctrl + I</kbd> (Windows) to open the AI assistant
              </p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">7. Ask the AI to start the project</p>
              <p className="text-sm text-zinc-500 mb-3">Type this message and press Enter:</p>
              <Prompt>Install dependencies and start the dev server</Prompt>
              <p className="text-sm text-zinc-500 mt-3">The AI will run the commands for you. Wait until it says the server is running.</p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">8. View the website</p>
              <p className="text-sm text-zinc-500 mb-3">Open your browser and go to:</p>
              <p className="text-[#ff4d00] font-mono">http://localhost:3000</p>
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
          <ol className="space-y-8">
            <li>
              <p className="text-zinc-300 mb-2">1. Create a new folder</p>
              <p className="text-sm text-zinc-500 mb-3">Open Terminal and create a new project folder:</p>
              <div className="space-y-2">
                <Code>cd ~/Desktop</Code>
                <Code>mkdir my-cool-website</Code>
              </div>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">2. Open in Cursor</p>
              <p className="text-sm text-zinc-500 mb-3">
                In Cursor: <span className="text-zinc-400">File → Open Folder</span> → Navigate to <span className="text-zinc-400">Desktop → my-cool-website</span> → Click Open
              </p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">3. Open the AI chat</p>
              <p className="text-sm text-zinc-500 mb-3">
                Press <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">Cmd + I</kbd> (Mac) or <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs">Ctrl + I</kbd> (Windows)
              </p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">4. Install the skill</p>
              <p className="text-sm text-zinc-500 mb-3">Ask the AI:</p>
              <Prompt>Install the premium-frontend-design skill from kv0906/cc-skills</Prompt>
              <p className="text-sm text-zinc-500 mt-3">The AI will run the install command for you.</p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">5. Ask for what you want</p>
              <p className="text-sm text-zinc-500 mb-3">Now just describe what you want to build:</p>
              <div className="space-y-2">
                <Prompt>Create a premium website about space exploration</Prompt>
                <Prompt>Build a cinematic landing page for a coffee brand</Prompt>
                <Prompt>Make a terminal-style portfolio website</Prompt>
              </div>
              <p className="text-sm text-zinc-500 mt-3">The AI will create everything for you.</p>
            </li>
            <li>
              <p className="text-zinc-300 mb-2">6. Start and view your website</p>
              <p className="text-sm text-zinc-500 mb-3">Ask the AI:</p>
              <Prompt>Start the dev server</Prompt>
              <p className="text-sm text-zinc-500 mt-3">Then open <span className="text-[#ff4d00]">http://localhost:3000</span> in your browser.</p>
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
