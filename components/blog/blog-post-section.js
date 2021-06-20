import { urlFor } from '../../lib/sanity';
import BlogPost from './blog-post';

export default function BlogPostSection({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {posts.map((post) => {
        return (
          <BlogPost
            key={post._id}
            title={post.title}
            summary={post.summary}
            date={post.publishedDate}
            readingTime={post.estimatedReadingTime}
            coverAlt={post.coverImage.alt}
            coverImage={urlFor(post.coverImage).width(640).height(480).url()}
            href="#"
          />
        );
      })}
    </div>
  );
}
