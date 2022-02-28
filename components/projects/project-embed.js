import Image from 'next/image';
import getVideoId from 'get-video-id';

export function ProjectImage({ alt, src }) {
  if (!alt | !src) {
    return (
      <div className="container flex justify-center h-50v">
        <div className="my-auto">
          <div className="text-3xl md:text-6xl font-bold mb-3 md:mb-6">
            Uh oh, missing content!
          </div>
          <p className="mb-2 md:mb-3">
            Either <code>alt</code> or <code>src</code> is not defined.
          </p>
          <p>
            If you some how see this and you're not Imsety, well... let him
            know.
          </p>
        </div>
      </div>
    );
  }

  return (
    <figure>
      <Image
        alt={alt}
        src={src}
        width={1280}
        height={720}
        layout="responsive"
        objectFit="cover"
      />
    </figure>
  );
}

export function ProjectYoutube({ url }) {
  const getYoutubeId = () => {
    if (url) {
      return getVideoId(url).id;
    }
  };
  const youtubeId = getYoutubeId();
  const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <figure
      style={{ paddingBottom: '56.25%' }}
      className="relative overflow-hidden h-0"
    >
      <iframe
        src={youtubeUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="absolute top-0 left-0 w-full h-full"
      />
    </figure>
  );
}

export function ProjectVimeo({ url }) {
  const getVimeoId = () => {
    if (url) {
      return getVideoId(url).id;
    }
  };
  const vimeoId = getVimeoId();
  const vimeoUrl = `https://player.vimeo.com/video/${vimeoId}?playsinline=0`;

  return (
    <figure
      style={{ paddingBottom: '56.25%' }}
      className="relative overflow-hidden h-0"
    >
      <iframe
        src={vimeoUrl}
        title="Vimeo video player"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
      />
    </figure>
  );
}
