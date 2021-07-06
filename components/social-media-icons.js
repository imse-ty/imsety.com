import { motion } from 'framer-motion';

import {
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVimeo,
  FaYoutube
} from 'react-icons/fa';

function SocialMediaLink(props) {
  const variant = {
    hidden: { x: -100, y: -20, scale: 0.5, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      scale: [0.5, 1.5, 1],
      opacity: 0.3,
      transition: {
        type: 'spring',
        duration: 1.5
      }
    }
  };

  return (
    <motion.a
      variants={variant}
      target="_blank"
      rel="noopener"
      whileHover={{ opacity: 1 }}
      className="hover:text-gray-400 dark:hover:text-gray-300 transition-colors duration-500"
      {...props}
    >
      {props.children}
    </motion.a>
  );
}

export default function SocialMediaIcons() {
  return (
    <div className="flex text-2xl md:text-3xl justify-between mx-auto max-w-2xl">
      <SocialMediaLink href="https://twitter.com/imse_ty" alt="Twitter">
        <FaTwitter />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.instagram.com/imse_ty" alt="Instagram">
        <FaInstagram />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.behance.net/imsety" alt="Behance">
        <FaBehance />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.linkedin.com/in/imsety" alt="LinkedIn">
        <FaLinkedin />
      </SocialMediaLink>
      <SocialMediaLink href="https://dribbble.com/imsety" alt="Dribble">
        <FaDribbble />
      </SocialMediaLink>
      <SocialMediaLink href="https://vimeo.com/imsety" alt="Vimeo">
        <FaVimeo />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.youtube.com/imsety" alt="YouTube">
        <FaYoutube />
      </SocialMediaLink>
      <SocialMediaLink href="mailto:hello@imsety.com" alt="Email">
        <FaEnvelope />
      </SocialMediaLink>
    </div>
  );
}
