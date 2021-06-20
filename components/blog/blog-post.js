import Link from 'next/link';

export default function BlogPost({
  title,
  subtitle,
  caption,
  coverAlt,
  coverImage,
  href
}) {
  return (
    <Link href={href}>
      <a>
        <div className="mb-8">
          <img
            alt={coverAlt}
            src={coverImage}
            width={640}
            height={320}
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
  );
}

BlogPost.defaultProps = {
  title: 'Lorem Ipsum',
  subtitle: 'Subtitle',
  caption: 'June 19, 2021 • 2 min read',
  coverAlt: 'Blog post cover image',
  coverImage: 'https://source.unsplash.com/user/erondu/640x320',
  href: '#'
};
