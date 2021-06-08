import ProjectCard from './project-card';

export default function ProjectsSection() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="sm:container grid grid-cols-2 gap-1 md:grid-cols-3 sm:gap-5">
      {array.map((index) => {
        return (
          <ProjectCard
            key={index}
            title="Lorem Ipsum"
            subtitle="Subtitle"
            coverSrc="https://source.unsplash.com/user/dayday95/640x640"
          />
        );
      })}
    </div>
  );
}
