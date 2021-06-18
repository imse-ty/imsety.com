import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import ImsetyWordmark from '../public/imsety-wordmark.svg';

function MenuItem({ children, ...props }) {
  const { asPath } = useRouter();
  const isCurrentPath = asPath === props.href || asPath === props.as;
  const variants = {
    opened: { x: 0 },
    closed: { x: '-100%' }
  };

  return (
    <motion.li
      variants={variants}
      transition={{ type: 'spring', duration: 0.8 }}
      className={`
        my-6 font-medium text-3xl md:ml-3 md:my-0 md:text-base uppercase

        ${isCurrentPath ? 'font-bold' : ''}
      `}
    >
      <Link {...props}>
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
          onTap={() => {
            setIsOpen(false);
          }}
          initial={false}
          animate={!isOpen ? 'closed' : 'opened'}
          variants={variants}
          className="container fixed top-0 left-0 z-10 w-screen h-screen pt-40 bg-imsetyWhite dark:bg-imsetyBlack bg-opacity-75 backdrop-filter backdrop-blur"
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
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow((hasShadow) => {
        if (!hasShadow && window.scrollY > 113) {
          return true;
        }

        if (hasShadow && window.scrollY < 2) {
          return false;
        }

        return hasShadow;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky z-20 top-0 py-4 md:py-10 bg-imsetyWhite dark:bg-imsetyBlack dark:bg-opacity-75 dark:backdrop-filter backdrop-blur transition-shadow duration-500

        ${hasShadow ? 'shadow-xl' : ''}
      `}
    >
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <a>
            <ImsetyWordmark
              width="132px"
              height="33px"
              viewBox="0 0 933.86 231"
              className="fill-current w-24 md:w-auto"
            />
          </a>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
