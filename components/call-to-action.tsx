/** @jsxImportSource theme-ui */

import { Button, Container, Flex, colors } from 'krado-react';
import Heading from './fixed-krado-components/Heading';
import Text from './fixed-krado-components/Text';
import { MdOutlineCalendarToday } from 'react-icons/md';

export default function CallToAction({ title, text }) {
  return (
    <Flex
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        paddingTop: '40vh',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: colors.nso300
      }}
    >
      <Container>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100$',
            height: '100%'
          }}
        >
          <Heading
            variant='display.display'
            sx={{
              marginBottom: [2, 3],
              color: 'primary.contrast'
            }}
          >
            {title}
          </Heading>
          <Text
            sx={{
              marginBottom: 4,
              color: 'primary.contrast'
            }}
          >
            {text}
          </Text>
          <Button
            color='secondary.bold'
            backgroundColor='secondary.contrast'
            leftIcon={<MdOutlineCalendarToday />}
            sx={{ borderRadius: 3 }}
          >
            Reach out
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
}
