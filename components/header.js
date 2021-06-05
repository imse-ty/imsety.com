import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ImsetyWordmark from '../public/imsety-wordmark.svg';

function MenuItem({ children, href, ...props }) {
  const variants = {
    opened: { x: 0 },
    closed: { x: '-100%' }
  };

  return (
    <motion.li
      variants={variants}
      transition={{ type: 'spring', duration: 0.8 }}
      className="my-6 font-medium text-3xl md:ml-3 md:my-0 md:text-base uppercase"
    >
      <Link href={href} {...props}>
        <a className="p-3">{children}</a>
      </Link>
    </motion.li>
  );
}

function Menu() {
  const variants = {
    opened: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return (
    <motion.ul variants={variants} className={`flex flex-col md:flex-row`}>
      <MenuItem href="/">Work</MenuItem>
      <MenuItem href="/info">Info</MenuItem>
      <MenuItem href="/blog">Blog</MenuItem>
    </motion.ul>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    opened: { opacity: 1 },
    closed: { opacity: 0 }
  };

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
          initial={false}
          animate={!isOpen ? 'closed' : 'opened'}
          variants={variants}
          className="fixed top-0 left-0 z-10 min-w-full min-h-full pt-40 px-8 bg-imsetyWhite bg-opacity-75 backdrop-filter backdrop-blur"
        >
          <Menu />
        </motion.div>
      </div>

      <div className="hidden md:block">
        <Menu />
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
