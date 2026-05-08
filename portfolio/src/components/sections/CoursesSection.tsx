"use client";
import { motion } from "framer-motion";
import { COURSES, ACHIEVEMENTS } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GraduationCap, Briefcase, BookOpen, Trophy } from "lucide-react";

const TYPE_CONFIG = {
  graduation: { icon: GraduationCap, color: "#e8ff47", label: "Graduação" },
  experience: { icon: Briefcase, color: "#7dd3fc", label: "Experiência" },
  course: { icon: BookOpen, color: "#a78bfa", label: "Curso" },
};

export function CoursesSection() {
  return (
    <section id="courses" style={{ borderTop: "0.5px solid var(--border)" }}>
      <div className="container">
        <SectionTitle
          label="// formação"
          title="Trajetória e conquistas"
          subtitle="Cursos, formação acadêmica e marcos da minha jornada."
        />

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "80px", alignItems: "start" }}>
          {/* Timeline */}
          <div>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", marginBottom: "32px" }}>
              FORMAÇÃO E EXPERIÊNCIA
            </h3>

            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: "15px", top: "8px", bottom: "8px", width: "1px", background: "var(--border)" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {COURSES.map((course, i) => {
                  const config = TYPE_CONFIG[course.type as keyof typeof TYPE_CONFIG];
                  const Icon = config.icon;
                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      style={{ display: "flex", gap: "24px", paddingBottom: "40px" }}
                    >
                      {/* Dot */}
                      <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
                        <div style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "var(--bg-card)",
                          border: `1px solid ${config.color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                          <Icon size={13} color={config.color} />
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ paddingTop: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: config.color, letterSpacing: "0.1em", border: `0.5px solid ${config.color}`, padding: "2px 8px" }}>
                            {config.label}
                          </span>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                            {course.year}
                          </span>
                        </div>
                        <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: "4px", letterSpacing: "-0.01em" }}>
                          {course.title}
                        </h4>
                        <p style={{ fontSize: "0.8rem", color: "var(--accent)", marginBottom: "6px" }}>
                          {course.institution}
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                          {course.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", marginBottom: "32px" }}>
              CONQUISTAS
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {ACHIEVEMENTS.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{
                    padding: "20px 24px",
                    border: "0.5px solid var(--border)",
                    background: "var(--bg-card)",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>{ach.icon}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <h4 style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontWeight: 700, color: "var(--text)" }}>
                        {ach.title}
                      </h4>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>
                        {ach.year}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  marginTop: "8px",
                  padding: "24px",
                  border: "0.5px solid var(--accent)",
                  background: "rgba(232,255,71,0.03)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <Trophy size={16} color="var(--accent)" />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.1em" }}>
                    EM NÚMEROS
                  </span>
                </div>
                {[
                  { label: "Projetos concluídos", value: "3+" },
                  { label: "Cursos finalizados", value: "4+" },
                  { label: "Tecnologias dominadas", value: "8+" },
                  { label: "Commits no GitHub", value: "100+" },
                ].map((stat) => (
                  <div key={stat.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "0.5px solid var(--border)" }}>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{stat.label}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent)", fontSize: "1rem" }}>{stat.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #courses .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
