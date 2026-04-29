export default function SobrePage() {
  return (
    <section className="page-section about-page">
      <div className="about-intro card">
        <p className="eyebrow">Sobre mim</p>
        <h1>De Cuba ao desenvolvimento de sistemas</h1>
        <p className="about-lead">
          Meu nome é José Azarías Pérez Torres. Sou cubano, moro no Brasil e sigo
          construindo uma trajetória marcada por adaptação, aprendizado constante e
          vontade real de evoluir.
        </p>
        <p>
          Minha história começou longe da tecnologia, passou por diferentes
          experiências profissionais e ganhou uma nova direção quando encontrei no
          desenvolvimento de sistemas um caminho para crescer, criar e resolver
          problemas de forma inteligente.
        </p>
      </div>

      <div className="about-grid">
        <article className="card about-card">
          <span className="about-card__index">01</span>
          <h2>Cuba para o Brasil</h2>
          <p>
            Saí de Cuba aos 13 anos e vim para o Brasil com a minha família para
            começar uma nova etapa de vida. Essa mudança me ensinou desde cedo a me
            adaptar, recomeçar e seguir em frente mesmo diante de grandes desafios.
          </p>
        </article>

        <article className="card about-card">
          <span className="about-card__index">02</span>
          <h2>Trabalho antes da tecnologia</h2>
          <p>
            Antes de entrar na área tech, trabalhei como repositor em mercado, fui
            menor aprendiz e também atuei em uma loja de construção como assistente
            administrativo. Essas experiências fortaleceram minha responsabilidade,
            organização, comunicação e disciplina.
          </p>
        </article>

        <article className="card about-card">
          <span className="about-card__index">03</span>
          <h2>Curso de Desenvolvimento de Sistemas na WEG</h2>
          <p>
            Minha entrada no curso de Desenvolvimento de Sistemas na WEG marcou o
            início da minha evolução como desenvolvedor. Foi ali que comecei a me
            aprofundar em programação, lógica, estruturação de sistemas e projetos
            mais próximos da prática real.
          </p>
        </article>

        <article className="card about-card">
          <span className="about-card__index">04</span>
          <h2>Montagem e configuração de computadores</h2>
          <p>
            No começo do curso, comecei a comprar peça por peça do meu próprio PC e
            montei tudo sozinho. Esse processo me fez aprender na prática sobre
            hardware, instalação de sistemas, configuração de máquinas e desempenho.
            Depois disso, também passei a ajudar colegas a montar e configurar seus
            computadores.
          </p>
        </article>
      </div>

      <div className="about-focus">
        <article className="card about-focus__card">
          <h2>O que estou construindo hoje</h2>
          <p>
            Atualmente estudo e pratico todos os dias para me tornar um desenvolvedor
            fullstack sólido, com boa base em front-end, back-end, organização de
            projetos e visão completa de sistema.
          </p>
        </article>

        <article className="card about-focus__card">
          <h2>Meu objetivo</h2>
          <p>
            Meu objetivo é desenvolver e também fazer manutenção de qualquer projeto
            fullstack com segurança, clareza, organização e capacidade de entender
            tanto a experiência do usuário quanto a estrutura técnica por trás dela.
          </p>
        </article>
      </div>
    </section>
  );
}
