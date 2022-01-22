import groq from 'groq';

const projectFields = groq`
  _id,
  title,
  subtitle,
  coverImage,
  "slug": slug.current
`;

const postFields = groq`
  _id,
  title,
  publishedAt,
  mainImage,
  summary,
  "slug": slug.current,
  "estimatedReadingTime": round(length(body) / 5 / 180 )
`;

export const indexProjectQuery = groq`
  *[ _type == "project" ] {
    ${projectFields}
  }
`;

export const indexPostQuery = groq`
  *[ _type == "post" ] | order(publishedAt desc) {
    ${postFields}
  }
`;

export const postQuery = groq`
  *[ _type == "post" && slug.current == $slug ][0] {
    ${postFields},
    body
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`;
