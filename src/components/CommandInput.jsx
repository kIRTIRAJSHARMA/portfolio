import { useState, useRef } from "react";
import { COMMANDS } from "../utils/commands";

const sound = new Audio("/assets/images/keyboardsound.mp3");
sound.volume = 0.3;

export default function CommandInput({ onCommand }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [suggestion, setSuggestion] = useState("");
  const inputRef = useRef(null);

  const playSound = () => {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  };

  const getSuggestion = (val) => {
    if (!val) return "";
    const match = COMMANDS.find(c => c.startsWith(val.toLowerCase()) && c !== val.toLowerCase());
    return match ? match : "";
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    setSuggestion(getSuggestion(val));
    playSound();
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && input.trim()) {
      onCommand(input.trim());
      setHistory(prev => [input.trim(), ...prev]);
      setInput("");
      setSuggestion("");
      setHistIndex(-1);
    }

    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
        setSuggestion("");
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.min(histIndex + 1, history.length - 1);
      setHistIndex(newIndex);
      setInput(history[newIndex] || "");
      setSuggestion("");
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.max(histIndex - 1, -1);
      setHistIndex(newIndex);
      setInput(newIndex === -1 ? "" : history[newIndex] || "");
      setSuggestion("");
    }
  };

  return (
    <div className="input-wrap">
      <div className="input-line">
        <span className="prompt">kirti@portfolio</span>
        <span className="prompt-sym"> $ </span>
        <div className="input-field-wrap">
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={handleChange}
            onKeyDown={handleKey}
            spellCheck={false}
            autoComplete="off"
          />
          {suggestion && (
            <span className="suggestion">{suggestion.slice(input.length)}</span>
          )}
        </div>
      </div>
      {suggestion && (
        <p className="tab-hint">Press <kbd>Tab</kbd> to complete: <span>{suggestion}</span></p>
      )}
    </div>
  );
}
