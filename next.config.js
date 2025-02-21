/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.unsplash.com', // Allows all subdomains of unsplash.com
        },
      ],
    },
  };
  
  export default nextConfig;