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
import Tooltip from '../tooltip';
import { simpleComponents } from '@/lib/simple-components';

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
          gap: 5,
          marginBottom: 5
        }}
      >
        {info && (
          <Flex sx={{ flexDirection: 'column', gap: 4 }}>
            {info.map((tooltip, index) => {
              return (
                <Tooltip
                  label={tooltip.label}
                  text={tooltip.text}
                  labelColor='surface.regular'
                  textColor='surface.bold'
                  dividerColor='surface.light'
                  key={index}
                />
              );
            })}
          </Flex>
        )}
        {summary && (
          <Flex sx={{ flexDirection: 'column', gap: 4 }}>
            <Text variant='body.pretext' sx={{ color: 'surface.regular' }}>
              Summary
            </Text>
            <Text variant='body.summary' sx={{ color: 'surface.bold' }}>
              <TinaMarkdown content={summary} components={simpleComponents} />
            </Text>
          </Flex>
        )}
      </Container>
      {stats && (
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
      )}
    </Box>
  );
}
