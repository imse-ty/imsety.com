/** @jsxImportSource theme-ui */

import { Flex, buildColorTheme, colors, theme } from 'krado-react';
import { motion } from 'framer-motion';
import { getColor } from '@theme-ui/color';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';
import { setyTheme } from '@/lib/site-theme';

function SocialMediaLink(props) {
  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    active: {
      scale: 2,
      marginLeft: '40px',
      marginRight: '40px',
      color: getColor(setyTheme, 'primary.regular'),
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
        fontSize: [6, 7, 8],
        color: getColor(setyTheme, 'secondary.regular'),
        marginLeft: [0, null, -4],
        gap: [3, 3]
      }}
    >
      <SocialMediaLink href="https://www.instagram.com/imse_ty" alt="Instagram">
        <FaInstagram />
      </SocialMediaLink>
      <SocialMediaLink href="https://twitter.com/imse_ty" alt="Twitter [X]">
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
        href="https://github.com/imse-ty"
        alt="GitHub"
        delay={0.3}
      >
        <FaGithub />
      </SocialMediaLink>
      <SocialMediaLink
        href="mailto:greetings@imsety.com"
        alt="Email"
        delay={0.4}
      >
        <FaEnvelope />
      </SocialMediaLink>
    </Flex>
  );
}
