import { Footer, FooterFootnote, FooterContent, Flex, Text } from 'krado-react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

export function FooterLink({ icon, children, href }) {
  return (
    <Flex
      as='a'
      href={href}
      sx={{
        alignItems: 'center',
        gap: 2,
        color: 'secondary.contrast',
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

export default function SiteFooter() {
  return (
    <Footer style={{ backgroundColor: 'transparent' }}>
      <FooterFootnote
        sx={{
          color: 'secondary.contrast',
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
          justifyContent: 'center'
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
      </FooterContent>
    </Footer>
  );
}
