# João Victor — Portfólio Pessoal

Portfólio pessoal desenvolvido com **Next.js 14**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilos:** Tailwind CSS + CSS Variables
- **Animações:** Framer Motion
- **Fontes:** Syne (display) + DM Sans (body) + JetBrains Mono
- **Deploy:** Vercel

## 📁 Estrutura

```
src/
├── app/                  # App Router (layout, page, globals.css)
├── components/
│   ├── ui/               # Componentes reutilizáveis (Button, Tag, SectionTitle...)
│   └── sections/         # Seções da página (Hero, About, Projects...)
├── hooks/                # Custom hooks (useTypewriter, useScrollSpy)
└── lib/
    ├── data.ts           # Todo o conteúdo do portfólio
    └── utils.ts          # Utilitários
```

## 🛠️ Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📦 Build para produção

```bash
npm run build
npm start
```

## 🗂️ Commits

| Commit | Descrição |
|--------|-----------|
| `feat: project setup` | Estrutura inicial, configs, data e hooks |
| `feat: global styles & theme` | Tipografia, cores e variáveis |
| `feat: navbar` | Navegação fixa com scroll spy |
| `feat: hero section` | Seção inicial com typewriter |
| `feat: about section` | Sobre mim e skills |
| `feat: projects section` | Cards de projetos com filtro |
| `feat: courses & achievements` | Timeline de cursos e conquistas |
| `feat: contact section` | Formulário e redes sociais |
| `feat: animations & polish` | Framer Motion e refinamentos |
| `feat: seo & deploy` | Meta tags, SEO e deploy na Vercel |

---

Desenvolvido por **João Victor Estreano Nogueira Vaz Silva**
