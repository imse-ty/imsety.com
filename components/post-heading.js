import slugify from 'slugify';

function createAnchor(text) {
  return slugify(text, { lower: true });
}

export function Heading1({ children }) {
  const id = createAnchor(children);

  return (
    <h1 id={id} style={{ scrollMarginTop: '3em' }} className="hover:underline">
      <a
        href={`#${id}`}
        style={{ textDecoration: 'none', fontWeight: 'inherit' }}
      >
        {children}
      </a>
    </h1>
  );
}

export function Heading2({ children }) {
  const id = createAnchor(children);

  return (
    <h2 id={id} style={{ scrollMarginTop: '3em' }} className="hover:underline">
      <a
        href={`#${id}`}
        style={{ textDecoration: 'none', fontWeight: 'inherit' }}
      >
        {children}
      </a>
    </h2>
  );
}

export function Heading3({ children }) {
  const id = createAnchor(children);

  return (
    <h3 id={id} style={{ scrollMarginTop: '3em' }} className="hover:underline">
      <a
        href={`#${id}`}
        style={{ textDecoration: 'none', fontWeight: 'inherit' }}
      >
        {children}
      </a>
    </h3>
  );
}
