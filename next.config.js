/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination:
          'https://www.youtube.com/playlist?list=PL4GjI-O6-TdLeovUr1W6PgMOOe1aFaKW9',
        permanent: false
      },
      {
        source: '/podcast',
        destination: 'https://youtu.be/gUxNaJ1oyOg',
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
        destination:
          'https://twitter.com/imse_ty/status/1652085938883887105?s=20',
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
        source: '/projects/:path*',
        destination: 'https://v1.imsety.com/projects/:path*',
        permanent: false
      },
      {
        source: '/blog/:path*',
        destination: 'https://v1.imsety.com/blog/:path*',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
