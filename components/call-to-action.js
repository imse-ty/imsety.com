/** @jsxImportSource theme-ui */

import { Button, Flex } from 'krado-react';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import {
  MdCalendarMonth,
  MdEmail,
  MdOutlineCalendarToday,
  MdOutlineMailOutline
} from 'react-icons/md';

export default function CallToAction({ title, text }) {
  return (
    <Flex
      sx={{
        position: 'relative',
        paddingX: [4, 6],
        paddingY: [6, 6],
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.50)',
        borderRadius: ['24px', '40px']
      }}
    >
      <Heading
        variant="display.display"
        sx={{ marginBottom: [2, 3], fontWeight: '500' }}
      >
        {title}
      </Heading>
      <Text sx={{ marginBottom: 4, maxWidth: ['none', '50%'] }}>{text}</Text>
      <Button
        color="secondary.bold"
        backgroundColor="white"
        leftIcon={<MdOutlineCalendarToday />}
        sx={{ borderRadius: 4 }}
      >
        Schedule a chat
      </Button>
      <video
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
        poster="/turntable-thumbnail.png"
        autoPlay
        muted
        loop
      >
        <source src="/2020-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Flex>
  );
}
