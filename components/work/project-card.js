import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  subtitle,
  coverAlt,
  coverSrc,
  href
}) {
  const cardVariants = {
    active: { zIndex: 10, scale: 1.2 },
    idle: { scale: 1 }
  };
  const labelVariants = { active: { opacity: 1 }, idle: { opacity: 0 } };
  const textVariants = {
    active: {
      x: 0,
      transition: { type: 'spring', duration: 0.6 }
    },
    idle: {
      x: '-25%',
      transition: { type: 'spring', duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="idle"
      whileHover="active"
      whileTap={{ scale: 0.9 }}
      transition={{
        type: 'spring',
        bounce: 0.32,
        duration: 0.6
      }}
      className="z-0 relative w-full h-full text-imsetyWhite overflow-hidden rounded-xl"
    >
      <Link href={href}>
        <a>
          <motion.div
            initial={false}
            whileHover="active"
            animate="idle"
            transition={{
              staggerChildren: 0.03
            }}
            variants={labelVariants}
            className="absolute z-10 flex flex-col justify-end w-full h-full p-4 md:p-8 bg-imsetyBlack bg-opacity-40"
          >
            <motion.h3
              variants={textVariants}
              className="mb-3 max-w-md text-lg xl:text-2xl font-bold"
            >
              {title}
            </motion.h3>
            <motion.p
              variants={textVariants}
              className="max-w-md text-sm xl:text-lg"
            >
              {subtitle}
            </motion.p>
          </motion.div>
          <Image
            alt={coverAlt}
            src={coverSrc}
            width={640}
            height={640}
            layout="responsive"
          />
        </a>
      </Link>
    </motion.div>
  );
}

ProjectCard.defaultProps = {
  coverAlt: 'Project cover image',
  coverSrc: ''
};
