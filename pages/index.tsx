/** @jsxImportSource theme-ui */
// @ts-nocheck

import CallToAction from '@/components/call-to-action';
import Layout from '@/components/layout';
import FullScreenVideo from '@/components/work/full-screen-video';
import ReelVideo from '@/components/work/reel-video';
import { Box, Flex } from 'krado-react';
import { useState } from 'react';
import Shade, { ShadeButton } from '@/components/shade';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import client from '@/tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';
import ProjectsSection from '@/components/work/projects-section';
import ServicesSection from '@/components/work/services-section';
import AboutSection from '@/components/work/about-section';
import RightTriangle from '../public/right-triangle.svg';

export default function Work(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  });

  const projectsList = data.workPage.projects;

  return <Layout disableScroll={false}></Layout>;
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.workPage({
    relativePath: 'work-page.json'
  });

  return {
    props: {
      data,
      query,
      variables
    }
  };
};
