import Head from 'next/head';
import RightTriangle from '../public/right-triangle.svg';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-imsetyBlack">
      <Head>
        <title>Imsety Taylor - Motion Designer</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
      </Head>
      <main className="flex items-center w-full h-full min-h-screen">
        <motion.div
          whileHover={{
            scale: 3,
            transition: { type: 'spring', duration: 0.5, bounce: 0.4 }
          }}
          animate={{ scale: 2 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 5 }}
          className="mx-auto"
        >
          <a
            href="https://www.instagram.com/imse_ty"
            target="_blank"
            rel="noopener"
          >
            <RightTriangle alt="A right triangle" />
          </a>
        </motion.div>
      </main>
    </div>
  );
}
