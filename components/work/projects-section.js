import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-2 gap-1 md:grid-cols-3 sm:gap-5">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}
