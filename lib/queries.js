import groq from 'groq';

const projectFields = groq`
  _id,
  title,
  subtitle,
  coverImage,
  "slug": slug.current
`;

export const indexProjectQuery = groq`
  *[ _type == "project" ]{
    ${projectFields}
  }
`;
