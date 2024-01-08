/** @jsxImportSource theme-ui */

import { Container, Flex, Box } from 'krado-react';
import Text from '../fixed-krado-components/Text';
import { StatCard, StatGrid } from './project-stats';
import {
  MdCalendarToday,
  MdCampaign,
  MdLightbulb,
  MdPerson,
  MdSchedule
} from 'react-icons/md';

export default function ProjectInfo({ stats, goal, result }) {
  return (
    <Box
      id='info'
      sx={{
        paddingY: 5,
        backgroundColor: 'surface.extralight'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '900px',
          gap: 4
        }}
      >
        <Flex sx={{ flexDirection: 'column', gap: 3, marginBottom: 4 }}>
          <Text variant='body.pretext' sx={{ color: 'surface.regular' }}>
            Summary
          </Text>
          <Text variant='body.summary' sx={{ color: 'surface.bold' }}>
            {goal}
          </Text>
        </Flex>
        <StatGrid>
          <StatCard icon={<MdCalendarToday />} heading='Aug 2022' />
          <StatCard
            icon={<MdPerson />}
            number={27}
            numberSuffix='k'
            text='Attendees'
          />
          <StatCard
            icon={<MdSchedule />}
            number={81}
            numberSuffix=' hours'
            text='Working on this project'
          />
          <StatCard
            icon={<MdCampaign />}
            heading='Used during the promotion of Mega Agent Camp'
            text='Some sections of this video were used in replays of the event!'
            isHeadingSmall
          />
          <StatCard
            icon={<MdLightbulb />}
            heading='20 ideas scrapped'
            text='Some sections of this video were used in [replays of the event](https://youtu.be/FmHrimCjujM)!'
            isHeadingSmall
          />
        </StatGrid>
      </Container>
    </Box>
  );
}
