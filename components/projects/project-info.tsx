/** @jsxImportSource theme-ui */
// @ts-nocheck

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
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { components } from '@/lib/components';

export default function ProjectInfo({ info, stats, summary }) {
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
            <TinaMarkdown content={summary} />
          </Text>
        </Flex>
        <StatGrid>
          {stats.map((stat, index) => {
            return (
              <StatCard
                icon={<MdLightbulb />}
                heading={stat.heading}
                text={stat.text}
                numberPrefix={stat.numberPrefix}
                number={stat.number}
                numberSuffix={stat.numberSuffix}
                isHeadingSmall={stat.isHeadingSmall}
                key={index}
              />
            );
          })}
        </StatGrid>
      </Container>
    </Box>
  );
}
