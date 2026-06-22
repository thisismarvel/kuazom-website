/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Add this line
  // If you are using Next.js images, you might also need:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;