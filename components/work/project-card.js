import Link from 'next/link';

export default function ProjectCard() {
  return (
    <div className="relative w-full h-full text-imsetyWhite">
      <Link href="#">
        <a>
          <div className="absolute flex flex-col justify-end w-full h-full p-4 md:p-8 bg-imsetyBlack dark:bg-imsetyWhite bg-opacity-20">
            <h3 className="mb-3 text-2xl md:text-4xl font-bold">Lorem ipsum</h3>
            <p className="text-lg">Subtitle</p>
          </div>
          <img
            alt="Project cover image"
            src="https://source.unsplash.com/user/dayday95/500x500"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </a>
      </Link>
    </div>
  );
}
