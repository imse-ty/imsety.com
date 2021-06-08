import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard() {
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
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', bounce: 0.5 }}
      className="relative w-full h-full text-imsetyWhite overflow-hidden"
    >
      <Link href="#">
        <a>
          <motion.div
            initial={false}
            whileHover="active"
            animate="idle"
            transition={{
              staggerChildren: 0.03
            }}
            variants={labelVariants}
            className="absolute flex flex-col justify-end w-full h-full p-4 md:p-8 bg-imsetyBlack bg-opacity-40"
          >
            <motion.h3
              variants={textVariants}
              className="mb-3 text-2xl md:text-4xl font-bold"
            >
              Lorem ipsum
            </motion.h3>
            <motion.p variants={textVariants} className="text-lg">
              Subtitle
            </motion.p>
          </motion.div>
          <img
            alt="Project cover image"
            src="https://source.unsplash.com/user/dayday95/640x640"
            width={640}
            height={640}
            className="w-full h-full"
          />
        </a>
      </Link>
    </motion.div>
  );
}
