/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/thumb/**',
      },
    ],
  },
};
//localhost:3000/wiki/(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/50px-Flag_of_Bangladesh.svg.png)
http: module.exports = nextConfig;
