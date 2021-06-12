import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import RightTrianglePattern from '../public/right-triangle-pattern.svg';

export default function Info() {
  return (
    <div>
      <Head>
        <title>Info - Imsety Taylor - Motion Designer</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
      </Head>

      <Header />

      <main className="h-70v mb-24">
        <div>
          <img
            alt="Imsety looking away in black and white"
            src="/imsety-looking-away-in-black-and-white.jpg"
            width="710"
            height="880"
          />
          <RightTrianglePattern
            width="740"
            viewBox="0 0 1008 1080"
            className="hidden lg:block absolute overflow-hidden -right-96 h-full fill-current text-imsetyBlack dark:text-imsetyWhite opacity-5"
          />
        </div>
        <div>
          <h1>About</h1>
          <p>
            I'm a Motion Designer based in Atlanta, GA. When I'm designing and
            discovering new ideas with powerful tools such as After Effects or
            Cinema 4D, I regularly ask myself this question: "Is it pleasing to
            the eye?"
            <br />
            Want to get in contact? Email me: hello@imsety.com
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
