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
      }
    ];
  }
};
