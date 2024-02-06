/** @jsxImportSource theme-ui */
// @ts-nocheck

import Heading from '@/components/fixed-krado-components/Heading';
import Layout from '@/components/layout';
import { setyTheme } from '@/lib/site-theme';
import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import { Container, Link as KradoLink, Button, colors, Box } from 'krado-react';
import Text from '@/components/fixed-krado-components/Text';
import { motion } from 'framer-motion';
import { ProjectYoutube } from '@/components/projects/project-embed';
import { useReward } from 'react-rewards';
import { MdCelebration } from 'react-icons/md';

import Link from 'next/link';

function ShoutOutHeading({ children, url }) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noindex nofollow'
      sx={{ textDecoration: 'none' }}
    >
      <Heading
        as={motion.h3}
        variant='display.h4'
        initial={{ borderWidth: '3px' }}
        whileHover={{ borderWidth: '6px' }}
        sx={{
          borderBottom: url && 'solid',
          borderBottomColor: 'primary.regular'
        }}
      >
        {children}
      </Heading>
    </a>
  );
}

function ShoutOutText({ children, url }) {
  return (
    <Text as='p' variant='body.summary' sx={{ marginBottom: [3, 4] }}>
      {children}
    </Text>
  );
}

export default function Shoutouts() {
  const { reward } = useReward('rewardId', 'confetti', {
    lifetime: 1000,
    spread: 100,
    colors: [
      colors.nut400,
      colors.ptah300,
      colors.usir300,
      colors.sekmet300,
      colors.oshun300
    ],
    position: 'absolute',
    elementCount: 100,
    elementSize: 15
  });
  const buttonReward = useReward('buttonConfetti', 'confetti', {
    lifetime: 500,
    spread: 100,
    colors: [
      colors.nut400,
      colors.ptah300,
      colors.usir300,
      colors.sekmet300,
      colors.oshun300
    ],
    position: 'absolute',
    elementSize: 15
  }).reward;

  useEffect(() => {
    reward();
  }, []);

  return (
    <Layout>
      <NextSeo
        title='Shout outs - Imsety'
        description="A list of GIANT shoutouts to all the amazing individuals I've had the honor of working with or meeting in 2023."
      />
      <Container
        as='article'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 7,
          textAlign: 'center',
          alignItems: 'center',
          gap: [3, 4],
          maxWidth: '1000px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <span
          sx={{
            position: 'fixed'
          }}
          id='rewardId'
        />
        <Heading as='h1' variant='display.display' sx={{ marginBottom: 4 }}>
          Shout outs!
        </Heading>

        <Heading as='h2' variant='display.h2'>
          👨🏾‍👩🏾‍👧🏾‍👦🏾 My family
        </Heading>

        <Text>
          MASSIVE thanks to my family,{' '}
          <KradoLink
            href='https://www.linkedin.com/in/dantetaylor/'
            target='_blank'
            rel='noindex nofollow'
          >
            Ba-Ba
          </KradoLink>
          , Ya-Ya, brother, and sister for their unwavering support and
          contribution to my journey.
        </Text>

        <Heading as='h2' variant='display.h2'>
          🌐 The community
        </Heading>

        <ShoutOutText>
          And a GIANT shoutout to all the amazing individuals I&apos;ve had the
          honor of working with or meeting in 2023.
        </ShoutOutText>

        <ShoutOutHeading as='h3' variant='display.h3' url='https://ravie.co/'>
          ✨ Ravie.co
        </ShoutOutHeading>

        <ShoutOutText>
          Couldn&apos;t have done it without y&apos;all. I am grateful to
          continue working alongside this team.
        </ShoutOutText>

        <ShoutOutHeading url='https://www.instagram.com/austinbauwens/?hl=en'>
          🔁 Austin Bauwens
        </ShoutOutHeading>

        <ShoutOutText>
          Thanks for the growth and leadership. You make us move fast!
        </ShoutOutText>

        <ShoutOutHeading url='https://www.instagram.com/noahdamonwilde/'>
          ❇️ Noah Damon Wilde
        </ShoutOutHeading>

        <ShoutOutText>
          For the same amazing growth vibes and Overwatch 2 sessions. You
          changed how I see design. Additive vs. subtractive.
        </ShoutOutText>
        <ShoutOutHeading url='https://www.instagram.com/sam.essanoussi/'>
          🟡 Sam Essanoussi
        </ShoutOutHeading>

        <ShoutOutText>
          Working with you kickstarted it all. OG partner vibes and Splice (0:02
          timestamp in Reel) tunnel scene magic.
        </ShoutOutText>
        <ShoutOutHeading url='https://www.instagram.com/barbara.frames/'>
          🌐 Barbara Vorobyeva
        </ShoutOutHeading>

        <ShoutOutText>
          Your full-time travel and unique experiences add an exciting twist to
          the group. A delight to collaborate with you.
        </ShoutOutText>
        <ShoutOutHeading url='https://www.instagram.com/redfordmedia/'>
          🤠 Jackson Redford
        </ShoutOutHeading>

        <ShoutOutText>
          The group&apos;s sunshine is your positivity, Jackson
        </ShoutOutText>
        <ShoutOutHeading url='https://wlroo.design/'>
          💻 Will Taylor (.wlroo)
        </ShoutOutHeading>

        <ShoutOutText>
          From YouTube intros to now, thrilled to work together!
        </ShoutOutText>
        <ShoutOutHeading url='https://www.instagram.com/dannyduhdaddie/'>
          🐸 Danny Chuang
        </ShoutOutHeading>

        <ShoutOutText>
          Love your authenticity and pepe memes. Always bringing that energy!
        </ShoutOutText>
        <ShoutOutHeading url='https://www.kairgb.com/'>
          👾 Kai Webb
        </ShoutOutHeading>

        <ShoutOutText>
          Loved our 36days collab, chats, working together last year. Great to
          share common interests.
        </ShoutOutText>

        <ShoutOutHeading url='https://www.mayatable.com/'>
          😇 Maya Table
        </ShoutOutHeading>
        <ShoutOutHeading url='https://www.samfrankproductions.com/'>
          Sam Frank Productions
        </ShoutOutHeading>

        <ShoutOutText>
          MAYA! You&apos;re inspiring. Your awesomeness and projects together?
          Beyond grateful. Aim for the stars!
        </ShoutOutText>
        <ShoutOutHeading as='h3' variant='display.h3'>
          🎨 Kae McGowan
        </ShoutOutHeading>

        <ShoutOutText>
          Turning your designs into motion was a joy. Eager for more collabs!
        </ShoutOutText>
        <ShoutOutHeading url='https://www.cisconewman.com/'>
          ✖️ Cisco Newman
        </ShoutOutHeading>
        <ShoutOutHeading url='https://www.thefunnelcreative.com/'>
          The Funnel Creative
        </ShoutOutHeading>

        <ShoutOutText>
          Rocking Rock The Campus with you was a blast. Big thanks to you and
          Maya.
        </ShoutOutText>
        <ShoutOutHeading url='https://www.instagram.com/jayisforjelly/'>
          🪼 Jay Brown
        </ShoutOutHeading>

        <ShoutOutText>
          For the amazing referrals and connections. Can&apos;t wait to catch up
          again!
        </ShoutOutText>
        <ShoutOutHeading url='https://www.revilostuff.com/'>
          🏍️ Will Harvey (revilo)
        </ShoutOutHeading>

        <ShoutOutText>
          Beeple Studios night was unforgettable. Thanks for the vibes and
          memories.
        </ShoutOutText>
        <ShoutOutHeading url='https://www.beeple-crap.com/'>
          😜 Mike Winkelmann (beeple)
        </ShoutOutHeading>

        <ShoutOutText>
          Grateful for the support and community event invite. Exhibiting my art
          was a privilege. Amazing experience!
        </ShoutOutText>
        <ShoutOutHeading url='https://www.tilenmourier.com/'>
          🤌 Tilen Mourier
        </ShoutOutHeading>

        <ShoutOutText>
          Enjoyed the Glint challenge with you. Your 36days shined my feed last
          year!
        </ShoutOutText>
        <ShoutOutHeading as='h3' url='https://declos.ca/' variant='display.h3'>
          👓 Alexandre Declos
        </ShoutOutHeading>

        <ShoutOutText>
          Loved tackling the Glint and design challenges with you. Hope
          you&apos;re doing great!
        </ShoutOutText>
      </Container>
      <Container
        sx={{
          flexDirection: 'column',
          display: 'flex',
          maxWidth: '800px',
          marginTop: 5,
          marginBottom: 5
        }}
      >
        <ProjectYoutube url='https://youtu.be/QhW3P7_jvWY' />
      </Container>

      <Box as='section' sx={{ backgroundColor: 'surface.heavy' }}>
        <Container
          sx={{
            flexDirection: 'column',
            display: 'flex',
            maxWidth: '800px',
            height: '100vh',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            gap: 4,
            alignItems: 'center'
          }}
        >
          <span
            sx={{
              pointerEvents: 'none',
              position: 'absolute',
              width: '100%'
            }}
            id='buttonConfetti'
          />
          <Button
            leftIcon={<MdCelebration />}
            onClick={() => {
              if (typeof umami !== 'undefined') {
                umami.track('shout-out-confetti-button-clicked');
              }

              buttonReward();
            }}
            sx={{ marginX: 'auto', overflow: 'hidden' }}
          >
            Press for a surprise
          </Button>
          <Text sx={{ color: 'surface.extrathin' }}>
            Or{' '}
            <Link
              href='/'
              sx={{
                color: 'surface.extralight',
                borderColor: 'surface.extralight'
              }}
            >
              click here
            </Link>{' '}
            to go home
          </Text>
        </Container>
      </Box>
    </Layout>
  );
}
