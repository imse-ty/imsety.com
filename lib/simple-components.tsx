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

  ol: ({ children }) => {
    console.log(children);

    return (
      <UnorderedList>
        {children.map((item) => {
          <Text variant='body.summary'>{item.children}</Text>;
        })}
      </UnorderedList>
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
