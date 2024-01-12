import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import {
  ProjectVimeo,
  ProjectYoutube
} from '@/components/projects/project-embed';
import ProjectGrid from '@/components/projects/project-grid';
import ProjectImage from '@/components/projects/project-image';
import { Link } from 'krado-react';

export const components = {
  p: (props) => (
    <Text variant='body.summary' sx={{ marginTop: 2, marginBottom: 3 }}>
      {props.children}
    </Text>
  ),
  h1: (props) => (
    <Heading
      variant='display.h1'
      sx={{ fontWeight: 600, marginTop: 4, marginBottom: 3 }}
    >
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading
      variant='display.h2'
      sx={{ fontWeight: 600, marginTop: 4, marginBottom: 3 }}
    >
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading
      variant='display.h3'
      sx={{ fontWeight: 600, marginTop: 4, marginBottom: 3 }}
    >
      {props.children}
    </Heading>
  ),
  h4: (props) => (
    <Heading
      variant='display.h4'
      sx={{ fontWeight: 600, marginTop: 4, marginBottom: 3 }}
    >
      {props.children}
    </Heading>
  ),
  a: ({ children, url }) => {
    const target = (url || '').startsWith('http') ? '_blank' : undefined;

    return (
      <Link
        href={url}
        target={target}
        rel={target === '_blank' && 'noindex nofollow'}
      >
        {children}
      </Link>
    );
  },
  img: ({ alt, url }) => {
    return <ProjectImage alt={alt} src={url} />;
  },
  ProjectGrid: ({ images }) => {
    return <ProjectGrid images={images} />;
  },
  ProjectYoutube: ({ url }) => {
    return <ProjectYoutube url={url} />;
  },
  ProjectVimeo: ({ url }) => {
    return <ProjectVimeo url={url} />;
  }
};
