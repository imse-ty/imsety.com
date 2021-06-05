import ImsetyWordmark from '../public/imsety-wordmark.svg';

function MenuItem({ children }) {
  return <li>{children}</li>;
}

function Navigation() {
  return (
    <nav>
      <ul>
        <MenuItem>Work</MenuItem>
        <MenuItem>Info</MenuItem>
        <MenuItem>Blog</MenuItem>
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
