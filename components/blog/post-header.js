import DateFormatter from '../date-formatter';

export default function PostHeader({ mainImage, title, date, readingTime }) {
  return (
    <header>
      <img src={mainImage} />
      <h1>{title}</h1>
      <div className="my-2 text-xs tracking-widest text-gray-400">
        <DateFormatter dateString={date} /> •{' '}
        <time dateTime={`PTM${readingTime}`}>{readingTime} min</time> read
      </div>
    </header>
  );
}
