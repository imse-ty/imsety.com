import Head from 'next/head';
import RightTriangle from '../public/right-triangle.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  return (
    <div
      className={`
      min-h-screen transition

      ${
        isLight
          ? 'bg-imsetyWhite text-imsetyBlack'
          : 'bg-imsetyBlack text-imsetyWhite'
      }`}
    >
      <Head>
        <title>Imsety Taylor</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
      </Head>
      <main className="flex items-center w-full h-full min-h-screen">
        <motion.div
          onClick={() => setIsLight(!isLight)}
          whileHover={{
            scale: 3,
            transition: { type: 'spring', duration: 0.5, bounce: 0.4 }
          }}
          animate={{ scale: 2 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
          className="mx-auto cursor-pointer"
        >
          <RightTriangle alt="A right triangle" className="fill-current" />
        </motion.div>
      </main>
    </div>
  );
}
