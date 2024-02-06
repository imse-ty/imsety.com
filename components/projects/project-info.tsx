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
import {
  simpleComponents,
  simpleComponentsSummaryText
} from '@/lib/simple-components';

export default function ProjectInfo({ info, stats, summary }) {
  return (
    <Box
      id="info"
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
          gap: 4,
          marginBottom: 5
        }}
      >
        {info && (
          <Flex sx={{ flexDirection: 'column', gap: 3 }}>
            {info.map((tooltip, index) => {
              return (
                <Tooltip
                  label={tooltip.label}
                  text={tooltip.text}
                  labelColor="surface.regular"
                  textColor="surface.bold"
                  dividerColor="surface.light"
                  key={index}
                />
              );
            })}
          </Flex>
        )}
        {summary.children.length > 0 ? (
          <Flex sx={{ flexDirection: 'column', gap: 3, color: 'surface.bold' }}>
            <Text
              as="h2"
              variant="body.pretext"
              sx={{ color: 'surface.regular' }}
            >
              Summary
            </Text>
            <TinaMarkdown
              content={summary}
              components={simpleComponentsSummaryText}
            />
          </Flex>
        ) : null}
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
                numberDecimals={stat.numberDecimals}
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
