import Link from 'next/link';

export default function Tutorial() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-zinc-800">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 px-6 py-4 bg-white">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-500 hover:text-[#ff4d00]">
            ← Back to Mars
          </Link>
          <a 
            href="https://www.linkedin.com/in/silbormueller/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
          >
            <span>Sil Bormüller</span>
            <img 
              src="/sil-avatar.png" 
              alt="Sil Bormüller" 
              className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
            />
          </a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <p className="text-[#ff4d00] text-sm font-medium mb-4">TUTORIAL</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-zinc-900">Build cool Websites with AI</h1>
          <p className="text-lg text-zinc-500">
            Using Cursor, Claude Code and the premium-frontend-design skill
          </p>
        </header>

        {/* Variants */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-400 mb-6 font-medium">INCLUDED VARIANTS</h2>
          <div className="grid gap-3">
            <VariantLink href="/" name="Terminal" desc="Boot sequence, CLI, ASCII" emoji="💻" />
            <VariantLink href="/home2" name="Cinematic" desc="Editorial, parallax, film grain" emoji="🎬" />
            <VariantLink href="/home3" name="Educational" desc="Facts, quiz, timeline" emoji="📚" />
          </div>
        </section>

        {/* Run This Project */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-400 mb-6 font-medium">RUN THIS PROJECT</h2>
          <ol className="space-y-6">
            <Step num={1} title="Open Terminal">
              <p className="text-sm text-zinc-500 mb-3">
                <span className="font-medium text-zinc-700">Mac:</span> Press <Kbd>Cmd + Space</Kbd>, type "Terminal", press Enter
              </p>
              <p className="text-sm text-zinc-500">
                <span className="font-medium text-zinc-700">Windows:</span> Press <Kbd>Win</Kbd>, type "cmd", press Enter
              </p>
            </Step>
            <Step num={2} title="Go to your projects folder">
              <p className="text-sm text-zinc-500 mb-3">Navigate to where you want to save the project, for example your Desktop:</p>
              <Code>cd ~/Desktop</Code>
            </Step>
            <Step num={3} title="Clone the project">
              <p className="text-sm text-zinc-500 mb-3">This downloads the project to your computer:</p>
              <Code>git clone https://github.com/silships/mars-websites.git</Code>
            </Step>
            <Step num={4} title="Download Cursor">
              <p className="text-sm text-zinc-500">
                Go to <a href="https://cursor.com" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00] font-medium hover:underline">cursor.com</a> and download the app for your system. Install it like any other app.
              </p>
            </Step>
            <Step num={5} title="Open the project in Cursor">
              <p className="text-sm text-zinc-500">
                In Cursor: <span className="font-medium text-zinc-700">File → Open Folder</span> → Navigate to <span className="font-medium text-zinc-700">Desktop → mars-websites</span> → Click Open
              </p>
            </Step>
            <Step num={6} title="Open the AI chat">
              <p className="text-sm text-zinc-500">
                Press <Kbd>Cmd + I</Kbd> (Mac) or <Kbd>Ctrl + I</Kbd> (Windows) to open the AI assistant
              </p>
            </Step>
            <Step num={7} title="Ask the AI to start the project">
              <p className="text-sm text-zinc-500 mb-3">Type this message and press Enter:</p>
              <Prompt>Install dependencies and start the dev server</Prompt>
              <p className="text-sm text-zinc-500 mt-3">The AI will run the commands for you. Wait until it says the server is running.</p>
            </Step>
            <Step num={8} title="View the website">
              <p className="text-sm text-zinc-500 mb-3">Open your browser and go to:</p>
              <p className="text-[#ff4d00] font-mono font-medium text-lg">http://localhost:3000</p>
            </Step>
          </ol>
        </section>

        {/* What are Skills */}
        <section className="mb-16 p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm">
          <h2 className="text-xs tracking-[0.2em] text-zinc-400 mb-4 font-medium">WHAT ARE SKILLS?</h2>
          <p className="text-zinc-600 leading-relaxed">
            Skills are expertise packs for AI assistants. They work with Cursor, Claude Code, Cline, Windsurf, and others. 
            Browse all at <a href="https://skills.sh" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00] font-medium hover:underline">skills.sh</a>
          </p>
        </section>

        {/* Create Your Own */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-400 mb-6 font-medium">CREATE YOUR OWN</h2>
          <ol className="space-y-6">
            <Step num={1} title="Create a new folder">
              <p className="text-sm text-zinc-500 mb-3">Open Terminal and create a new project folder:</p>
              <div className="space-y-2">
                <Code>cd ~/Desktop</Code>
                <Code>mkdir my-cool-website</Code>
              </div>
            </Step>
            <Step num={2} title="Open in Cursor">
              <p className="text-sm text-zinc-500">
                In Cursor: <span className="font-medium text-zinc-700">File → Open Folder</span> → Navigate to <span className="font-medium text-zinc-700">Desktop → my-cool-website</span> → Click Open
              </p>
            </Step>
            <Step num={3} title="Open the AI chat">
              <p className="text-sm text-zinc-500">
                Press <Kbd>Cmd + I</Kbd> (Mac) or <Kbd>Ctrl + I</Kbd> (Windows)
              </p>
            </Step>
            <Step num={4} title="Install the skill">
              <p className="text-sm text-zinc-500 mb-3">Ask the AI:</p>
              <Prompt>Install the premium-frontend-design skill from kv0906/cc-skills</Prompt>
              <p className="text-sm text-zinc-500 mt-3">The AI will run the install command for you.</p>
            </Step>
            <Step num={5} title="Ask for what you want">
              <p className="text-sm text-zinc-500 mb-3">Now just describe what you want to build:</p>
              <div className="space-y-2">
                <Prompt>Create a premium website about space exploration</Prompt>
                <Prompt>Build a cinematic landing page for a coffee brand</Prompt>
                <Prompt>Make a terminal-style portfolio website</Prompt>
              </div>
              <p className="text-sm text-zinc-500 mt-3">The AI will create everything for you.</p>
            </Step>
            <Step num={6} title="Start and view your website">
              <p className="text-sm text-zinc-500 mb-3">Ask the AI:</p>
              <Prompt>Start the dev server</Prompt>
              <p className="text-sm text-zinc-500 mt-3">Then open <span className="text-[#ff4d00] font-medium">http://localhost:3000</span> in your browser.</p>
            </Step>
          </ol>
        </section>

        {/* Other Skills */}
        <section className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-zinc-400 mb-6 font-medium">OTHER SKILLS TO EXPLORE</h2>
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
            <div className="flex justify-between items-center p-4 border-b border-zinc-100">
              <span className="text-zinc-700 font-medium">frontend-design</span>
              <span className="text-zinc-400 font-mono text-xs bg-zinc-100 px-2 py-1 rounded">anthropics/skills</span>
            </div>
            <div className="flex justify-between items-center p-4 border-b border-zinc-100">
              <span className="text-zinc-700 font-medium">vercel-react-best-practices</span>
              <span className="text-zinc-400 font-mono text-xs bg-zinc-100 px-2 py-1 rounded">vercel-labs/agent-skills</span>
            </div>
            <div className="flex justify-between items-center p-4">
              <span className="text-zinc-700 font-medium">web-design-guidelines</span>
              <span className="text-zinc-400 font-mono text-xs bg-zinc-100 px-2 py-1 rounded">vercel-labs/agent-skills</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-zinc-200 text-center text-sm text-zinc-500">
          <p className="mb-2">
            Created by <a href="https://www.linkedin.com/in/silbormueller/" target="_blank" rel="noopener noreferrer" className="text-[#ff4d00] font-medium hover:underline">Sil Bormüller</a>
          </p>
          <p>Built with Cursor + premium-frontend-design skill</p>
        </footer>
      </div>
    </main>
  );
}

function VariantLink({ href, name, desc, emoji }: { href: string; name: string; desc: string; emoji: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-200 hover:border-[#ff4d00]/50 hover:shadow-md transition-all"
    >
      <span className="text-2xl">{emoji}</span>
      <div>
        <span className="text-zinc-900 font-medium block">{name}</span>
        <span className="text-sm text-zinc-500">{desc}</span>
      </div>
    </Link>
  );
}

function Step({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ff4d00] text-white flex items-center justify-center text-sm font-medium">
        {num}
      </div>
      <div className="flex-1 pt-0.5">
        <p className="text-zinc-900 font-medium mb-2">{title}</p>
        {children}
      </div>
    </li>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900 rounded-lg px-4 py-3 font-mono text-sm text-[#ff4d00] overflow-x-auto">
      {children}
    </div>
  );
}

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#fff5f0] border-l-4 border-[#ff4d00] pl-4 pr-4 py-3 text-sm text-zinc-700 rounded-r-lg">
      "{children}"
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="px-2 py-1 bg-zinc-100 border border-zinc-300 rounded text-xs font-mono text-zinc-700 shadow-sm">
      {children}
    </kbd>
  );
}
