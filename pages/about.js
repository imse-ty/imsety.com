import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Info() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Info - Imsety Taylor - Motion Designer</title>
        <meta
          name="description"
          content="Imsety Taylor is a Motion Designer based in Atlanta, GA. He uses tools such as Adobe After Effects, Adobe Premiere Pro, and Cinema 4D."
        />
      </Head>
      <Header />

      <main className="flex flex-col md:flex-row flex-grow mb-24 md:h-80v">
        <img
          alt="Imsety looking away in black and white"
          src="/imsety-looking-away-in-black-and-white.jpg"
          width="710"
          height="880"
          className="object-cover w-full md:w-2/5 h-50v md:h-full"
        />

        <div className="container flex flex-col justify-center mx-0 py-8">
          <h1 className="mb-6 font-bold text-3xl md:text-6xl">About</h1>
          <p className="mb-10 max-w-2xl font-medium">
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
