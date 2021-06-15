import SocialMediaIcons from '../social-media-icons';

export default function Hero() {
  return (
    <div>
      <h1 className="font-bold text-3xl xl:leading-tight md:text-4xl xl:text-6xl lg:pr-4">
        Hey, my name is Imsety&nbsp;Taylor
      </h1>
      <p className="my-6 font-medium md:text-lg">
        I’m a Motion Designer based in Atlanta, GA.
      </p>
      <SocialMediaIcons />
    </div>
  );
}
