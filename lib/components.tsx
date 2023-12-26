import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Link } from 'krado-react';

export const components = {
  block: {
    normal: (props) => (
      <Text variant='body.paragraph' sx={{ marginTop: 2, marginBottom: 3 }}>
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
    )
  },
  marks: {
    link: (props) => {
      const target = (props.value?.href || '').startsWith('http')
        ? '_blank'
        : undefined;

      return (
        <Link
          href={props.value?.href}
          target={target}
          rel={target === '_blank' && 'noindex nofollow'}
        >
          {props.children}
        </Link>
      );
    }
  }
};
