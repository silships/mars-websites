# Mars Websites

Three stunning website variants about Mars, built with AI assistance using the [premium-frontend-design](https://skills.sh/) skill.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-FF0055)

## Live Demo Variants

| Route | Style | Description |
|-------|-------|-------------|
| `/` | Terminal/Hacker | Boot sequence, CLI interface, ASCII art |
| `/home2` | Premium Cinematic | Editorial design, parallax, film grain |
| `/home3` | Educational | Interactive facts, quiz, timeline |

---

## Tutorial for Beginners

### Prerequisites

Before you start, make sure you have these installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Choose the "LTS" version
   - Run the installer and follow the steps

2. **Git**
   - Download from: https://git-scm.com/downloads
   - Run the installer with default settings

3. **A code editor** (recommended: VS Code or Cursor)
   - VS Code: https://code.visualstudio.com/
   - Cursor: https://cursor.com/

### Step 1: Clone this Repository

Open your terminal (or command prompt on Windows) and run:

```bash
git clone https://github.com/silships/mars-websites.git
```

This downloads all the code to your computer.

### Step 2: Navigate to the Project

```bash
cd mars-websites
```

### Step 3: Install Dependencies

```bash
npm install
```

This downloads all the required packages. It might take a minute or two.

### Step 4: Start the Development Server

```bash
npm run dev
```

You should see something like:

```
▲ Next.js 15.x
- Local: http://localhost:3000
```

### Step 5: View the Websites

Open your web browser and go to:

- **http://localhost:3000** → Terminal/Hacker style
- **http://localhost:3000/home2** → Premium Cinematic style
- **http://localhost:3000/home3** → Educational style

That's it! You're running the Mars websites locally.

---

## How This Was Built

This project was created using **AI-assisted development** with the help of a "skill" from [skills.sh](https://skills.sh/).

### What are Skills?

Skills are reusable instructions that make AI coding assistants (like Cursor, Claude Code, GitHub Copilot, etc.) better at specific tasks. Think of them as "expertise packs" you can install.

### The Skill Used: `premium-frontend-design`

This project used the `premium-frontend-design` skill which provides:
- Design patterns for premium websites
- Animation best practices
- Typography and color guidelines
- Component architecture patterns

### How to Install Skills (for your own projects)

#### Step 1: Have a project open in Cursor, VS Code, or similar

#### Step 2: Run the install command

```bash
npx skills add kv0906/cc-skills/premium-frontend-design
```

This creates a `.agents/skills/` folder in your project with the skill instructions.

#### Step 3: Use the skill

When chatting with your AI assistant, it will automatically have access to the skill's knowledge. You can ask things like:

- "Create a premium hero section for my landing page"
- "Add cinematic scroll animations"
- "Design an editorial-style about page"

### Other Popular Skills from skills.sh

| Skill | Install Command | What it does |
|-------|-----------------|--------------|
| `frontend-design` | `npx skills add anthropics/skills/frontend-design` | General frontend design patterns |
| `vercel-react-best-practices` | `npx skills add vercel-labs/agent-skills/vercel-react-best-practices` | React best practices |
| `web-design-guidelines` | `npx skills add vercel-labs/agent-skills/web-design-guidelines` | Web design fundamentals |

Browse all skills at: https://skills.sh/

---

## Project Structure

```
mars-websites/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Terminal variant (/)
│   │   ├── home2/page.tsx    # Premium variant (/home2)
│   │   └── home3/page.tsx    # Educational variant (/home3)
│   └── components/
│       ├── bold/             # Travel booking components (unused)
│       ├── learn/            # Educational components
│       └── premium/          # Cinematic components
├── package.json
└── README.md
```

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) (Terminal variant)

---

## Common Issues

### "command not found: npm"
You need to install Node.js first. Download it from https://nodejs.org/

### "command not found: git"
You need to install Git first. Download it from https://git-scm.com/downloads

### Port 3000 is already in use
Another app is using port 3000. Either close that app, or run:
```bash
npm run dev -- -p 3001
```
Then open http://localhost:3001 instead.

### The page looks broken / styles are missing
Try deleting the `.next` folder and running `npm run dev` again:
```bash
rm -rf .next
npm run dev
```

---

## Want to Modify the Code?

Feel free! The main files to edit are:

- `src/app/page.tsx` - Terminal variant homepage
- `src/app/home2/page.tsx` - Premium variant  
- `src/app/home3/page.tsx` - Educational variant
- `src/app/globals.css` - Global styles

Each variant imports its components from the `src/components/` folder.

---

## License

MIT - Feel free to use this code for any purpose.

---

## Credits

- Built with AI assistance using [Cursor](https://cursor.com/)
- Design patterns from [premium-frontend-design skill](https://skills.sh/)
- Inspired by the dream of Mars exploration 🚀
