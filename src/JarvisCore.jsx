import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const BOOT_SEQUENCE = [
  {
    text: "INITIALIZING JARVIS CORE...",
    state: "INITIALIZING",
  },
  {
    text: "LOADING NEURAL ENGINE...",
    state: "NEURAL ENGINE",
  },
  {
    text: "CONNECTING VOICE INTERFACE...",
    state: "VOICE INTERFACE",
  },
  {
    text: "CALIBRATING AUTOMATION...",
    state: "AUTOMATION",
  },
  {
    text: "CHECKING SYSTEMS...",
    state: "SYSTEM CHECK",
  },
  {
    text: "ALL SYSTEMS OPERATIONAL",
    state: "ONLINE",
  },
  {
    text: "AWAITING COMMAND...",
    state: "READY",
  },
];

const SYSTEMS = [
  ["NEURAL ENGINE", "ONLINE"],
  ["VOICE INTERFACE", "ONLINE"],
  ["AUTOMATION", "ONLINE"],
  ["NOTIFICATIONS", "READY"],
];

function JarvisCore() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [systemReady, setSystemReady] = useState(false);
  const [commandOutput, setCommandOutput] = useState("AWAITING COMMAND...");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const message = BOOT_SEQUENCE[lineIndex].text;
    let timer;

    if (typedText.length < message.length) {
      timer = window.setTimeout(() => {
        setTypedText(message.slice(0, typedText.length + 1));
      }, 32);
    } else {
      timer = window.setTimeout(() => {
        const nextIndex = (lineIndex + 1) % BOOT_SEQUENCE.length;

        setLineIndex(nextIndex);
        setTypedText("");

        if (nextIndex === BOOT_SEQUENCE.length - 1) {
          setSystemReady(true);
        }
      }, lineIndex === BOOT_SEQUENCE.length - 1 ? 2200 : 900);
    }

    return () => window.clearTimeout(timer);
  }, [isActive, lineIndex, typedText]);

  const currentState = BOOT_SEQUENCE[lineIndex].state;
  const ready = currentState === "ONLINE" || currentState === "READY";

  const COMMANDS = {
    PROJECTS: "6 PROJECT SYSTEMS LOADED",
    ABOUT: "SOFTWARE + AI + PRODUCT BUILDER",
    STACK: "PYTHON / DJANGO / REACT / AI / WEB",
    CONTACT: "elishasotrawork@gmail.com",
  };

  const runCommand = (command) => {
    if (!systemReady) return;
    setCommandOutput(COMMANDS[command]);
  };

  return (
    <div ref={sectionRef} className="jarvis-window">
      <div className="window-bar">
        <span />
        <span />
        <span />

        <small>JARVIS_CORE</small>
      </div>

      <div
        className={`jarvis-screen ${
          ready ? "jarvis-system-ready" : ""
        }`}
      >
        <div className="jarvis-core-status">
          <span className={ready ? "core-status-dot ready" : "core-status-dot"} />
          {isActive ? currentState : "STANDBY"}
        </div>

        <motion.div
          className="jarvis-circle"
          animate={
            isActive
              ? {
                  scale: ready ? [1, 1.06, 1] : [1, 1.12, 1],
                  opacity: ready ? [0.8, 1, 0.8] : [0.5, 1, 0.5],
                }
              : {
                  scale: 1,
                  opacity: 0.45,
                }
          }
          transition={{
            duration: ready ? 2.4 : 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="jarvis-core-inner"
            animate={
              isActive
                ? {
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            AI
          </motion.div>
        </motion.div>

        <div className="jarvis-system-grid">
          {SYSTEMS.map(([label, status], index) => {
            const itemReady =
              systemReady ||
              index <= Math.min(lineIndex, SYSTEMS.length - 1);

            return (
              <div
                className={`jarvis-system-row ${
                  itemReady ? "online" : ""
                }`}
                key={label}
              >
                <span>{label}</span>

                <div className="jarvis-system-meter">
                  <motion.i
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: itemReady ? 1 : 0.18,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                    }}
                  />
                </div>

                <b>
                  {itemReady
                    ? status
                    : "LOADING"}
                </b>
              </div>
            );
          })}
        </div>

        <div className="jarvis-command">
          <span>&gt;</span>

          <span className="jarvis-typed">
            {isActive ? typedText : "SCROLL TO INITIALIZE JARVIS CORE"}
            <i />
          </span>
        </div>

        <div className="jarvis-command-output" aria-live="polite">
          {systemReady ? commandOutput : "COMMANDS LOCKED / SYSTEM BOOTING"}
        </div>

        <div className="jarvis-command-buttons">
          {Object.keys(COMMANDS).map((command) => (
            <button
              type="button"
              key={command}
              onClick={() => runCommand(command)}
              disabled={!systemReady}
            >
              {command}
            </button>
          ))}
        </div>

        <div className="jarvis-lines">
          <span />
          <span />
          <span />
        </div>

        <div className="jarvis-footer-status">
          <span>
            CORE {isActive ? "ACTIVE" : "STANDBY"}
          </span>

          <span>
            {ready ? "SYSTEMS NOMINAL" : "PROCESSING"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default JarvisCore;
