import groq from 'groq';

const projectFields = groq`
  _id,
  title,
  subtitle,
  coverImage,
  summary,
  year,
  timeline,
  tools,
  publishedAt,
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

// Work
export const indexProjectQuery = groq`
  *[ _type == "project" ] {
    ${projectFields}
  }
`;

export const projectQuery = groq`
  *[ _type == "project" && slug.current == $slug ][0] {
    ${projectFields},
    body
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
  }
`;

// Blog
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
