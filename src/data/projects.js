export const projects = [
  {
    slug: "securear",
    name: "SecureAR",
    category: "Segurança",
    summary:
      "Projeto do Grand Prix SENAI Nacional Brasil 2026 com foco em cibersegurança para acesso seguro a assistentes de IA corporativos.",
    description:
      "SecureAR foi desenvolvido para o Grand Prix SENAI Nacional Brasil 2026 com foco em cibersegurança aplicada ao uso de assistentes de IA em ambientes corporativos. A proposta do projeto é reforçar controle de acesso, proteção de dados e governança no uso de tecnologias emergentes por meio de óculos de realidade aumentada.",
    problem:
      "O projeto responde ao desafio de permitir acesso seguro a assistentes corporativos de IA sem comprometer dados sensíveis, identidade do usuário ou regras de governança.",
    objective:
      "Criar uma solução com forte camada de segurança, capaz de proteger acessos, validar permissões e reduzir riscos em ambientes empresariais.",
    technologies: [
      "Java",
      "Spring Boot",
      "AWS",
      "Segurança da Informação",
      "JWT",
      "RBAC",
      "ABAC",
      "DLP",
      "mTLS",
    ],
    features: [
      "Camadas de autenticação e autorização",
      "Controle de acesso baseado em regras e contexto",
      "Proteção de dados sensíveis",
      "Arquitetura pensada para ambiente corporativo",
    ],
    learnings: [
      "Princípios de segurança aplicada a sistemas reais",
      "Modelos de autorização como RBAC e ABAC",
      "Importância de governança e proteção de dados",
      "Desenho de soluções com foco em risco e confiabilidade",
    ],
    videos: [
      {
        title: "Pitch do SecureAR",
        embedUrl: "https://www.youtube.com/embed/_HSkkEkRt70?si=LYSheiRP9jrSAgQf",
      },
      {
        title: "Apresentação do projeto SecureAR",
        embedUrl: "https://www.youtube.com/embed/9gxM628l1e4?si=0tg8h5pYtSOJoZ76",
      },
    ],
    githubUrl: "https://github.com/Jose7764/Secure_AR_Front.git",
    deployUrl: "",
    imageUrl: "/grand.png",
    imageLabel: "Espaço para imagem conceitual do SecureAR",
  },
  {
    slug: "ecommerce-suplementos",
    name: "E-commerce de Suplementos",
    category: "Fullstack",
    summary:
      "Projeto de e-commerce com aplicativo mobile, back-end em Spring Boot, catálogo, carrinho e fluxo de compra simulado.",
    description:
      "Este projeto foi pensado para simular o funcionamento de um e-commerce de suplementos, com front-end mobile em Kotlin e back-end em Java com Spring Boot. Ele envolve gestão de usuários, produtos, categorias, carrinho e uma jornada de compra organizada.",
    problem:
      "O projeto resolve a necessidade de estruturar um fluxo completo de compra, do catálogo ao carrinho, em uma aplicação integrada entre cliente e servidor.",
    objective:
      "Praticar construção de sistemas fullstack com regras de negócio, organização de dados e comunicação consistente entre front-end e back-end.",
    technologies: ["Kotlin", "Java", "Spring Boot", "API REST", "Banco de Dados"],
    features: [
      "Cadastro de usuários",
      "Cadastro e organização de produtos e categorias",
      "Carrinho de compras",
      "Fluxo de compra simulado",
    ],
    learnings: [
      "Modelagem de regras para e-commerce",
      "Integração entre múltiplas camadas do sistema",
      "Estruturação de endpoints e dados para catálogo e carrinho",
      "Visão prática de uma aplicação fullstack",
    ],
    githubUrl: "#",
    deployUrl: "",
    imageLabel: "Espaço para print do e-commerce de suplementos",
  },
  {
    slug: "portfolio-pessoal",
    name: "Portfólio Pessoal",
    category: "Front-end",
    summary:
      "Site criado para apresentar trajetória, projetos, habilidades e evolução como desenvolvedor.",
    description:
      "Este portfólio foi desenvolvido para reunir minha história, meus projetos e minha evolução como desenvolvedor em uma experiência visual consistente. A proposta foi criar um site com identidade forte, navegação clara e estrutura fácil de expandir.",
    problem:
      "O projeto resolve a necessidade de apresentar minha trajetória e meus trabalhos de forma profissional, organizada e acessível.",
    objective:
      "Construir uma presença digital que represente minha identidade, minha evolução técnica e a forma como penso design e desenvolvimento.",
    technologies: ["Next.js", "JavaScript", "CSS", "HTML"],
    features: [
      "Página inicial com identidade visual marcante",
      "Página sobre com narrativa pessoal",
      "Seção de projetos com cards e páginas de detalhes",
      "Layout responsivo e consistente",
    ],
    learnings: [
      "Estruturação de rotas com Next.js",
      "Organização visual de um portfólio real",
      "Criação de componentes e dados reutilizáveis",
      "Consistência entre conteúdo, layout e navegação",
    ],
    githubUrl: "#",
    deployUrl: "",
    imageLabel: "Espaço para print do portfólio pessoal",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
