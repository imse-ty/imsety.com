import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DateFormatter from '../date-formatter';

export default function BlogPost({
  title,
  summary,
  date,
  readingTime,
  coverAlt,
  coverImage,
  href
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', bounce: 0.5 }}
      className="mb-4 md:mb-8"
    >
      <Link href={href}>
        <a>
          <div>
            <Image
              alt={coverAlt}
              src={coverImage}
              width={640}
              height={480}
              objectFit="cover"
            />
            <div className="my-2 text-xs tracking-widest text-gray-400">
              <DateFormatter dateString={date} /> •{' '}
              <time dateTime={`PTM${readingTime}`}>{readingTime} min</time> read
            </div>
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            <p>{summary}</p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}

BlogPost.defaultProps = {
  coverAlt: 'Blog post cover image',
  coverImage: ''
};
