export const PROFILE = {
  name: "João Victor",
  fullName: "João Victor Estreano Nogueira Vaz Silva",
  title: "Estudante de Desenvolvimento de Software",
  roles: [
    "Desenvolvedor de Software",
    "Aprendiz de Suporte de TI",
    "Solucionador de Problemas",
    "Estudante Multiplataforma",
  ],
  bio: `Estudante de Desenvolvimento de Software Multiplataforma com experiência em suporte de TI.
Apaixonado por resolver problemas reais através de código limpo e interfaces funcionais.
Explorando o mundo do desenvolvimento Full Stack com foco em JavaScript e React.`,
  location: "Brasil",
  github: "https://github.com/joaoestreano",
  linkedin: "https://www.linkedin.com/in/joao-estreano/",
  email: "joao@email.com",
};

export const SKILLS = [
  { name: "JavaScript", category: "Frontend", level: 80 },
  { name: "React", category: "Frontend", level: 75 },
  { name: "HTML/CSS", category: "Frontend", level: 85 },
  { name: "C++", category: "Backend", level: 65 },
  { name: "SQL", category: "Database", level: 70 },
  { name: "PostgreSQL", category: "Database", level: 65 },
  { name: "Figma", category: "Design", level: 70 },
  { name: "Git", category: "Ferramentas", level: 75 },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Projeto Individual #1",
    description: "Descrição do seu projeto. Substitua com o conteúdo real quando for preencher.",
    type: "individual",
    stack: ["React", "JavaScript", "CSS"],
    github: "https://github.com/joaoestreano",
    demo: null as string | null,
    featured: true,
  },
  {
    id: 2,
    title: "Projeto em Grupo #1",
    description: "Projeto desenvolvido em equipe. Substitua com o conteúdo real.",
    type: "group",
    stack: ["JavaScript", "SQL", "PostgreSQL"],
    github: "https://github.com/joaoestreano",
    demo: null as string | null,
    featured: true,
  },
  {
    id: 3,
    title: "Projeto Individual #2",
    description: "Mais um projeto. Substitua com o conteúdo real.",
    type: "individual",
    stack: ["C++"],
    github: "https://github.com/joaoestreano",
    demo: null as string | null,
    featured: false,
  },
];

export const COURSES = [
  {
    id: 1,
    title: "Desenvolvimento de Software Multiplataforma",
    institution: "Faculdade",
    year: "2024–Atual",
    type: "graduation",
    description: "Curso superior de tecnologia com foco em desenvolvimento multiplataforma.",
  },
  {
    id: 2,
    title: "Aprendiz de Suporte de TI",
    institution: "Empresa",
    year: "2024",
    type: "experience",
    description: "Suporte técnico, manutenção de sistemas e atendimento ao usuário.",
  },
  {
    id: 3,
    title: "React — Do Zero ao Avançado",
    institution: "Udemy",
    year: "2024",
    type: "course",
    description: "Hooks, Context API, React Router e integração com APIs.",
  },
  {
    id: 4,
    title: "JavaScript Moderno",
    institution: "Curso Online",
    year: "2023",
    type: "course",
    description: "ES6+, assincronismo, manipulação do DOM e fetch API.",
  },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Primeiro projeto em produção",
    description: "Deploy do primeiro projeto real para usuários reais.",
    year: "2024",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Contribuição open source",
    description: "Primeira contribuição para um repositório público no GitHub.",
    year: "2024",
    icon: "🌍",
  },
];
