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
      <main className="container flex flex-col lg:flex-row h-50v mb-24">
        <div className="h-3/4 lg:h-full lg:w-1/2">
          <img
            alt="Imsety looking away in black and white"
            src="/imsety-looking-away-in-black-and-white.jpg"
            width="710"
            height="880"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="py-8 md:py-20 lg:p-28 min-h-2/4 lg:h-full lg:w-1/2 lg:max-w-4xl flex flex-col justify-center">
          <h1 className="mb-6 font-bold text-3xl md:text-6xl">About</h1>
          <p className="mb-10 font-medium md:text-lg">
            I'm a Motion Designer based in Atlanta, GA. When I'm designing and
            discovering new ideas with powerful tools such as After Effects or
            Cinema 4D, I regularly ask myself this question: "Is it pleasing to
            the eye?"
          </p>
          <a href="mailto:hello@imsety.com">
            <button
              type="button"
              className="px-14 py-5 font-bold text-imsetyWhite dark:text-imsetyBlack bg-imsetyBlack dark:bg-imsetyWhite hover:scale-105 transform transition duration-300"
            >
              Reach Out
            </button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
