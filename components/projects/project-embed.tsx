/** @jsxImportSource theme-ui */
// @ts-nocheck

import getVideoId from 'get-video-id';

export function ProjectVideo({ src }) {
  return (
    <video
      controls
      sx={{
        marginY: 4,
        marginX: [0, null, null, '-25%', '-50%'],
        position: 'relative',
        overflow: 'hidden',
        borderRadius: [2, null, null, null, 3]
      }}
    >
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
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
      sx={{
        marginY: 4,
        marginX: [0, null, null, '-25%', '-50%'],
        aspectRatio: '16/9',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: [2, null, null, null, 3]
      }}
    >
      <iframe
        src={youtubeUrl}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </figure>
  );
}

export function ProjectVimeo({ url, ...rest }) {
  const getVimeoId = () => {
    if (url) {
      return getVideoId(url).id;
    }
  };
  const vimeoId = getVimeoId();
  const vimeoUrl = `https://player.vimeo.com/video/${vimeoId}?playsinline=0&transparent=0`;

  return (
    <figure
      sx={{
        marginY: 4,
        marginX: [0, null, null, '-25%', '-50%'],
        aspectRatio: '16/9',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: [2, null, null, null, 3]
      }}
    >
      <iframe
        src={vimeoUrl}
        title='Vimeo video player'
        frameBorder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        allowFullScreen
      />
    </figure>
  );
}
