import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Victor — Desenvolvedor de Software",
  description:
    "Portfólio de João Victor Estreano Nogueira Vaz Silva — Estudante de Desenvolvimento de Software Multiplataforma e Aprendiz de Suporte de TI.",
  keywords: [
    "João Victor",
    "desenvolvedor",
    "React",
    "JavaScript",
    "portfólio",
    "software",
  ],
  authors: [{ name: "João Victor Estreano Nogueira Vaz Silva" }],
  openGraph: {
    title: "João Victor — Desenvolvedor de Software",
    description: "Portfólio pessoal de João Victor.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
