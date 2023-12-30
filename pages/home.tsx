/** @jsxImportSource theme-ui */

import Layout from '@/components/layout';
import IndexSection from '@/components/index-section';
import Shade from '@/components/shade';
import { useState } from 'react';

export default function NewHome() {
  const [isActive, setIsActive] = useState(false);
  return (
    <Layout disableScroll={false}>
      <Shade isActive={isActive} setIsActive={() => setIsActive(true)}>
        <IndexSection
          title='Reel'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/beeple-3.png'
          href='/reel'
        />
      </Shade>
    </Layout>
  );
}
