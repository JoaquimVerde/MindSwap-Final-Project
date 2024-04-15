/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL + "/:path* ",
      },
    ];

  },

};

export default nextConfig;
