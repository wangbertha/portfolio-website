import projects from "../data/projects.tsx";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;
