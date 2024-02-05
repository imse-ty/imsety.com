/** @jsxImportSource theme-ui */
//@ts-nocheck

import VideoSection from '@/components/video-section';
import { useState } from 'react';

export default function Reel() {
  const [isVideoActive, setIsVideoActive] = useState(false);

  return (
    <VideoSection
      isPlayButtonHidden={false}
      isVideoActive={isVideoActive}
      url="https://vimeo.com/909867611"
      previewSrc="walter-preview.webm"
      poster="walter-thumbnail.jpg"
      setIsVideoActive={() => {
        if (typeof umami !== 'undefined' && !isVideoActive) {
          umami.track('waltergeer-blurb-play');
        }

        setIsVideoActive(!isVideoActive);
      }}
    />
  );
}
