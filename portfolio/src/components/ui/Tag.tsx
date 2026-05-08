interface TagProps {
  children: string;
  accent?: boolean;
}

export function Tag({ children, accent = false }: TagProps) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        padding: "3px 10px",
        border: `0.5px solid ${accent ? "var(--accent)" : "var(--border)"}`,
        color: accent ? "var(--accent)" : "var(--text-muted)",
        letterSpacing: "0.05em",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}
