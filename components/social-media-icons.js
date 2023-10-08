/** @jsxImportSource theme-ui */

import { Flex, colors } from 'krado-react';
import { motion } from 'framer-motion';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub
} from 'react-icons/fa';

function SocialMediaLink(props) {
  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    active: {
      scale: 2,
      marginLeft: '40px',
      marginRight: '40px',
      color: colors.nso200,
      transition: { type: 'spring' }
    }
  };

  return (
    <motion.a
      {...props}
      target="_blank"
      rel="noopener"
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="active"
      whileFocus="active"
      transition={{ type: 'spring', delay: props.delay }}
      sx={{
        padding: [0, null, 4],
        color: 'inherit',
        textDecoration: 'none',
        '&:focus': { outline: 'none' }
      }}
    >
      {props.children}
    </motion.a>
  );
}

export default function SocialMediaIcons() {
  return (
    <Flex
      sx={{
        width: ['100%', null, 'initial'],
        justifyContent: 'space-between',
        fontSize: [7, 8],
        color: 'surface.extralight',
        marginLeft: [0, null, -4],
        gap: [3, 3]
      }}
    >
      <SocialMediaLink href="https://www.instagram.com/imse_ty" alt="Instagram">
        <FaInstagram />
      </SocialMediaLink>
      <SocialMediaLink href="https://twitter.com/imse_ty" alt="Twitter">
        <FaTwitter />
      </SocialMediaLink>
      <SocialMediaLink
        href="https://www.linkedin.com/in/imsety"
        alt="LinkedIn"
        delay={0.1}
      >
        <FaLinkedin />
      </SocialMediaLink>
      <SocialMediaLink
        href="https://www.youtube.com/imsety"
        alt="YouTube"
        delay={0.2}
      >
        <FaYoutube />
      </SocialMediaLink>
      <SocialMediaLink
        href="https://www.github.com/imse-ty"
        alt="YouTube"
        delay={0.2}
      >
        <FaGithub />
      </SocialMediaLink>
    </Flex>
  );
}
