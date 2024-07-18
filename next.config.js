/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.tina.io']
  },
  experimental: {
    scrollRestoration: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/rebrand',
        destination: 'https://v1.imsety.com/projects/2022-rebrand',
        permanent: true
      },
      {
        source: '/batchentry',
        destination: 'https://v1.imsety.com/projects/batch-logo-challenge',
        permanent: true
      },
      {
        source: '/triumph',
        destination: 'https://v1.imsety.com/projects/triumph',
        permanent: true
      },
      {
        source: '/settheory',
        destination: 'https://settheory.co/',
        permanent: false
      },
      {
        source: '/podcast',
        destination:
          'https://youtu.be/SdNfCfSo0PU',
        permanent: false
      },
      {
        source: '/rebooting',
        destination:
          'https://www.instagram.com/reel/CljCpkvt53M/?utm_source=ig_web_copy_link',
        permanent: false
      },
      {
        source: '/pianoblack',
        destination: 'https://www.instagram.com/p/ClyofIbpHNy',
        permanent: false
      },
      {
        source: '/live',
        destination: 'https://youtube.com/@imsety/live',
        permanent: true
      },
      {
        source: '/chat',
        destination: 'https://cal.com/imsety/chat/',
        permanent: false
      },
      {
        source: '/call',
        destination: 'https://cal.com/imsety/call/',
        permanent: false
      },
      {
        source: '/thebreakdown',
        destination: 'https://imsety.com/work/the-breakdown-beeple',
        permanent: false
      },
      {
        source: '/beeple',
        destination:
          'https://twitter.com/imse_ty/status/1652085938883887105?s=20',
        permanent: false
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/imse_ty',
        permanent: false
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/imse_ty',
        permanent: false
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/imsety',
        permanent: false
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/imsety',
        permanent: false
      },
      {
        source: '/github',
        destination: 'https://github.com/imse-ty',
        permanent: false
      },
      {
        source: '/rebrand',
        destination: 'v1.imsety.com/projects/2022-rebrand',
        permanent: true
      },
      {
        source: '/blog/:path*',
        destination: 'https://v1.imsety.com/blog/:path*',
        permanent: false
      },
      {
        source: '/connect',
        destination: 'https://blinq.me/OMTQGACGrXU6?bs=db',
        permanent: false
      },
      {
        source: '/blinq',
        destination: 'https://blinq.me/OMTQGACGrXU6?bs=db',
        permanent: false
      },
      {
        source: '/zoom',
        destination: 'https://cal.com/imsety/zoom/',
        permanent: false
      },
      {
        source: '/meet',
        destination: 'https://cal.com/imsety/meet/',
        permanent: false
      },
      {
        source: '/talk',
        destination: 'https://cal.com/imsety/talk/',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
