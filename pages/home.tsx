/** @jsxImportSource theme-ui */

import Layout from '@/components/layout';
import IndexSection from '@/components/index-section';
import Shade from '@/components/shade';
import Hero from '@/components/hero';

export default function NewHome() {
  return (
    <Layout disableScroll={false}>
      <Shade>
        <IndexSection
          id='reel'
          title='Reel'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi'
          imageAlt='My image'
          imageSrc='work/beeple-3.png'
          href='#'
        />
      </Shade>
    </Layout>
  );
}
