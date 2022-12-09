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
        destination: 'https://www.youtube.com/channel/UCovWMiX2_Kno3ODMDZvmKUA',
        permanent: false
      },
      {
        source: '/podcast',
        destination: 'https://youtu.be/JIOTd-ClM_8',
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
