import { useState, useEffect, useRef } from "react";
import CommandInput from "./CommandInput";
import GitHubProjects from "./GitHubProjects";
import GitHubStats from "./GitHubStats";
import { handleCommand } from "../utils/commands";

function MatrixRain() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / 20);
    const drops = Array(cols).fill(1);
    const chars = "アイウエオカキクケコ01アBCDEF";
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff9f22";
      ctx.font = "14px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const interval = setInterval(draw, 60);
    return () => clearInterval(interval);
  }, []);
  return <canvas ref={canvasRef} className="matrix-canvas" />;
}

const ASCII_BANNER =
`██╗  ██╗██╗██████╗ ████████╗██╗    ██████╗  █████╗      ██╗
██║ ██╔╝██║██╔══██╗╚══██╔══╝██║    ██╔══██╗██╔══██╗     ██║
█████╔╝ ██║██████╔╝   ██║   ██║    ██████╔╝███████║     ██║
██╔═██╗ ██║██╔══██╗   ██║   ██║    ██╔══██╗██╔══██║██   ██║
██║  ██╗██║██║  ██║   ██║   ██║    ██║  ██║██║  ██║╚█████╔╝
╚═╝  ╚═╝╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝

███████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ █████╗
██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔══██╗
███████╗███████║███████║██████╔╝██╔████╔██║███████║
╚════██║██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║
███████║██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝`;

export default function Terminal() {
  const [bootLines, setBootLines] = useState([]);
  const [history, setHistory] = useState([]);
  const [ready, setReady] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [bootLines, history]);

  useEffect(() => {
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const boot = [
      "Initializing system...",
      "✓ Loading skills module",
      "✓ Mounting projects database",
      "✓ Starting portfolio daemon",
      "✓ System ready"
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i >= boot.length) { clearInterval(interval); return; }
      setBootLines(prev => [...prev, boot[i]]);
      i++;
      if (i === boot.length) { clearInterval(interval); setReady(true); }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const runCommand = (cmd) => {
    const output = handleCommand(cmd);
    if (output === "__CLEAR__") { setHistory([]); return; }
    if (output === "__BANNER__") {
      setHistory(prev => [...prev, { type: "input", text: cmd }, { type: "banner" }]);
      return;
    }
    if (output === "__STATS__") {
      setHistory(prev => [...prev, { type: "input", text: cmd }, { type: "stats" }]);
      return;
    }
    if (output === "__RESUME__") {
      setHistory(prev => [...prev, { type: "input", text: cmd }, { type: "resume" }]);
      return;
    }
    if (output === "__PROJECTS__") {
      setHistory(prev => [...prev, { type: "input", text: cmd }, { type: "projects" }]);
      return;
    }
    setHistory(prev => [...prev,
      { type: "input", text: cmd },
      { type: "output", text: output }
    ]);
  };

  return (
    <>
      <MatrixRain />
      <div className="scanlines" />
      <div className="terminal-wrapper">
        <div className="terminal-box">

          {/* HEADER */}
          <div className="terminal-header">
            <div className="dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <div className="title">kirti@portfolio ~ bash</div>
            <div className="title">zsh 5.9</div>
          </div>

          {/* BODY */}
          <div className="terminal-body" ref={bodyRef}>

            {/* HERO */}
            <div className="hero">
              <div className="avatar-wrap">
                <img src="/assets/images/pixel-avatar.png" className="avatar-img" alt="avatar" />
                <div className="avatar-ring"></div>
              </div>
              <div className="hero-text">
                <pre className={`ascii${glitch ? " glitch" : ""}`}>{ASCII_BANNER}</pre>
                <p className="blue">Developer • Builder • Open to opportunities</p>
                <p className="dim">Portfolio OS v2.5.1</p>
                <div className="social-links">
                  <a href="https://github.com/kIRTIRAJSHARMA" target="_blank" rel="noreferrer" className="social-btn">
                    <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/kirti-raj-sharma-a619572ab/" target="_blank" rel="noreferrer" className="social-btn linkedin">
                    <svg height="14" width="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="divider" />

            {/* GITHUB CONTRIBUTION GRAPH */}
            <div className="contrib-section">
              <p className="contrib-title">⬛ GitHub Contributions</p>
              <div className="contrib-graph">
                <img src="https://ghchart.rshah.org/00ff9f/kIRTIRAJSHARMA" alt="GitHub contribution graph" className="contrib-img" />
              </div>
            </div>

            <div className="divider" />

            {/* BOOT LOGS */}
            <div className="boot">
              {bootLines.map((line, i) => (
                <p key={i} className={line?.startsWith("✓") ? "boot-ok" : "boot-log"}>{line}</p>
              ))}
            </div>

            {/* COMMAND HISTORY */}
            <div className="history">
              {history.map((item, i) => (
                <div key={i}>
                  {item.type === "input" && (
                    <p className="cmd-input">
                      <span className="prompt">kirti@portfolio</span>
                      <span className="prompt-sym"> $ </span>
                      <span className="cmd-text">{item.text}</span>
                    </p>
                  )}
                  {item.type === "output" && (
                    <pre className="cmd-output">{item.text}</pre>
                  )}
                  {item.type === "banner" && (
                    <pre className="ascii cmd-output">{ASCII_BANNER}</pre>
                  )}
                  {item.type === "stats" && (
                    <div className="cmd-output">
                      <p className="resume-label">📊 GitHub Stats — kIRTIRAJSHARMA</p>
                      <GitHubStats />
                    </div>
                  )}
                  {item.type === "resume" && (
                    <div className="cmd-output resume-output">
                      <p className="resume-label">📄 Resume — Kirti Raj Sharma</p>
                      <iframe
                        src="https://drive.google.com/file/d/1FqZ8Emz-6w_tUSLfbNLsyuYvzt-yFIPF/preview"
                        className="resume-frame"
                        allow="autoplay"
                        title="Resume"
                      />
                      <a href="https://drive.google.com/file/d/1FqZ8Emz-6w_tUSLfbNLsyuYvzt-yFIPF/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-link">↗ Open in full screen</a>
                    </div>
                  )}
                  {item.type === "projects" && (
                    <div className="cmd-output">
                      <p className="resume-label">📁 GitHub Repositories — kIRTIRAJSHARMA</p>
                      <GitHubProjects />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* INPUT */}
            {ready && (
              <>
                <p className="hint">Type <span>help</span> to see available commands. Press <span>Tab</span> to autocomplete.</p>
                <CommandInput onCommand={runCommand} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
