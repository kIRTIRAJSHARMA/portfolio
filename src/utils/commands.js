export const COMMANDS = [
  "help", "about", "whoami", "skills", "projects", "experience",
  "education", "certifications", "contact",
  "github", "linkedin", "open github", "open linkedin",
  "resume", "banner", "date", "neofetch", "stats",
  "ls", "cd projects", "cat about.txt",
  "sudo hire-me", "hack", "coffee", "sudo rm -rf /", "clear"
];

export function handleCommand(cmd) {
  const command = cmd.trim().toLowerCase();

  switch (command) {
    case "help":
      return `
┌─────────────────────────────────────────────┐
│              AVAILABLE COMMANDS             │
├─────────────────────────────────────────────┤
│  about          → About me                 │
│  whoami         → Who am I                 │
│  skills         → My tech stack            │
│  projects       → View my projects         │
│  experience     → Work experience          │
│  education      → My education             │
│  certifications → My certifications        │
│  contact        → Contact details          │
│  github         → GitHub profile link      │
│  linkedin       → LinkedIn profile link    │
│  open github    → Opens GitHub in browser  │
│  open linkedin  → Opens LinkedIn           │
│  resume         → Open resume PDF          │
│  stats          → GitHub stats             │
│  neofetch       → System info              │
│  banner         → Show ASCII banner        │
│  date           → Current date & time      │
│  sudo hire-me   → 😎 Surprise              │
│  clear          → Clear terminal           │
└─────────────────────────────────────────────┘`;

    case "about":
      return `
┌──────────────────────────────────────────────────┐
│              Hey, I'm Kirti Raj Sharma 👨💻        │
└──────────────────────────────────────────────────┘

  🚀  Developer  |  Problem Solver  |  Builder
  📍  Bhubaneswar, India

  I build applications that solve real-world problems
  and focus on creating clean, user-friendly experiences.

  I enjoy turning ideas into functional products, with a
  strong focus on simplicity, performance, and usability.
  I primarily work with Kotlin, Jetpack Compose, Firebase,
  and modern development tools.

  Currently pursuing B.Tech in CSE, I'm actively looking
  for opportunities where I can learn, contribute, and grow
  by building impactful solutions.

  ──────────────────────────────────────────────────
  💡 Type 'skills' to see what I work with
  📁 Type 'projects' to see what I've built
  📬 Type 'contact' to reach out
  ──────────────────────────────────────────────────`;

    case "whoami":
      return `
  ╔══════════════════════════════════════╗
  ║        IDENTITY CONFIRMED  ✅        ║
  ╚══════════════════════════════════════╝

  Name     →  Kirti Raj Sharma
  Role     →  Developer | Builder | Problem Solver
  Location →  Bhubaneswar, India 📍
  Email    →  kirtirajsharma618@gmail.com
  Phone    →  +91 8252375816
  GitHub   →  github.com/kIRTIRAJSHARMA
  Status   →  Open to opportunities 🟢`;

    case "skills":
      return `
⚡ Tech Stack:

  Languages   → Kotlin, Java, Python, JavaScript, C, C++
  Mobile      → Android (Jetpack Compose, MVVM, Room DB)
  Backend     → Firebase, REST APIs, Node.js
  Tools       → Android Studio, Git, Figma, Canva, VS Code, Postman
  AI/ML       → TensorFlow Lite, ML Kit
  Other       → DSA, OOP, DBMS, OS, Computer Networks
  Design      → UI/UX (Google UX Design Certified)`;

    case "projects":
      return "__PROJECTS__";

    case "experience":
      return `
  ╔══════════════════════════════════════════════════════════╗
  ║                  💼  EXPERIENCE                       ║
  ╚══════════════════════════════════════════════════════════╝

  🟢 PARK360  ·  Software Developer Intern
  ├─ Duration  : May 2025 – Jul 2025 · 2 months
  ├─ Location  : Surat, Gujarat (On-site)
  ├─ Android development using Kotlin, Jetpack, Firebase
  └─ SDK integration, testing & app deployment

  ──────────────────────────────────────────────────────────

  🟢 ALQUILAR HIVE LLP  ·  Android Developer Intern
  ├─ Duration  : May 2024 – Jun 2024 · 1 month
  ├─ Location  : New Delhi (Remote)
  ├─ Android Development with Kotlin & Firebase
  └─ UI design, SDK integration & testing

  ──────────────────────────────────────────────────────────

  🟡 LEADERSHIP & COMMUNITY

  ├─ GDG on Campus — CVRGU
  │   ├─ Android Dev Domain Lead    · Oct 2025 – Present
  │   └─ Android Dev Core Organizer  · Sep 2024 – Oct 2025
  │
  ├─ Institution's Innovation Council — CGU
  │   ├─ Vice President   · Jul 2025 – Present
  │   └─ Management       · Nov 2024 – Jul 2025
  │
  ├─ Entrepreneurship Development Cell — CGU
  │   └─ Student Body Convener  · Jan 2025 – Present
  │
  └─ CSE@CGU-Odisha
      └─ Joint Secretary  · Oct 2025 – Present`;

    case "education":
      return `
  ╔══════════════════════════════════════════════════════════╗
  ║                    🎓  EDUCATION                        ║
  ╚══════════════════════════════════════════════════════════╝

  Degree   →  B.Tech — Computer Science & Engineering
  College  →  C.V. Raman Global University, Bhubaneswar
  Duration →  2023 – 2027  (Currently pursuing)

  Relevant Coursework:
  ├── Data Structures & Algorithms
  ├── Operating Systems
  ├── Database Management Systems
  ├── Computer Networks
  ├── Object Oriented Programming
  └── Artificial Intelligence & ML`;

  

    case "certifications":
      return `
📜 Certifications:

  ✓ Google UX Design Professional Certificate
    └ Coursera · Oct 2025 · ID: 213NGOIZCZ2C

  ✓ The Complete Android 14 & Kotlin Masterclass
    └ Udemy · Jun 2025 · ID: UC-7fd4e63a-df06-4924-97c8-a6fcb3224954
    └ Jetpack Compose, MVVM, Room DB, Firebase, Coroutines

  ✓ GfG 160 – 160 Days of Problem Solving
    └ GeeksforGeeks · Aug 2025
    └ DSA, Data Structures, Competitive Programming (22 weeks)

  ✓ Innovation by Design
    └ NPTEL / IIT Bombay · Feb 2025 · ID: NPTEL25DE03S341600293
    └ Design Thinking, Human-Centered Design, Prototyping

  ✓ Postman API Fundamentals Student Expert
    └ Postman · Jul 2025
    └ REST APIs, HTTP, Automated Testing, Collections

  ✓ Accenture Software Engineering Job Simulation
    └ Forage · Jun 2025 · ID: dm7shwi7zWGAYdFdo
    └ Agile, Debugging, System Design, Cybersecurity

  ✓ Introduction to Artificial Intelligence
    └ Infosys Springboard · Jun 2025
    └ ML, Neural Networks, NLP, Real-world AI Applications

  ✓ Google Developer Groups on Campus — CVRGU
    └ Certificate of Completion · Aug 2025`;

    case "contact":
      return `
  ╔══════════════════════════════════════════════════════════╗
  ║                   📬  GET IN TOUCH                      ║
  ╚══════════════════════════════════════════════════════════╝

  📧  Email     →  kirtirajsharma618@gmail.com
  📱  Phone     →  +91 8252375816
  🐙  GitHub    →  https://github.com/kIRTIRAJSHARMA
  💼  LinkedIn  →  https://www.linkedin.com/in/kirti-raj-sharma-a619572ab/
  📍  Location  →  Bhubaneswar, India

  ──────────────────────────────────────────────────────────
  I'm always open to interesting projects and opportunities.
  Don't hesitate to reach out — I don't bite 😄
  ──────────────────────────────────────────────────────────`;

    case "github":
      return `
🐙 GitHub → https://github.com/kIRTIRAJSHARMA

Type "open github" to open it in browser.`;

    case "linkedin":
      return `
💼 LinkedIn → https://www.linkedin.com/in/kirti-raj-sharma-a619572ab/

Type "open linkedin" to open it in browser.`;

    case "open github":
      window.open("https://github.com/kIRTIRAJSHARMA", "_blank");
      return "🚀 Opening GitHub...";

    case "open linkedin":
      window.open("https://www.linkedin.com/in/kirti-raj-sharma-a619572ab/", "_blank");
      return "🚀 Opening LinkedIn...";

    case "resume":
      return "__RESUME__";

    case "banner":
      return `__BANNER__`;

    case "date":
      return `📅 ${new Date().toLocaleString("en-IN", {
        weekday: "long", year: "numeric", month: "long",
        day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
      })}`;

    case "neofetch":
      return `
  ██╗  ██╗██████╗ ███████╗
  ██║ ██╔╝██╔══██╗██╔════╝      kirti@portfolio
  █████╔╝ ██████╔╝███████╗      ───────────────────────────────
  ██╔═██╗ ██╔══██╗╚════██║      OS       Portfolio OS v2.5.1 🖥️
  ██║  ██╗██║  ██║███████║      Shell    zsh 5.9
  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝      Theme    Matrix Green 🟩
                                 Role     Developer & Builder
                                 Stack    Kotlin · Firebase · React
                                 Tools    Android Studio · VS Code
                                 College  C.V. Raman Global University
                                 GitHub   kIRTIRAJSHARMA
                                 Status   Always building 🚀
                                 Memory   Infinite ideas 💡
                                 CPU      Caffeine-powered ☕
                                 Uptime   Since day 1 of college

  🟥🟧🟨🟩🟦🟪  Colors: Matrix Edition`;

    case "stats":
      return `__STATS__`;

    case "ls":
      return `
📂 ~/portfolio
 ├── about.txt
 ├── projects/
 ├── skills.json
 ├── experience.md
 ├── education.md
 ├── certifications.md
 ├── contact.md
 └── resume.pdf`;

    case "cd projects":
      return "📂 Entered ~/projects — type 'projects' to list them.";

    case "cat about.txt":
      return "Kirti Raj Sharma — Android Developer passionate about building impactful apps.";

    case "sudo hire-me":
      return `
  🔐 Authenticating credentials...

  ██░░░░░░░░  10%  — Checking skills...
  ████░░░░░░  40%  — Verifying projects...
  ██████░░░░  60%  — Reviewing experience...
  ████████░░  80%  — Analyzing potential...
  ██████████  100% — Decision made.

  ╔══════════════════════════════════════╗
  ║       ✅  ACCESS GRANTED             ║
  ║   You just hired the best dev 😎     ║
  ╚══════════════════════════════════════╝

  📧  kirtirajsharma618@gmail.com
  📱  +91 8252375816

  Looking forward to building something great together! 🚀`;

    case "hack":
      return `
Initializing hack sequence...
> Bypassing firewall... ✓
> Accessing mainframe... ✓
> Downloading internet... ✓
> Hacking the planet... ✓

Just kidding 😄 I only build, not break.`;

    case "coffee":
      return `
  ( (
   ) )
 ........
 |      |]
 \\      /
  \`----'

☕ Brewing coffee... Kirti runs on this.`;

    case "sudo rm -rf /":
      return `
⚠️  Permission denied.
Nice try though 😄
This portfolio is indestructible.`;

    case "clear":
      return "__CLEAR__";

    default:
      return `❌ Command not found: "${cmd}"\nType 'help' to see available commands.`;
  }
}
