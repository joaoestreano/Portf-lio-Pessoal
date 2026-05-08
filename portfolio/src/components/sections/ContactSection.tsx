"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/data";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simula envio — integre com Formspree ou EmailJS aqui
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const SOCIALS = [
    { icon: Github, label: "GitHub", href: PROFILE.github, value: "@joaoestreano" },
    { icon: Linkedin, label: "LinkedIn", href: PROFILE.linkedin, value: "João Victor" },
    { icon: Mail, label: "Email", href: `mailto:${PROFILE.email}`, value: PROFILE.email },
  ];

  return (
    <>
      <section id="contact" style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="container">
          <SectionTitle
            label="// contato"
            title="Vamos conversar"
            subtitle="Aberto a oportunidades, freelas e colaborações. Respondo rápido."
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {sent ? (
                <div style={{
                  padding: "48px 32px",
                  border: "0.5px solid var(--accent)",
                  background: "rgba(232,255,71,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  textAlign: "center",
                }}>
                  <CheckCircle size={40} color="var(--accent)" />
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)" }}>
                    Mensagem enviada!
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    Obrigado pelo contato. Te respondo em breve.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.08em" }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { name: "name", label: "Nome", type: "text", placeholder: "Seu nome" },
                    { name: "email", label: "Email", type: "email", placeholder: "seu@email.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                        {field.label.toUpperCase()}
                      </label>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name as "name" | "email"]}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          background: "var(--bg-card)",
                          border: "0.5px solid var(--border)",
                          color: "var(--text)",
                          fontSize: "0.9rem",
                          fontFamily: "var(--font-body)",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                      MENSAGEM
                    </label>
                    <textarea
                      name="message"
                      placeholder="Conta um pouco sobre o projeto ou oportunidade..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "var(--bg-card)",
                        border: "0.5px solid var(--border)",
                        color: "var(--text)",
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-body)",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      padding: "14px 32px",
                      background: "var(--accent)",
                      color: "#080808",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      border: "none",
                      cursor: sending ? "not-allowed" : "pointer",
                      opacity: sending ? 0.7 : 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "background 0.2s, opacity 0.2s",
                      alignSelf: "flex-start",
                    }}
                    onMouseEnter={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
                  >
                    <Send size={16} />
                    {sending ? "Enviando..." : "Enviar mensagem"}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Socials + info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "40px" }}>
                Estou sempre aberto a novas oportunidades, sejam estágios, freelas ou projetos open source.
                Se tiver uma ideia interessante, bora conversar!
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {SOCIALS.map(({ icon: Icon, label, href, value }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 20px",
                      border: "0.5px solid var(--border)",
                      background: "var(--bg-card)",
                      transition: "border-color 0.2s, background 0.2s",
                      color: "var(--text)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "#181818";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                    }}
                  >
                    <Icon size={18} color="var(--accent)" />
                    <div>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", display: "block" }}>
                        {label.toUpperCase()}
                      </span>
                      <span style={{ fontSize: "0.9rem" }}>{value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "0.5px solid var(--border)", padding: "32px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} João Victor — Feito com Next.js + Framer Motion
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)" }}>
            jv.dev
          </span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
