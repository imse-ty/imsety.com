/** @jsxImportSource theme-ui */
//@ts-nocheck

import VideoSection from '@/components/video-section';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Reel() {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <>
      <NextSeo noindex />
      <VideoSection
        isPlayButtonHidden={false}
        isVideoActive={isVideoActive}
        url='https://vimeo.com/910900048?share=copy'
        previewSrc='walter-preview.webm'
        poster='walter-thumbnail.jpg'
        setIsVideoActive={() => {
          if (typeof umami !== 'undefined' && !isVideoActive) {
            umami.track('blurb-play');
          }

          setIsVideoActive(!isVideoActive);
        }}
      />
    </>
  );
}
