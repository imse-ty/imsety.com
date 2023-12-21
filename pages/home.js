import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { pick } from "@contentlayer/client";

export default function Home({ posts }) {
  return (
    <section>
      <ul>
        {posts.map(({ slug, date, title }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Statically fetch all posts
export async function getStaticProps() {
  const posts = allPosts.map((post) => pick(post, ["title", "date", "slug"]));

  return { props: { posts } };
}
