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
      <div className="mb-8 md:w-1/2">
        <img alt={mainImageAlt} src={mainImage} className="w-full h-auto" />
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
