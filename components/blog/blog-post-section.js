import { urlFor } from '../../lib/sanity';
import BlogPost from './blog-post';

export default function BlogPostSection({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {posts.map((post) => {
        console.log(post.publishedDate);
        return (
          <BlogPost
            key={post._id}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            readingTime={post.estimatedReadingTime}
            coverAlt={post.mainImage.alt}
            coverImage={urlFor(post.mainImage).width(640).height(480).url()}
            href="#"
          />
        );
      })}
    </div>
  );
}
