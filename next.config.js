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
        destination: 'https://youtu.be/dpKecYGvbww',
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
    ];
  }
};
