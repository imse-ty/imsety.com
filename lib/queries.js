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
  "estimatedReadingTime": 2
`;

export const indexProjectQuery = groq`
  *[ _type == "project" ]{
    ${projectFields}
  }
`;

export const indexPostQuery = groq`
  *[ _type == "post" ]{
    ${postFields}
  }
`;
