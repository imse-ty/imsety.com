import { motion } from 'framer-motion';
import SocialMediaIcons from './social-media-icons';

export default function Footer() {
  const variant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
    hover: { opacity: 1 }
  };

  return (
    <motion.footer
      variants={variant}
      initial="hidden"
      animate="show"
      whileHover="hover"
      className="absolute bottom-0 px-4 py-14 my-12 w-full"
    >
      <SocialMediaIcons />
      <p className="mt-12 text-xs text-center opacity-40">
        Copyright © 2021 Imsety Taylor. All rights reserved.
      </p>
    </motion.footer>
  );
}
