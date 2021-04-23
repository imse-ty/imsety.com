import Head from 'next/head';
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVimeo,
  FaYoutube
} from 'react-icons/fa';

function SocialMediaLink(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="hover:text-gray-300 hover:scale-125 transform transition duration-300"
    >
      {props.children}
    </a>
  );
}

function SocialMediaIcons() {
  return (
    <div className="flex text-3xl justify-between max-w-sm">
      <SocialMediaLink href="https://twitter.com/imse_ty">
        <FaTwitter />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.instagram.com/imse.ty">
        <FaInstagram />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.behance.net/imsety">
        <FaBehance />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.linkedin.com/in/imsety">
        <FaLinkedin />
      </SocialMediaLink>
      <SocialMediaLink href="https://dribbble.com/Imsety">
        <FaDribbble />
      </SocialMediaLink>
      <SocialMediaLink href="https://vimeo.com/imsety">
        <FaVimeo />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.youtube.com/channel/UCVptL5EXU-Rd8lvuQvzDK3A">
        <FaYoutube />
      </SocialMediaLink>
    </div>
  );
}

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
        <div className="flex flex-col w-screen h-screen lg:flex-row">
          <div className="bg-imsetyBlack text-imsetyWhite p-8 md:p-20 flex flex-col justify-between h-1/2 lg:w-1/2 lg:h-full">
            <header>
              <img
                src="/imsety-wordmark-white.svg"
                alt="Imsety"
                className="w-36"
              />
            </header>
            <div>
              <h1 className="font-bold text-3xl md:text-4xl mb-3">
                Hey, my name is Imsety Taylor
              </h1>
              <p className="mb-6 md:text-lg">
                I’m a Motion Designer based in Atlanta, GA.
              </p>
              <SocialMediaIcons />
            </div>
            <footer>
              <p className="text-sm">
                © 2021 Imsety Taylor. All rights reserved.
              </p>
            </footer>
          </div>
          <div className="relative h-1/2 lg:w-1/2 lg:h-full">
            <div className="absolute z-20 bg-imsetyWhite bg-opacity-25 min-w-full min-h-full" />
            <video
              autoPlay
              loop
              muted
              className="absolute z-10 object-cover w-auto min-w-full min-h-full"
            >
              <source src="/setymedia-2020-reel-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}
