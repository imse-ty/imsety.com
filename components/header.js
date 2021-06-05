import ImsetyWordmark from '../public/imsety-wordmark.svg';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>Work</li>
        <li>Info</li>
        <li>Blog</li>
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
