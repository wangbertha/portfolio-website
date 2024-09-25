import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <main className="page projects-page">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </main>
  );
};

export default Projects;
