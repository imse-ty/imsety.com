import SocialMediaIcons from './social-media-icons';

export default function Hero() {
  return (
    <div>
      <h1 className="font-bold text-3xl md:text-4xl mb-3">
        Hey, my name is Imsety Taylor
      </h1>
      <p className="mb-6 md:text-lg">
        I’m a Motion Designer based in Atlanta, GA.
      </p>
      <SocialMediaIcons />
    </div>
  );
}
