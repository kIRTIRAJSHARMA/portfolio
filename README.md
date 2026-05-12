# 💻 Kirti Raj Sharma — Terminal Portfolio

> A developer portfolio that feels like a real terminal. Because why have a boring portfolio when you can have one that goes **brrr**.

![Portfolio OS v2.5.1](https://img.shields.io/badge/Portfolio%20OS-v2.5.1-00ff9f?style=for-the-badge&logo=gnometerminal&logoColor=black)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 🚀 Live Demo

(https://kirtirajsharma-portfolio.netlify.app/)

---

## 🎯 What is this?

This is my personal portfolio — but instead of the usual cards-and-sections layout, it's built as a **fully interactive terminal**. You type commands, it responds. Just like a real shell, but way more fun.

It has a Matrix rain background, glitching ASCII art, live GitHub data, an embedded resume, keyboard sounds, and a bunch of easter eggs. Built entirely with React + Vite, zero UI libraries.

---

## ✨ Features

### 🖥️ Visual
- **Matrix rain** — animated falling characters in the background
- **CRT scanlines** — subtle overlay that makes it feel retro
- **Glitch effect** — ASCII name glitches with color distortion every few seconds
- **Rotating gradient ring** — animated border around the avatar
- **Pulsing glow** — avatar breathes with a green glow
- **Fade + slide in** — hero section animates on load

### ⌨️ Terminal Interactions
- **Tab autocomplete** — press Tab to complete any command
- **Ghost suggestion** — faded hint shows as you type
- **Arrow Up/Down** — navigate through command history
- **Keyboard sound** — satisfying click on every keypress
- **Auto scroll** — always follows the latest output

### 📡 Live GitHub Data
- **Contribution graph** — your real green squares, live
- **Repo cards** — fetched from GitHub API, click to open any repo
- **Stats** — followers, stars, top languages with progress bars

### 🗂️ Commands

| Command | What it does |
|---|---|
| `help` | Shows all available commands |
| `about` | Who I am |
| `whoami` | Quick identity card |
| `skills` | Full tech stack |
| `projects` | Live GitHub repo cards |
| `experience` | All work & leadership experience |
| `education` | B.Tech CSE @ CVR College |
| `certifications` | All 8 certifications with details |
| `contact` | Email, GitHub, LinkedIn |
| `github` / `linkedin` | Show profile links |
| `open github` / `open linkedin` | Opens in browser |
| `resume` | Embedded PDF inside the terminal |
| `stats` | Live GitHub stats |
| `neofetch` | Fake but cool system info |
| `banner` | Re-renders the ASCII art |
| `date` | Real current date & time |
| `sudo hire-me` | 😎 Try it |
| `hack` / `coffee` / `sudo rm -rf /` | Easter eggs |
| `ls` / `cd projects` / `cat about.txt` | Fake filesystem |
| `clear` | Clears the terminal |

---

## 🛠️ Tech Stack

- **React 18** — UI
- **Vite 5** — build tool
- **Pure CSS** — no UI libraries, all custom
- **GitHub REST API** — live repo & stats data
- **Canvas API** — Matrix rain animation
- **Google Drive** — resume embed

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Terminal.jsx        # main terminal shell
│   ├── CommandInput.jsx    # input with autocomplete & sound
│   ├── GitHubProjects.jsx  # live repo cards
│   └── GitHubStats.jsx     # live GitHub stats
├── utils/
│   └── commands.js         # all command logic
└── styles/
    └── terminal.css        # all styles & animations
```

---

## 🏃 Running Locally

```bash
# clone the repo
git clone https://github.com/kIRTIRAJSHARMA/aboutme.git
cd aboutme/terminal-portfolio

# install dependencies
npm install

# start dev server
npm run dev
```

Open `http://localhost:5173` and start typing.

---

## 🚢 Deploying

**Vercel (recommended)**
```bash
npm install -g vercel
vercel
```

**GitHub Pages**
```bash
npm run build
npm run deploy
```

---

## 🙋 About Me

I'm **Kirti Raj Sharma** — Android Developer, builder, and someone who thinks portfolios should be fun.

- 🐙 GitHub → [kIRTIRAJSHARMA](https://github.com/kIRTIRAJSHARMA)
- 💼 LinkedIn → [kirti-raj-sharma](https://www.linkedin.com/in/kirti-raj-sharma-a619572ab/)
- 📧 Email → kirtirajsharma618@gmail.com

---

## 📄 License

MIT — use it, fork it, make it yours. Just don't copy it and call it your own portfolio 😄

---

<p align="center">Built with ☕ and way too many late nights</p>
