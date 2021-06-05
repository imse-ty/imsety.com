import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ImsetyWordmark from '../public/imsety-wordmark.svg';

function MenuItem({ children, href, ...props }) {
  return (
    <li className="my-6 font-medium text-3xl md:ml-3 md:text-base uppercase">
      <Link href={href} {...props}>
        <a className="p-3">{children}</a>
      </Link>
    </li>
  );
}

function MenuItems() {
  return (
    <>
      <MenuItem href="/">Work</MenuItem>
      <MenuItem href="/info">Info</MenuItem>
      <MenuItem href="/blog">Blog</MenuItem>
    </>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants = {
    opened: { left: 0, opacity: 1 },
    closed: { left: '-100vw', opacity: 0 }
  };
  const backdropVariants = {
    opened: { opacity: 1 },
    closed: { opacity: 0 }
  };

  console.log(isOpen);

  return (
    <nav>
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-3 z-20"
        >
          <FaBars className=" text-2xl" />
        </button>
        <motion.div
          animate={!isOpen ? 'closed' : 'open'}
          variants={menuVariants}
          className={`flex list-none fixed top-0 left-0 z-10 min-w-full min-h-full pt-40 px-8 flex-col md:static md:flex-row md:min-w-0 md:min-h-0 md:p-0`}
        >
          <MenuItems />
        </motion.div>
      </div>

      <motion.div
        animate={!isOpen ? 'closed' : 'open'}
        initial={false}
        variants={backdropVariants}
        className="fixed top-0 left-0 min-w-full min-h-full bg-imsetyWhite bg-opacity-75 backdrop-filter backdrop-blur md:hidden"
      />

      <div className="list-none hidden md:flex md:static md:flex-row md:min-w-0 md:min-h-0 md:p-0">
        <MenuItems />
      </div>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="sticky z-20 top-0 py-10 bg-imsetyWhite shadow-xl">
      <div className="flex items-center justify-between container mx-auto">
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
