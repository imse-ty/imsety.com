import ProjectCard from './project-card';

export default function ProjectsSection({ projects }) {
  return (
    <div className="sm:container grid grid-cols-2 gap-1 md:grid-cols-3 sm:gap-5">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project._id}
            title={project.title}
            subtitle={project.subtitle}
            coverSrc="https://source.unsplash.com/user/dayday95/640x640"
          />
        );
      })}
    </div>
  );
}
