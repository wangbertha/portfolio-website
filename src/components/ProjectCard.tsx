import PropTypes from "prop-types";
import "./ProjectCard.css";
import SkillsList from "./SkillsList";

const ProjectCard = ({ project }) => {
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

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
