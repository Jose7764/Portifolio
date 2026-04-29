import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <div className="project-card__top">
        <span className="project-card__category">{project.category}</span>
        <h2>{project.name}</h2>
        <p>{project.summary}</p>
      </div>

      <div className="project-card__bottom">
        <div className="project-card__tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-chip">
              {tech}
            </span>
          ))}
        </div>

        <Link href={`/projetos/${project.slug}`} className="project-card__button">
          Ver detalhes
        </Link>
      </div>
    </article>
  );
}
