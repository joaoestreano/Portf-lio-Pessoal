"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";
import { Github, ExternalLink } from "lucide-react";

const FILTERS = [
  { label: "Todos", value: "all" },
  { label: "Individual", value: "individual" },
  { label: "Em grupo", value: "group" },
];

export function ProjectsSection() {
  const [active, setActive] = useState("all");

  const filtered = PROJECTS.filter((p) => active === "all" || p.type === active);

  return (
    <section id="projects" style={{ borderTop: "0.5px solid var(--border)" }}>
      <div className="container">
        <SectionTitle
          label="// projetos"
          title="O que eu construí"
          subtitle="Projetos individuais e colaborativos ao longo da minha jornada."
        />

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "48px" }}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                padding: "8px 20px",
                border: `0.5px solid ${active === f.value ? "var(--accent)" : "var(--border)"}`,
                background: active === f.value ? "var(--accent)" : "transparent",
                color: active === f.value ? "#080808" : "var(--text-muted)",
                cursor: "pointer",
                transition: "all 0.2s",
                fontWeight: active === f.value ? 600 : 400,
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "0.5px solid var(--border)",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                style={{
                  background: "var(--bg-card)",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#181818";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                }}
              >
                {/* Featured badge */}
                {project.featured && (
                  <span style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    border: "0.5px solid var(--accent)",
                    padding: "2px 8px",
                  }}>
                    DESTAQUE
                  </span>
                )}

                {/* Type badge */}
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: project.type === "group" ? "#7dd3fc" : "var(--text-muted)",
                  letterSpacing: "0.1em",
                }}>
                  {project.type === "group" ? "// grupo" : "// individual"}
                </span>

                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                    marginBottom: "10px",
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {project.description}
                  </p>
                </div>

                {/* Stack tags */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "16px", marginTop: "auto", paddingTop: "8px", borderTop: "0.5px solid var(--border)" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                  >
                    <Github size={14} />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <a
            href="https://github.com/joaoestreano"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            Ver todos no GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
