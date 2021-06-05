import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ImsetyWordmark from '../public/imsety-wordmark.svg';

function MenuItem({ children, href, ...props }) {
  return (
    <li className="ml-4 font-medium uppercase">
      <Link href={href} {...props}>
        <a className="p-3">{children}</a>
      </Link>
    </li>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <nav>
      <FaBars className="md:hidden text-2xl" />
      <ul className="hidden md:flex">
        <MenuItem href="/">Work</MenuItem>
        <MenuItem href="/info">Info</MenuItem>
        <MenuItem href="/blog">Blog</MenuItem>
      </ul>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="sticky z-50 top-0 py-10 bg-imsetyWhite shadow-xl">
      <div className="flex justify-between container mx-auto">
        <ImsetyWordmark
          width="132px"
          height="33px"
          viewBox="0 0 933.86 231"
          className="fill-current"
        />
        <Navigation />
      </div>
    </header>
  );
}
