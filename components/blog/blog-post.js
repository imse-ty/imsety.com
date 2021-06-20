import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPost({
  title,
  subtitle,
  caption,
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
            <img
              alt={coverAlt}
              src={coverImage}
              width={640}
              height={480}
              className="mb-2"
            />
            <div className="mb-2 text-xs tracking-widest text-gray-400">
              {caption}
            </div>
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            <p>{subtitle}</p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}

BlogPost.defaultProps = {
  title: 'Lorem Ipsum',
  subtitle: 'Subtitle',
  caption: 'June 19, 2021 • 2 min read',
  coverAlt: 'Blog post cover image',
  coverImage: 'https://source.unsplash.com/user/erondu/640x480',
  href: '#'
};
