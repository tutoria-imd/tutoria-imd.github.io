export type Link = {
  href: string;
  title: string;
  icon?: string;
  target?: string;
  class?: string;
};

export const anchors: Link[] = [
  { href: "#ajuda", title: "Ajuda" },
  { href: "#contato", title: "Contato" },
  { href: "#feedback", title: "Feedback" },
];

export const contacts: Link[] = [
  {
    href: "mailto:tutoria@imd.ufrn.br",
    title: "Enviar e-mail",
    icon: "fas fa-envelope",
  },
  {
    href: "https://discord.gg/PcsdAr3R2r",
    title: "Entrar no Discord",
    icon: "fab fa-discord",
    target: "_blank",
    class: "bg-indigo-600 hover:bg-indigo-800",
  },
];

export const feedback: Link = {
  href: "https://docs.google.com/forms/d/e/1FAIpQLSdABdnxyyYhiNH2Jj9_c26TUrUpdX1coTI-G_wuK0UFiDeKNQ/viewform?usp=dialog",
  title: "Enviar Feedback",
  target: "_blank",
};

export type Card = Link & {
  description: string;
  tags?: string[];
};

export const cards: Card[] = [
  {
    href: "/materias",
    title: "Materiais de apoio",
    icon: "far fa-handshake",
    description:
      "Tutorias, guias e mais materiais que podem te ajudar quando você mesmo espera.",
  },
  {
    href: "/dicas",
    title: "Ferramentas e dicas",
    icon: "far fa-map",
    description:
      "Indicação de ferramentas úteis, sites, bibliografias e boas práticas para o dia a dia do BTI.",
  },
];

export const tips: Card[] = [
  {
    title: "Portal das Disciplinas",
    description: "Recurso essencial com entrevistas, materiais e informações sobre componentes curriculares do Bacharelado em TI do IMD/UFRN para aprofundar conhecimentos.",
    href: "https://portaldasdisciplinas.imd.ufrn.br/",
    target: "_blank"
  },
  {
    title: "Portal do IMD",
    description: "Portal oficial do IMD que agrega informações sobre novos editais, eventos, projetos e empreendedorismo na área.",
    href: "https://www.metropoledigital.ufrn.br/portal/",
    target: "_blank"
  },
  {
    title: "Escola do Governo",
    description: "Plataforma abrangente para formação continuada. Para quem busca estágio, se inscrever nesta plataforma é uma boa ideia!",
    href: "http://www.escoladegoverno.rn.gov.br/",
    target: "_blank"
  },
  {
    title: "Jerimum Jobs",
    description: "Conecta profissionais com empresas credenciadas no Parque Tecnológico Metrópole Digital, facilitando a busca por oportunidades de trabalho.",
    href: "https://jerimumjobs.imd.ufrn.br/jerimumjobs/",
    target: "_blank"
  },
  {
    title: "Site da disciplina Matemática Elementar",
    description: "Acesso a materiais de estudo e horários de monitoria para Matemática Elementar, oferecendo suporte para dominar os conceitos.",
    href: "https://matematica-elementar.github.io/",
    target: "_blank"
  },
  {
    title: "Site do projeto de monitoria de FMC",
    description: "Materiais didáticos e horários de monitoria para Fundamentos de Ciência da Computação (FMC), para suporte no aprendizado.",
    href: "https://fmc.imd.ufrn.br/",
    target: "_blank"
  },
  {
    title: "LeetCode",
    description: "Plataforma online com problemas de programação para prática e aprimoramento de habilidades algorítmicas, ideal para entrevistas técnicas.",
    href: "https://leetcode.com/",
    target: "_blank"
  },
  {
    title: "TailwindCSS",
    description: "Framework CSS utilitário-first para construir designs personalizados rapidamente com classes de baixo nível no HTML.",
    href: "https://tailwindcss.com/",
    target: "_blank"
  },
  {
    title: "Github",
    description: "Plataforma de hospedagem de código para controle de versão e colaboração usando Git, essencial para desenvolvedores e projetos.",
    href: "https://github.com/",
    target: "_blank"
  }
];