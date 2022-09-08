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
        destination: 'https://youtu.be/H2PSEdEJEYs',
        permanent: false
      }
    ];
  }
};
