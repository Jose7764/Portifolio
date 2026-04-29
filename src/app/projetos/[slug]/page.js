import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.name} | Projetos`,
    description: project.summary,
  };
}

export default async function ProjetoDetalhesPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="page-section project-detail">
      <div className="project-detail__header card">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.name}</h1>
        <p className="projects-lead">{project.description}</p>
      </div>

      <div className="project-detail__layout">
        <article className="card project-detail__main">
          <div className="project-detail__block">
            <h2>Problema que o projeto resolve</h2>
            <p>{project.problem}</p>
          </div>

          <div className="project-detail__block">
            <h2>Objetivo do projeto</h2>
            <p>{project.objective}</p>
          </div>

          <div className="project-detail__block">
            <h2>Funcionalidades principais</h2>
            <ul className="detail-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-detail__block">
            <h2>O que eu aprendi</h2>
            <ul className="detail-list">
              {project.learnings.map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
          </div>

          {project.videos?.length ? (
            <div className="project-detail__block">
              <h2>Vídeos de entrega</h2>
              <div className="project-video-grid">
                {project.videos.map((video) => (
                  <div key={video.embedUrl} className="project-video-card">
                    <span className="project-video-card__title">{video.title}</span>
                    <div className="project-video-frame">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </article>

        <aside className="project-detail__sidebar">
          <article className="card project-detail__panel">
            <h2>Tecnologias utilizadas</h2>
            <div className="project-card__tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="project-chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>

          <article className="card project-detail__panel">
            <h2>Links</h2>
            <div className="project-links">
              <a href={project.githubUrl} className="project-card__button">
                GitHub
              </a>
              {project.deployUrl ? (
                <a href={project.deployUrl} className="project-card__button">
                  Deploy
                </a>
              ) : (
                <span className="project-links__placeholder">Deploy em breve</span>
              )}
            </div>
          </article>

          <article className="card project-detail__panel">
            <h2>Imagem do projeto</h2>
            {project.imageUrl ? (
              <div className="project-image">
                <Image
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.name}`}
                  width={1200}
                  height={800}
                />
              </div>
            ) : (
              <div className="project-image-placeholder">
                <span>{project.imageLabel}</span>
              </div>
            )}
          </article>
        </aside>
      </div>

      <Link href="/projetos" className="project-back">
        Voltar para projetos
      </Link>
    </section>
  );
}
