import projects from "../data/projects";
import SkillsList from "../components/SkillsList";
import "./Projects.css";

const Projects = () => {
  return (
    <main className="page projects-page">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </main>
  );
};

interface ProjectCardProps {
  project: {
    image: string;
    imgAlt: string;
    title: string;
    year: number | string;
    description: string;
    links: LinksProps[];
    skillsHigh: string[];
    skillsMed: string[];
  };
}

interface LinksProps {
  icon: string;
  link: string;
  alt: string;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <img className="project-image" src={project.image} alt={project.imgAlt} />
      <div className="project-details-wrapper">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-year">{project.year}</p>
        <p className="project-description">{project.description}</p>
        <SkillsList proficiency="high" list={project.skillsHigh} />
        <SkillsList proficiency="medium" list={project.skillsMed} />
        <menu className="project-links">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={link.icon} alt={link.alt} />
            </a>
          ))}
        </menu>
      </div>
    </article>
  );
};

export default Projects;
