module.exports = {
  images: {
    domains: ['cdn.sanity.io']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/rebrand',
        destination: '/projects/2022-rebrand',
        permanent: true
      },
      {
        source: '/batchentry',
        destination: '/projects/batch-logo-challenge',
        permanent: true
      },
      {
        source: '/triumph',
        destination: '/projects/triumph',
        permanent: true
      },
      {
        source: '/settheory',
        destination: 'https://www.youtube.com/playlist?list=PL4GjI-O6-TdLeovUr1W6PgMOOe1aFaKW9',
        permanent: false
      },
      {
        source: '/podcast',
        destination: 'https://youtu.be/gUxNaJ1oyOg',
        permanent: false
      },
      {
        source: '/rebooting',
        destination: 'https://www.instagram.com/reel/CljCpkvt53M/?utm_source=ig_web_copy_link',
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
        source: '/thebreakdown',
        destination: 'https://twitter.com/imse_ty/status/1652085938883887105?s=20',
        permanent: false
      },
            {
        source: '/beeple',
        destination: 'https://twitter.com/imse_ty/status/1652085938883887105?s=20',
        permanent: false
      }
    ];
  }
};
