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

## Quick Start with Cursor or Claude Code

### Step 1: Clone this repo

```bash
git clone https://github.com/silships/mars-websites.git
```

### Step 2: Open in Cursor or Claude Code

Open the `mars-websites` folder in your AI-powered editor.

### Step 3: Ask your AI assistant

Just type in the chat:

> "Install dependencies and start the dev server"

The AI will run `npm install` and `npm run dev` for you.

### Step 4: View the websites

Open your browser:
- **http://localhost:3000** → Terminal style
- **http://localhost:3000/home2** → Premium Cinematic style  
- **http://localhost:3000/home3** → Educational style

---

## How This Project Was Created

This entire project was built by asking an AI assistant to create Mars websites using a design skill.

### The Skill Used

**premium-frontend-design** from [skills.sh](https://skills.sh/)

Skills are "expertise packs" that make AI assistants better at specific tasks. This skill provides premium design patterns, animations, and component architectures.

### To Build Something Similar

1. Open a new folder in Cursor or Claude Code

2. Ask the AI to install the skill:
   > "Install the premium-frontend-design skill from skills.sh"
   
   Or run: `npx skills add kv0906/cc-skills/premium-frontend-design`

3. Then ask for what you want:
   > "Create a premium website about [your topic]"

The AI will have access to all the design patterns and will build it for you.

### Other Popular Skills

Browse all skills at [skills.sh](https://skills.sh/). Some popular ones:

| Skill | What to ask |
|-------|-------------|
| `frontend-design` | "Install anthropics/skills/frontend-design" |
| `vercel-react-best-practices` | "Install vercel-labs/agent-skills/vercel-react-best-practices" |
| `web-design-guidelines` | "Install vercel-labs/agent-skills/web-design-guidelines" |

---

## Want to Modify?

Just ask your AI assistant:

- "Change the color scheme to blue"
- "Add a new section about Mars rovers"
- "Make the animations faster"
- "Create a new variant at /home4"

The AI will edit the code for you.

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
│       ├── learn/            # Educational components
│       └── premium/          # Cinematic components
└── package.json
```

---

## License

MIT

---

Built with [Cursor](https://cursor.com/) + [premium-frontend-design skill](https://skills.sh/)
