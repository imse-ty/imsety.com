import { urlFor } from '../../lib/sanity';
import ProjectCard from './project-card';

export default function ProjectsSection({ projects }) {
  return (
    <div className="sm:container grid grid-cols-2 gap-1 md:grid-cols-3 sm:gap-5">
      {projects.map((project) => {
        console.log(project.coverImage);
        return (
          <ProjectCard
            key={project._id}
            title={project.title}
            subtitle={project.subtitle}
            coverSrc={urlFor(project.coverImage).width(640).height(640).url()}
          />
        );
      })}
    </div>
  );
}
