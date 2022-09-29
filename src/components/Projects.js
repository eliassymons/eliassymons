import projectData from "../projectData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const cards = projectData.map((project) => {
    return (
      <ProjectCard
        key={project.name}
        name={project.name}
        image={project.image}
        description={project.description}
        link={project.link}
        code={project.code}
      />
    );
  });
  return (
    <div className="projects" id="/projects">
      <h2>My work</h2>
      <div className="card-container">{cards}</div>
    </div>
  );
}
