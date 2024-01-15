import Text from '@/components/fixed-krado-components/Text';
import { UnorderedList } from '@/components/list';
import { Link } from 'krado-react';

export const simpleComponentsSummaryText = {
  p: (props) => (
    <Text
      variant='body.summary'
      sx={{ color: 'inherit', fontSize: 'inherit', marginY: 10 }}
    >
      {props.children}
    </Text>
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
  ul: ({ children }) => {
    return <UnorderedList>{children}</UnorderedList>;
  },
  ol: ({ children }) => {
    return <UnorderedList>{children}</UnorderedList>;
  },
  li: ({ children }) => {
    return (
      <Text as='li' variant='body.summary' sx={{ color: 'inherit' }}>
        {children}
      </Text>
    );
  }
};

export const simpleComponents = {
  p: (props) => (
    <Text sx={{ fontSize: 'inherit', marginY: 10 }}>{props.children}</Text>
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
  }
};