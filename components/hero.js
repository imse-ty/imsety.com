import SocialMediaIcons from './social-media-icons';

export default function Hero() {
  return (
    <div>
      <h1 className="font-bold text-3xl md:text-4xl my-3">
        Hey, my name is Imsety Taylor
      </h1>
      <p className="my-3 md:text-lg">
        I’m a Motion Designer based in Atlanta, GA.
      </p>
      <SocialMediaIcons className="my-3" />
    </div>
  );
}
