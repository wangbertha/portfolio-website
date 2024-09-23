import projects from "../data/projects.tsx";
import ProjectCard from "../components/ProjectCard";

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
