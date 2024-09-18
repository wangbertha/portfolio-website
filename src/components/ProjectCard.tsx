import SkillsList from "./SkillsList";
import "./ProjectCard.css";
import React from "react";

interface ProjectCardProps {
  project: {
    image: string;
    title: string;
    year: number;
    description: string;
    links: LinksProps[];
    skillsHigh: string[];
    skillsMed: string[];
  };
}

interface LinksProps {
  icon: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="project-card">
      <img className="project-image" src={project.image} alt="" />
      <div className="project-details-wrapper">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-year">{project.year}</p>
        <p className="project-description">{project.description}</p>
        <SkillsList proficiency="high" list={project.skillsHigh} />
        <SkillsList proficiency="medium" list={project.skillsMed} />
        <menu className="project-links">
          {project.links.map((link) => (
            <a href={link.link} target="_blank" rel="noreferrer noopener">
              <img src={link.icon} alt="" />
            </a>
          ))}
        </menu>
      </div>
    </article>
  );
};

export default ProjectCard;
