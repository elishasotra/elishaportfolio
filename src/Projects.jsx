import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import projects from "./data/projects";

function ProjectVisual({ project }) {
  const visualRef = useRef(null);
  const isInView = useInView(visualRef, { once: false, amount: 0.45 });

  const visualProps = {
    ref: visualRef,
    initial: { opacity: 0, scale: 0.92, y: 18 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  if (project.id === "01") {
    return (
      <motion.div className={`project-visual project-visual-neural ${isInView ? "is-active" : ""}`} {...visualProps}>
        <div className="visual-topline">
          <span>NEURAL ENGINE</span>
          <b>{isInView ? "ACTIVE" : "STANDBY"}</b>
        </div>
        <div className="neural-field">
          <i className="neural-node n1" />
          <i className="neural-node n2" />
          <i className="neural-node n3" />
          <i className="neural-node n4" />
          <i className="neural-node n5" />
          <i className="neural-node n6" />
          <span className="neural-link l1" />
          <span className="neural-link l2" />
          <span className="neural-link l3" />
          <span className="neural-link l4" />
          <span className="neural-link l5" />
          <span className="neural-link l6" />
          <div className="neural-core">AI</div>
        </div>
        <div className="visual-readout">
          <span>CONTEXT</span>
          <span>REASONING</span>
          <span>RESPONSE</span>
        </div>
      </motion.div>
    );
  }

  if (project.id === "02") {
    return (
      <motion.div className={`project-visual project-visual-rag ${isInView ? "is-active" : ""}`} {...visualProps}>
        <div className="visual-topline">
          <span>DOCUMENT_001.PDF</span>
          <b>{isInView ? "RAG" : "STANDBY"}</b>
        </div>
        <div className="scan-document">
          <div className="scan-line" />
          <span className="doc-line long" />
          <span className="doc-line" />
          <span className="doc-line short" />
          <span className="doc-line long" />
          <span className="doc-line" />
          <span className="doc-line short" />
        </div>
        <div className="rag-flow">
          <span>UPLOAD</span>
          <i>→</i>
          <span>INDEX</span>
          <i>→</i>
          <span>ASK</span>
        </div>
      </motion.div>
    );
  }

  if (project.id === "03") {
    return (
      <motion.div className={`project-visual project-visual-pg ${isInView ? "is-active" : ""}`} {...visualProps}>
        <div className="visual-topline">
          <span>PROPERTY NETWORK</span>
          <b>{isInView ? "LIVE" : "STANDBY"}</b>
        </div>
        <div className="property-track">
          {["JP NAGAR", "JAYANAGAR", "BELLANDUR"].map((location, index) => (
            <div className="property-mini-card" key={location}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{location}</strong>
              <small>PG / AVAILABLE</small>
            </div>
          ))}
        </div>
        <div className="property-signal">
          <span />
          PROPERTY SYSTEM ONLINE
        </div>
      </motion.div>
    );
  }

  if (project.id === "04") {
    return (
      <motion.div className={`project-visual project-visual-piano ${isInView ? "is-active" : ""}`} {...visualProps}>
        <div className="visual-topline">
          <span>AUDIO ENGINE</span>
          <b>{isInView ? "61 KEY" : "STANDBY"}</b>
        </div>
        <div className="piano-visual">
          {Array.from({ length: 18 }).map((_, index) => (
            <i key={index} style={{ "--key-index": index }} />
          ))}
        </div>
        <div className="audio-meter">
          {Array.from({ length: 14 }).map((_, index) => (
            <i key={index} style={{ "--bar-index": index }} />
          ))}
        </div>
        <div className="visual-readout">
          <span>POLYPHONY</span>
          <span>WEB AUDIO</span>
          <span>READY</span>
        </div>
      </motion.div>
    );
  }

  if (project.id === "05") {
    return (
      <motion.div className={`project-visual project-visual-face ${isInView ? "is-active" : ""}`} {...visualProps}>
        <div className="visual-topline">
          <span>VISION SYSTEM</span>
          <b>{isInView ? "SCANNING" : "STANDBY"}</b>
        </div>
        <div className="face-scan">
          <span className="corner c1" />
          <span className="corner c2" />
          <span className="corner c3" />
          <span className="corner c4" />
          <div className="face-grid">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="face-box">
            <span>FACE DETECTED</span>
          </div>
          <div className="scan-beam" />
        </div>
        <div className="visual-readout">
          <span>OPENCV</span>
          <span>IDENTITY</span>
          <span>ATTENDANCE</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className={`project-visual project-visual-terminal ${isInView ? "is-active" : ""}`} {...visualProps}>
      <div className="visual-topline">
        <span>BINANCE_FUTURES</span>
        <b>{isInView ? "TESTNET" : "STANDBY"}</b>
      </div>
      <div className="terminal-lines">
        <span><b>$</b> CONNECT BINANCE_API</span>
        <span><b>›</b> CONNECTION ESTABLISHED</span>
        <span><b>$</b> ORDER / MARKET</span>
        <span className="terminal-progress"><i /></span>
        <span className="terminal-success"><b>›</b> ORDER FILLED</span>
      </div>
      <div className="visual-readout">
        <span>PYTHON</span>
        <span>API</span>
        <span>CLI</span>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-topline">
        <span>04 / SELECTED WORK</span>
        <span>
          PROJECTS_{String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="projects-heading">
        <div>
          <h2>
            THINGS
            <br />
            <span>I BUILD.</span>
          </h2>
        </div>

        <p>
          A collection of software, AI systems, interactive
          applications and products built while exploring
          technology and solving real problems.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            aria-labelledby={`project-title-${project.id}`}
            className={`project-card ${
              project.featured ? "project-card-featured" : ""
            }`}
            key={project.id}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ x: 5 }}
          >
            <div className="project-number">
              <span>{project.id}</span>

              {project.featured && <small>FEATURED</small>}
            </div>

            <div className="project-main">
              <div className="project-meta">
                <span className="project-category">{project.category}</span>

                <span className="project-status">
                  <i />
                  {project.status || "COMPLETED"}
                </span>
              </div>

              <h3 id={`project-title-${project.id}`}>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.flow && (
                <div className="project-flow" aria-label={`${project.title} build flow`}>
                  {project.flow.map((step, stepIndex) => (
                    <span key={step}>
                      {step}
                      {stepIndex < project.flow.length - 1 && <i aria-hidden="true">→</i>}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-links">
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GitBranch size={15} />
                    <span>SOURCE</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}

                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={15} />
                    <span>LIVE PROJECT</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>

            <ProjectVisual project={project} />

            <div className="project-actions">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  title="GitHub Repository"
                >
                  <GitBranch size={18} />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live project`}
                  title="Live Project"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            <div className="project-hover-arrow">
              <ArrowUpRight size={28} />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="projects-footer">
        <span>END OF SELECTED WORK</span>
        <span>
          {String(projects.length).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

export default Projects;
