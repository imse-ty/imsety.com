import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from '../components/link';

export default function Info() {
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        title="About - Imsety Taylor"
        description="About Imsety Taylor."
      />
      <Header />
      <main className="flex flex-col md:flex-row flex-grow mb-24">
        <img
          alt="Imsety looking at up the sky in black and white"
          src="/imsety-looking-at-the-sky-in-black-and-white.jpg"
          width="710"
          height="880"
          className="object-cover w-full md:w-1/2 h-50v md:h-80v"
        />

        <div className="container flex flex-col justify-center mx-0 py-8">
          <h1 className="mb-6 font-bold text-3xl md:text-6xl">About</h1>
          <p className="mb-6 max-w-2xl">
            Hi there, my name is Imsety Taylor! I’m an Atlanta-based designer
            and developer. I work with code and motion to craft digital media in
            the forms of animations, websites, apps, and more.
          </p>
          <p className="mb-6 max-w-2xl">
            My interest in design and technology dates back to when I was eight
            years old. Since then, I’ve always been passionate about solving
            unique and interesting problems.
          </p>
          <p className="mb-6 max-w-2xl">
            One of my core principles is focusing on the process instead of
            results. It’s easy to get fixated on the final outcome, which can
            lead to a lesser finished product as a whole. For me, I find that by
            respecting the journey, the results will come naturally. An athlete
            doesn't focus on winning. Instead, they focus on playing the best
            they can.
          </p>
          <p className="mb-3 max-w-2xl">
            Things I’m excited about at the moment:
          </p>
          <ul className="mb-6 ml-12 max-w-2xl list-disc">
            <li>
              Creating{' '}
              <NextLink href="/#projects" passHref>
                <Link>pleasing to the eye</Link>
              </NextLink>{' '}
              animations.
            </li>
            <li>
              <Link
                href="https://github.com/imse-ty"
                target="_blank"
                rel="noopener"
              >
                Developing
              </Link>{' '}
              software and digital products.
            </li>
            <li>
              Building{' '}
              <Link href="https://sety.media" target="_blank" rel="noopener">
                businesses
              </Link>{' '}
              and pursuing entrepreneurial ventures.
            </li>
            <li>Enjoying the process and learning new things.</li>
          </ul>
          <p className="mb-10 max-w-2xl">
            When I’m not focused on work, I enjoy spending my free time playing
            video games, listening to music, and{' '}
            <Link
              href="https://soundcloud.com/imsety"
              target="_blank"
              rel="noopener"
            >
              producing beats
            </Link>
            .
          </p>
          <a href="mailto:greetings@imsety.com">
            <button
              type="button"
              className="px-14 py-5 font-bold text-imsetyWhite dark:text-imsetyBlack bg-imsetyBlack dark:bg-imsetyWhite hover:scale-105 transform transition duration-300"
            >
              Reach out
            </button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
