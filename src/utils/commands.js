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
Hey, I'm Kirti Raj Sharma 👨💻

🚀 Android Developer | Problem Solver | Builder
📍 Andhra Pradesh, India

I build real-world Android applications that solve meaningful problems.
Passionate about Kotlin, Jetpack Compose, Firebase & clean UI experiences.
Currently pursuing B.Tech CSE and open to internships & full-time opportunities.`;

    case "whoami":
      return `
Kirti Raj Sharma 🚀
Android Developer | Builder | Tech Enthusiast
📍 Andhra Pradesh, India
📧 kirtirajsharma618@gmail.com`;

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
💼 Experience:

  PARK360 · Software Developer Intern
  May 2025 – Jul 2025 · 3 mos · Surat, Gujarat (On-site)
  → Android development using Kotlin, Jetpack, Firebase
  → Android SDK, Testing, Application Development

  ALQUILAR HIVE LLP · Android Developer Intern
  May 2024 – Jun 2024 · 2 mos · New Delhi (Remote)
  → Android Development, Kotlin, Firebase, Android Studio
  → UI design, SDK integration, testing

  Google Developer Groups on Campus - CVRGU
  → Android Development Domain Lead
    Oct 2025 – Present · 8 mos
  → Android Development Core Organizer
    Sep 2024 – Oct 2025 · 1 yr 2 mos

  Institution's Innovation Council - CGU
  → Vice President
    Jul 2025 – Present · 11 mos
  → Management
    Nov 2024 – Jul 2025 · 9 mos

  Entrepreneurship Development Cell - CGU
  → Student Body Convener
    Jan 2025 – Oct 2025 · 10 mos

  CSE@CGU-Odisha
  → Joint Secretary
    Oct 2025 – Present · 8 mos`;

    case "education":
      return `
🎓 Education:

  B.Tech — Computer Science & Engineering
  CVR College of Engineering, Hyderabad
  → Currently pursuing (2023 – 2027)
  → Relevant: DSA, OS, DBMS, Networks, OOP, AI/ML`;

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
📬 Contact:

  Email    → kirtirajsharma618@gmail.com
  GitHub   → https://github.com/kIRTIRAJSHARMA
  LinkedIn → https://www.linkedin.com/in/kirti-raj-sharma-a619572ab/`;

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
        .          kirti@portfolio
       .#.          ───────────────
      .###.         OS      : Portfolio OS v2.5.1
     .#####.        Shell   : zsh 5.9
    .#######.       Theme   : Matrix Green
   .#########.      Lang    : Kotlin / Java / JS
  .###########.     Tools   : Android Studio, VS Code
 .#############.    GitHub  : kIRTIRAJSHARMA
  #############     College : CVR College of Engineering
   ###########      Uptime  : Always building 🚀
    #########       Memory  : Infinite ideas
     #######        CPU     : Powered by caffeine ☕`;

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
🔐 Authenticating...
██████████ 100%

✅ Access Granted!

💼 Congratulations! You just hired the best developer 😎
📧 Reach out: kirtirajsharma618@gmail.com`;

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
