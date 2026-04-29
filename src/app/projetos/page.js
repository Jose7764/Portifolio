import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjetosPage() {
  return (
    <section className="page-section projects-page">
      <div className="projects-intro card">
        <p className="eyebrow">Projetos</p>
        <h1>Projetos desenvolvidos</h1>
        <p className="projects-lead">
          Aqui estão alguns projetos que representam minha evolução como
          desenvolvedor, passando por mobile, back-end, fullstack, segurança e
          construção de interfaces.
        </p>
      </div>

      <div className="project-grid project-grid--showcase">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
