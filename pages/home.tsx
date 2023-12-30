/** @jsxImportSource theme-ui */

import Layout from '@/components/layout';
import IndexSection from '@/components/index-section';
import Shade from '@/components/shade';
import Hero from '@/components/hero';

export default function NewHome() {
  return (
    <Layout disableScroll={false}>
      <Shade />
      <div
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      >
        <IndexSection
          title='Reel'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/beeple-3.png'
          href='/reel'
        />
      </div>
    </Layout>
  );
}
