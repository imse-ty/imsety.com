import Link from 'next/link';
import ImsetyWordmark from '../public/imsety-wordmark.svg';

function MenuItem({ children, href, ...props }) {
  return (
    <li>
      <Link href={href} {...props}>
        <a>{children}</a>
      </Link>
    </li>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <MenuItem href="/">Work</MenuItem>
        <MenuItem href="/info">Info</MenuItem>
        <MenuItem href="/blog">Blog</MenuItem>
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header>
      <ImsetyWordmark
        width="132px"
        height="33px"
        viewBox="0 0 933.86 231"
        className="fill-current"
      />
      <Navigation />
    </header>
  );
}
