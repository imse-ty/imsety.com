import Text from '@/components/fixed-krado-components/Text';
import { Link } from 'krado-react';

export const simpleComponentsSummaryText = {
  p: (props) => (
    <Text variant='body.summary' sx={{ fontSize: 'inherit', marginY: 10 }}>
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
