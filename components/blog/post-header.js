import Image from 'next/image';
import DateFormatter from '../date-formatter';

export default function PostHeader({
  mainImageAlt,
  mainImage,
  title,
  date,
  readingTime
}) {
  return (
    <header className="flex flex-col md:flex-row items-center mb-12">
      <div className="mb-8 w-full md:w-1/2">
        <Image
          alt={mainImageAlt}
          src={mainImage}
          width={640}
          height={480}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="container md:w-1/2">
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold">{title}</h1>
        <div className="my-2 text-sm md:text-lg font-medium tracking-widest text-gray-400">
          <DateFormatter dateString={date} /> •{' '}
          <time dateTime={`PTM${readingTime}`}>{readingTime} min</time> read
        </div>
      </div>
    </header>
  );
}
