import Project from "./Project";

function Projects({projects }) {
  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((p, index) => (
        <Project key={index} title={p.title} desc={p.desc} />
      ))}
    </div>
  );
}

export default Projects;