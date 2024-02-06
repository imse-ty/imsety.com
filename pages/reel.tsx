/** @jsxImportSource theme-ui */
//@ts-nocheck

import ReelSection from '@/components/reel/reel-section';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Reel() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  return (
    <>
      <NextSeo title="Imsety - Reel" />
      <ReelSection
        isPlayButtonHidden={false}
        isVideoActive={isVideoActive}
        setIsVideoActive={() => setIsVideoActive(!isVideoActive)}
      />
    </>
  );
}
