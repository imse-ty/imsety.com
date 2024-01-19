import { useColorMode } from 'theme-ui';
import { Footer, FooterFootnote, FooterContent, Flex, Text } from 'krado-react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa6';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';

export function FooterLink({ icon, children, href }) {
  return (
    <Flex
      as='a'
      href={href}
      target='_blank'
      rel='noindex nofollow'
      sx={{
        alignItems: 'center',
        gap: 2,
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      {icon}
      <Text variant='body.footnote' sx={{ color: 'inherit' }}>
        {children}
      </Text>
    </Flex>
  );
}

export default function SiteFooter({ textColor, linkColor }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Footer style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <FooterFootnote
        sx={{
          color: textColor,
          textAlign: ['center', null, 'left']
        }}
      >
        Copyright © 2024 Imsety LLC. All rights reserved.
      </FooterFootnote>
      <FooterContent
        sx={{
          display: 'flex',
          gap: [3, null, null, 5],
          marginTop: [3, null, 0],
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: linkColor
        }}
      >
        <FooterLink
          href='https://www.instagram.com/imse_ty'
          icon={<FaInstagram />}
        >
          Instagram
        </FooterLink>
        <FooterLink
          href='https://www.linkedin.com/in/imsety'
          icon={<FaLinkedin />}
        >
          LinkedIn
        </FooterLink>
        <FooterLink href='https://www.youtube.com/imsety' icon={<FaYoutube />}>
          Youtube
        </FooterLink>
        <FooterLink href='https://twitter.com/imse_ty' icon={<FaTwitter />}>
          Twitter
        </FooterLink>
        <FooterLink href='https://github.com/imse-ty' icon={<FaGithub />}>
          GitHub
        </FooterLink>

        <Flex
          as={motion.div}
          onClick={(e) => {
            const next = colorMode === 'dark' ? 'light' : 'dark';
            setColorMode(next);
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', duration: 0.8 }}
          sx={{
            fontSize: 5,
            color: 'inherit'
          }}
        >
          {colorMode === 'dark' ? <MdLightMode /> : <MdDarkMode />}
        </Flex>
      </FooterContent>
    </Footer>
  );
}
