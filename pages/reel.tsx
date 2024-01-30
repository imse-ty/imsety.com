import ReelSection from '@/components/reel/reel-section';
import { useState } from 'react';

export default function Reel() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  return (
    <ReelSection
      isPlayButtonHidden={false}
      isVideoActive={isVideoActive}
      setIsVideoActive={() => setIsVideoActive(!isVideoActive)}
    />
  );
}
