import SocialMediaIcons from '../social-media-icons';

export default function Hero() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 font-bold text-3xl xl:leading-tight md:text-4xl xl:text-5xl lg:pr-4">
        Greetings! My name is&nbsp;Imsety
      </h1>
      <p className="mb-12">
        I'm a designer and developer based in Atlanta, GA. I leverage skills
        such as motion design and coding to create engaging experiences ranging
        from animations to digital projects.
      </p>
      <SocialMediaIcons />
    </div>
  );
}
