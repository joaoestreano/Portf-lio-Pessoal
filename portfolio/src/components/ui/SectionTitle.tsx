"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          color: "var(--accent)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "12px",
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          color: "var(--text)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: "16px",
            color: "var(--text-muted)",
            fontSize: "1rem",
            maxWidth: "480px",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
