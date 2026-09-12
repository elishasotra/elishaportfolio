import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  ExternalLink,
} from "lucide-react";
import projects from "./data/projects";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-topline">
        <span>04 / SELECTED WORK</span>
        <span>PROJECTS_06</span>
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
            className="project-card"
            key={project.id}
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.06,
            }}
          >
            <div className="project-number">
              {project.id}
            </div>

            <div className="project-main">
              <div className="project-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              {project.github &&
                project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
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
                  rel="noreferrer"
                  aria-label={`${project.title} live website`}
                  title="Live Project"
                >
                  <ExternalLink size={18} />
                </a>
              )}

              {!project.github ||
              project.github === "#" ? null : null}
            </div>

            <div className="project-hover-arrow">
              <ArrowUpRight size={28} />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="projects-footer">
        <span>END OF SELECTED WORK</span>
        <span>06 / 06</span>
      </div>
    </section>
  );
}

export default Projects;