import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Code2,
  ExternalLink,
  GitBranch,
  Mail,
  Terminal,
  Zap,
} from "lucide-react";

import Projects from "./Projects";
import "./App.css";

function App() {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const terminalText =
    "SYSTEM READY // BUILDING INTELLIGENT SYSTEMS";

  const roles = [
    "AI / ML DEVELOPER",
    "WEB DESIGNER",
    "FULL-STACK BUILDER",
    "AUTOMATION BUILDER",
  ];

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(terminalText.slice(0, index));
      index += 1;

      if (index > terminalText.length) {
        clearInterval(typing);
      }
    }, 45);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => clearInterval(roleTimer);
  }, []);

  const handleMouseMove = (event) => {
    document.documentElement.style.setProperty(
      "--mouse-x",
      `${event.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${event.clientY}px`
    );
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="portfolio" onMouseMove={handleMouseMove}>
      <div className="mouse-glow" />
      <div className="grid-background" />

      {/* NAVBAR */}
      <nav className="navbar">
        <button
          className="logo"
          onClick={() => scrollToSection("hero")}
          aria-label="Go to top"
        >
          ES.
        </button>

        <div className="nav-links">
          <button onClick={() => scrollToSection("about")}>
            ABOUT
          </button>

          <button onClick={() => scrollToSection("stack")}>
            STACK
          </button>

          <button onClick={() => scrollToSection("projects")}>
            PROJECTS
          </button>

          <button onClick={() => scrollToSection("contact")}>
            CONTACT
          </button>
        </div>

        <div className="nav-status">
          <span className="status-dot" />
          SYSTEM ONLINE
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="terminal-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <Terminal size={16} />

            <span>
              {typedText}
              <span className="cursor">▋</span>
            </span>
          </motion.div>

          <motion.p
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
              letterSpacing: "-2px",
            }}
            animate={{
              opacity: 1,
              y: 0,
              letterSpacing: "-9px",
            }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            ELISHA
            <br />
            <span>SOTRA</span>
          </motion.h1>

          <motion.div
            className="role-wrapper"
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
          >
            <span className="role-prefix">&gt;</span>

            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[roleIndex]}
                initial={{
                  opacity: 0,
                  y: 12,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="description"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.05,
            }}
          >
            I build intelligent systems, web applications
            <br className="desktop-break" />
            and automation tools that turn ideas into products.
          </motion.p>

          <motion.div
            className="technologies"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
          >
            <span>PYTHON</span>
            <span>DJANGO</span>
            <span>REACT</span>
            <span>AI / ML</span>
          </motion.div>

          <motion.div
            className="actions"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.35,
            }}
          >
            <motion.button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown size={18} />
            </motion.button>

            <motion.a
              href="https://github.com/elishasotra"
              target="_blank"
              rel="noreferrer"
              className="github-button"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <GitBranch size={19} />
              GITHUB
              <ArrowUpRight size={15} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* AI CORE */}
        <motion.div
          className="hero-orbit"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 0.4,
          }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <motion.div
            className="core"
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                "0 0 30px rgba(255,255,255,0.05)",
                "0 0 80px rgba(255,255,255,0.15)",
                "0 0 30px rgba(255,255,255,0.05)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>AI</span>
          </motion.div>

          <div className="core-ring" />

          <motion.div
            className="orbit-label label-one"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            NEURAL
          </motion.div>

          <motion.div
            className="orbit-label label-two"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            SYSTEM
          </motion.div>

          <motion.div
            className="orbit-label label-three"
            animate={{
              x: [0, 6, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
            }}
          >
            01
          </motion.div>
        </motion.div>

        <div className="hero-side-info">
          <span>BASED IN</span>
          <strong>INDIA</strong>
        </div>

        <div className="hero-index">
          01 <span>/</span> 07
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="section-topline">
          <span>02 / ABOUT</span>
          <span>PROFILE_01</span>
        </div>

        <div className="about-grid">
          <div>
            <h2 className="massive-heading">
              I BUILD
              <br />
              <span>SYSTEMS.</span>
            </h2>
          </div>

          <div className="about-copy">
            <div className="about-icon">
              <Brain size={24} />
            </div>

            <p className="about-lead">
              I'm a software developer focused on building
              intelligent, practical and interactive digital
              products.
            </p>

            <p>
              My work sits at the intersection of software
              development, artificial intelligence, web
              applications and automation.
            </p>

            <p>
              I enjoy taking an idea from an early concept,
              turning it into a working system and continuously
              improving the experience around it.
            </p>

            <div className="about-stats">
              <div>
                <strong>06</strong>
                <span>PROJECTS</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>FOCUS</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>IDEAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="stack-section" id="stack">
        <div className="section-topline">
          <span>03 / TECHNOLOGY</span>
          <span>STACK_01</span>
        </div>

        <div className="stack-heading">
          <h2>
            TOOLS
            <br />
            <span>I USE.</span>
          </h2>

          <p>
            A growing toolkit built around software engineering,
            AI and product development.
          </p>
        </div>

        <div className="stack-grid">
          <motion.div
            className="stack-card"
            whileHover={{ y: -5 }}
          >
            <div className="stack-card-top">
              <Brain size={20} />
              <span>01</span>
            </div>

            <h3>AI / ML</h3>

            <div className="stack-items">
              <span>PYTHON</span>
              <span>MACHINE LEARNING</span>
              <span>NLP</span>
              <span>RAG</span>
              <span>COMPUTER VISION</span>
            </div>
          </motion.div>

          <motion.div
            className="stack-card"
            whileHover={{ y: -5 }}
          >
            <div className="stack-card-top">
              <Code2 size={20} />
              <span>02</span>
            </div>

            <h3>BACKEND</h3>

            <div className="stack-items">
              <span>DJANGO</span>
              <span>DJANGO REST</span>
              <span>FLASK</span>
              <span>REST API</span>
              <span>SQL</span>
            </div>
          </motion.div>

          <motion.div
            className="stack-card"
            whileHover={{ y: -5 }}
          >
            <div className="stack-card-top">
              <Zap size={20} />
              <span>03</span>
            </div>

            <h3>FRONTEND</h3>

            <div className="stack-items">
              <span>REACT</span>
              <span>JAVASCRIPT</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>TAILWIND</span>
            </div>
          </motion.div>

          <motion.div
            className="stack-card"
            whileHover={{ y: -5 }}
          >
            <div className="stack-card-top">
              <GitBranch size={20} />
              <span>04</span>
            </div>

            <h3>TOOLS</h3>

            <div className="stack-items">
              <span>GIT</span>
              <span>GITHUB</span>
              <span>VSCODE</span>
              <span>STREAMLIT</span>
              <span>VERCEL</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <Projects />

      {/* JARVIS */}
      <section className="jarvis-section" id="jarvis">
        <div className="section-topline">
          <span>05 / CURRENTLY BUILDING</span>
          <span>PROJECT_07</span>
        </div>

        <div className="jarvis-layout">
          <div className="jarvis-copy">
            <div className="jarvis-status">
              <span className="status-dot" />
              IN DEVELOPMENT
            </div>

            <h2>
              JARVIS
              <br />
              <span>PERSONAL AI.</span>
            </h2>

            <p className="jarvis-lead">
              A personal AI assistant designed to move beyond
              simple chat and become an intelligent interface
              between me and my digital world.
            </p>

            <p>
              The long-term vision is a system capable of
              voice interaction, useful notifications,
              information retrieval and automation across
              different devices and services.
            </p>

            <div className="jarvis-tags">
              <span>VOICE AI</span>
              <span>AUTOMATION</span>
              <span>AI AGENTS</span>
              <span>NOTIFICATIONS</span>
            </div>
          </div>

          <div className="jarvis-interface">
            <div className="jarvis-window">
              <div className="window-bar">
                <span />
                <span />
                <span />

                <small>JARVIS_CORE</small>
              </div>

              <div className="jarvis-screen">
                <div className="jarvis-circle">
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                    }}
                  >
                    AI
                  </motion.div>
                </div>

                <div className="jarvis-command">
                  <span>&gt;</span>
                  SYSTEM INITIALIZING...
                </div>

                <div className="jarvis-lines">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GITHUB */}
      <section className="github-section" id="github">
        <div className="section-topline">
          <span>06 / OPEN SOURCE</span>
          <span>CODE_01</span>
        </div>

        <div className="github-content">
          <div>
            <h2>
              SEE THE
              <br />
              <span>CODE.</span>
            </h2>

            <p>
              Projects, experiments and development work are
              available on GitHub.
            </p>
          </div>

          <motion.a
            href="https://github.com/elishasotra"
            target="_blank"
            rel="noreferrer"
            className="github-large-button"
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <GitBranch size={28} />

            <span>
              <small>VIEW PROFILE</small>
              GITHUB
            </span>

            <ExternalLink size={20} />
          </motion.a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-background-text">
          LET'S BUILD
        </div>

        <div className="section-topline">
          <span>07 / CONTACT</span>
          <span>END_OF_PAGE</span>
        </div>

        <div className="contact-content">
          <p className="contact-label">HAVE AN IDEA?</p>

          <h2>
            LET'S
            <br />
            <span>BUILD IT.</span>
          </h2>

          <p className="contact-description">
            Whether it's an AI system, web application,
            automation tool or something completely new —
            let's create something useful.
          </p>

          <motion.a
            href="mailto:elishasotrawork@gmail.com"
            className="email-button"
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Mail size={20} />
            elishasotrawork@gmail.com
            <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <footer className="footer">
          <span>
            © {new Date().getFullYear()} ELISHA SOTRA
          </span>

          <span>
            BUILT WITH REACT + FRAMER MOTION
          </span>

          <a
            href="https://github.com/elishasotra"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
        </footer>
      </section>
    </main>
  );
}

export default App;