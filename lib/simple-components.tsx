import Heading from '@/components/fixed-krado-components/Heading';
import Text from '@/components/fixed-krado-components/Text';
import { Link } from 'krado-react';

export const simpleComponents = {
  p: (props) => (
    <Text variant='body.summary' sx={{ marginY: 10 }}>
      {props.children}
    </Text>
  ),
  h1: (props) => <Heading variant='display.h1'>{props.children}</Heading>,
  h2: (props) => <Heading variant='display.h2'>{props.children}</Heading>,
  h3: (props) => <Heading variant='display.h3'>{props.children}</Heading>,
  h4: (props) => <Heading variant='display.h4'>{props.children}</Heading>,
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
  }
};
