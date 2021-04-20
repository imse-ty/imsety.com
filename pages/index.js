import Head from 'next/head';
import { FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="text-imsetyBlack">
      <Head>
        <title>Imsety Taylor - Motion Designer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="flex flex-col h-screen">
          <div className="bg-imsetyBlack text-imsetyWhite p-8 flex-1 flex flex-col justify-between">
            <header>
              <div className="font-bold text-4xl">Imsety</div>
            </header>
            <div>
              <h1 className="font-bold text-3xl">
                Hey, my name is Imsety Taylor
              </h1>
              <p>I’m a Motion Designer based in Atlanta, GA.</p>
            </div>
            <footer>
              <p className="text-sm">
                © 2021 Imsety Taylor. All rights reserved.
              </p>
            </footer>
          </div>
          <div className="bg-imsetyWhite flex-1" />
        </div>
      </main>
    </div>
  );
}
