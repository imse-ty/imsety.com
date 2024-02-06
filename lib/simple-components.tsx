/** @jsxImportSource theme-ui */

import Text from '@/components/fixed-krado-components/Text';
import { UnorderedList } from '@/components/list';
import { Link } from 'krado-react';

export const simpleComponentsSummaryText = {
  p: (props) => (
    <Text
      as="p"
      variant="body.summary"
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
        sx={{ color: 'surface.regular', borderColor: 'surface.regular' }}
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
      <Text
        as="li"
        variant="body.summary"
        sx={{ fontSize: 'inherit', color: 'inherit' }}
      >
        {children}
      </Text>
    );
  }
};

export const simpleComponents = {
  p: (props) => (
    <Text as="p" sx={{ fontSize: 'inherit' }}>
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
  }
};
