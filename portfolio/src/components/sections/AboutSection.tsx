"use client";
import { motion } from "framer-motion";
import { PROFILE, SKILLS } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";

const SKILL_CATEGORIES = ["Frontend", "Backend", "Database", "Design", "Ferramentas"];

export function AboutSection() {
  return (
    <section id="about" style={{ borderTop: "0.5px solid var(--border)" }}>
      <div className="container">
        <SectionTitle
          label="// sobre mim"
          title="Quem sou eu"
          subtitle="Um pouco sobre minha trajetória e as ferramentas que uso."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {PROFILE.bio.split("\n").filter(Boolean).map((line, i) => (
                <p key={i} style={{ color: i === 0 ? "var(--text)" : "var(--text-muted)", fontSize: i === 0 ? "1.1rem" : "0.95rem", lineHeight: 1.8 }}>
                  {line}
                </p>
              ))}
            </div>

            {/* Info grid */}
            <div
              style={{
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                padding: "24px",
                border: "0.5px solid var(--border)",
                background: "var(--bg-card)",
              }}
            >
              {[
                { label: "Localização", value: PROFILE.location },
                { label: "Status", value: "Disponível" },
                { label: "Foco", value: "Full Stack" },
                { label: "Idiomas", value: "PT-BR, EN" },
              ].map((item) => (
                <div key={item.label}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--accent)", letterSpacing: "0.1em", display: "block", marginBottom: "4px" }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text)" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", marginBottom: "28px" }}>
              TECNOLOGIAS
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {SKILL_CATEGORIES.map((cat) => {
                const catSkills = SKILLS.filter((s) => s.category === cat);
                if (!catSkills.length) return null;
                return (
                  <div key={cat}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "12px" }}>
                      {cat}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {catSkills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07, duration: 0.5 }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                            <span style={{ fontSize: "0.85rem", color: "var(--text)" }}>{skill.name}</span>
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                              {skill.level}%
                            </span>
                          </div>
                          <div style={{ height: "2px", background: "var(--border)", position: "relative", overflow: "hidden" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                              style={{ height: "100%", background: "var(--accent)", position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
