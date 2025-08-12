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
    description:
      "Recurso essencial com entrevistas, materiais e informações sobre componentes curriculares do Bacharelado em TI do IMD/UFRN para aprofundar conhecimentos.",
    href: "https://portaldasdisciplinas.imd.ufrn.br/",
    target: "_blank",
  },
  {
    title: "Portal do IMD",
    description:
      "Portal oficial do IMD que agrega informações sobre novos editais, eventos, projetos e empreendedorismo na área.",
    href: "https://www.metropoledigital.ufrn.br/portal/",
    target: "_blank",
  },
  {
    title: "Escola do Governo",
    description:
      "Plataforma abrangente para formação continuada. Para quem busca estágio, se inscrever nesta plataforma é uma boa ideia!",
    href: "http://www.escoladegoverno.rn.gov.br/",
    target: "_blank",
  },
  {
    title: "Jerimum Jobs",
    description:
      "Conecta profissionais com empresas credenciadas no Parque Tecnológico Metrópole Digital, facilitando a busca por oportunidades de trabalho.",
    href: "https://jerimumjobs.imd.ufrn.br/jerimumjobs/",
    target: "_blank",
  },
  {
    title: "Site da disciplina Matemática Elementar",
    description:
      "Acesso a materiais de estudo e horários de monitoria para Matemática Elementar, oferecendo suporte para dominar os conceitos.",
    href: "https://matematica-elementar.github.io/",
    target: "_blank",
  },
  {
    title: "Site do projeto de monitoria de FMC",
    description:
      "Materiais didáticos e horários de monitoria para Fundamentos de Ciência da Computação (FMC), para suporte no aprendizado.",
    href: "https://fmc.imd.ufrn.br/",
    target: "_blank",
  },
  {
    title: "LeetCode",
    description:
      "Plataforma online com problemas de programação para prática e aprimoramento de habilidades algorítmicas, ideal para entrevistas técnicas.",
    href: "https://leetcode.com/",
    target: "_blank",
  },
  {
    title: "TailwindCSS",
    description:
      "Framework CSS utilitário-first para construir designs personalizados rapidamente com classes de baixo nível no HTML.",
    href: "https://tailwindcss.com/",
    target: "_blank",
  },
  {
    title: "Github",
    description:
      "Plataforma de hospedagem de código para controle de versão e colaboração usando Git, essencial para desenvolvedores e projetos.",
    href: "https://github.com/",
    target: "_blank",
  },
];

export const materials: Card[] = [
  {
    title: "Apresentação Institucional",
    description:
      "Conheça um pouco das nossas ações acadêmicas e da estrutura empreendedora do Metrópole Parque. ",
    href: "https://www.youtube.com/watch?v=tftFc7H1qDk",
    tags: ["Vídeo"],
    target: "_blank",
  },
  {
    title: "Mapa da UFRN",
    description:
      "Visualize o mapa completo do Campus Central da UFRN em Natal e facilite sua localização dentro da universidade.",
    href: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi4urqY1JWOAxUNLLkGHVgEEzIQFnoECCgQAQ&url=https%3A%2F%2Fwww.ufrn.br%2Fresources%2Fdocumentos%2FMapa%2520do%2520Campus%2520Central%2520-%2520Natal%2520RN.pdf&usg=AOvVaw1uxHabj0jPpAUj0BCAUP5Z&opi=89978449",
    tags: ["Imagem"],
    target: "_blank",
  },
  {
    title: "Estrutura curricular do curso, ênfases e 2° cíclo",
    description:
      "Descubra a diferença entre ênfase e 2° cíclo, quais as disciplinas você encontrar em sua jornada e muito mais!",
    href: "/documentos/Estrutura curricular, ênfase e 2° ciclo.pdf",
    tags: ["Guia"],
    target: "_blank",
  },
  {
    title: "Matrículas e Influência dos Índices",
    description:
      "Entenda os tipos de matrícula, planejamento, critérios de prioridade, o Índice de Eficiência Acadêmica (IEA) e suas implicações, além de informações sobre cancelamento e trancamento.",
    href: "/documentos/Matrículas e Influência dos Índices.pdf",
    tags: ["Guia"],
    target: "_blank",
  },
  {
    title: "Se preparando para as matrículas",
    description:
      "Receba conselhos e orientações para otimizar sua matrícula, incluindo como usar o SIGAA e entender os critérios de prioridade.",
    href: "https://www.youtube.com/watch?v=7VpJfuRjvp4",
    tags: ["Vídeo"],
    target: "_blank",
  },
  {
    title: "Como realizar a matrícula",
    description:
      "Aprenda o passo a passo para fazer sua matrícula online no SIGAA, incluindo como adicionar e remover turmas, entender as diferenças entre os períodos de matrícula e verificar a situação das solicitações.",
    href: "https://www.youtube.com/watch?v=Zw8kx3bMBQw",
    tags: ["Vídeo"],
    target: "_blank",
  },
  {
    title:
      "Manual de Sobrevivência de FMC I com Thanos",
    description:
      "Guia não oficial para a disciplina de FMC I. Feito por ex-monitores do professor, abordando o método de ensino, estratégias de estudo, recursos de apoio e dicas gerais sobre os módulos e avaliações.",
    href: "/documentos/Manual de sobrevivência _não oficial_ da disciplina de Fundamentos Matemáticos da Computação I com Thanos.pdf",
    tags: ["Guia", "FMC I"],
    target: "_blank",
  },
];
