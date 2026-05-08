"use client";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PROFILE } from "@/lib/data";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export function HeroSection() {
  const typed = useTypewriter(PROFILE.roles, 75, 2000);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.35,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Accent blob */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,255,71,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "64px" }}>
        {/* Mono label */}
        <motion.p {...fadeUp(0.1)} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "var(--accent)" }} />
          Disponível para oportunidades
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            color: "var(--text)",
            marginBottom: "8px",
          }}
        >
          {PROFILE.name}
          <span style={{ color: "var(--accent)" }}>.</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div {...fadeUp(0.3)} style={{ marginBottom: "32px", minHeight: "2.2rem" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--text-muted)",
              letterSpacing: "-0.03em",
            }}
          >
            {typed}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "1em",
                background: "var(--accent)",
                marginLeft: "3px",
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }}
            />
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            maxWidth: "520px",
            color: "var(--text-muted)",
            fontSize: "1rem",
            lineHeight: 1.75,
            marginBottom: "48px",
          }}
        >
          {PROFILE.bio.split("\n")[0]}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              background: "var(--accent)",
              color: "#080808",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "14px 32px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background 0.2s, transform 0.15s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
          >
            Ver projetos
            <ArrowDown size={16} />
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "0.5px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              padding: "14px 28px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "0.5px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              padding: "14px 28px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToAbout}
          style={{
            marginTop: "80px",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-muted)",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
