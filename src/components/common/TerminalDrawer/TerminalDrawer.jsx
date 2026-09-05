import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { portfolioConfig } from "../../../config/portfolio";
import "./TerminalDrawer.css";

export default function TerminalDrawer() {
  const { terminal, personal } = portfolioConfig;
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: terminal.welcomeMessage }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  // Global toggle listener (Ctrl+K, Cmd+K, and custom event)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomEvent = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-terminal", handleCustomEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-terminal", handleCustomEvent);
    };
  }, [isOpen]);

  // Focus input on open & scroll to bottom
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isOpen, history]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();

    // Add command to history
    setCmdHistory((prev) => [rawCmd, ...prev]);
    setHistoryIdx(-1);

    // Append user command line to display
    const newEntry = { type: "command", text: `${personal.terminalPrompt} ${rawCmd}` };

    if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (cmd === "exit") {
      setIsOpen(false);
      setInputVal("");
      return;
    }

    let responseText = "";
    if (cmd === "resume") {
      responseText = terminal.commands.resume;
      toast.info("Opening verified PDF resume...");
      window.open(personal.resumeUrl, "_blank", "noopener,noreferrer");
    } else if (terminal.commands[cmd]) {
      responseText = terminal.commands[cmd];
    } else {
      responseText = `command not found: "${rawCmd}". Type 'help' to see available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      newEntry,
      { type: "output", text: responseText }
    ]);

    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIdx < cmdHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal("");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={() => setIsOpen(false)}>
      <aside
        className="terminal-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Developer Interactive Terminal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="terminal-titlebar">
          <div className="terminal-title-text font-mono">
            // TERMINAL: {personal.terminalPrompt.replace("$", "")} (~/portfolio)
          </div>

          <div className="terminal-header-actions">
            <button
              type="button"
              className="terminal-header-btn font-mono"
              onClick={() => setHistory([])}
              title="Clear terminal output"
            >
              CLEAR
            </button>
            <button
              type="button"
              className="terminal-header-btn font-mono"
              onClick={() => {
                const response = terminal.commands.help;
                setHistory((prev) => [...prev, { type: "output", text: response }]);
              }}
              title="List commands"
            >
              HELP
            </button>
            <button
              type="button"
              className="terminal-header-btn terminal-header-btn--close font-mono"
              onClick={() => setIsOpen(false)}
              aria-label="Close terminal drawer"
            >
              ESC ✕
            </button>
          </div>
        </div>

        {/* Terminal Content Buffer */}
        <div className="terminal-buffer font-mono">
          {history.map((item, index) => (
            <div key={index} className={`terminal-line terminal-line--${item.type}`}>
              <pre className="terminal-pre">{item.text}</pre>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Command Input Prompt */}
        <form className="terminal-form" onSubmit={handleCommandSubmit}>
          <span className="terminal-form-prompt font-mono">{personal.terminalPrompt}</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-form-input font-mono"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help'..."
            autoComplete="off"
            spellCheck="false"
            aria-label="Terminal command input"
          />
        </form>
      </aside>
    </div>
  );
}
