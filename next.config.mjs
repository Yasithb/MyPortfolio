/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Generate a static export (replaces the old `next export` command)
  output: 'export',

  // ✅ Prevent Next.js from using server-side image optimization
  images: {
    unoptimized: true,
  },

  // ✅ If your site is deployed to a subpath like `https://username.github.io/portfolio`
  // set basePath: '/portfolio'
  // otherwise, leave it empty
  basePath: '',

  // Optional: ensure assets resolve correctly
  assetPrefix: '',

  // Optional: disable React strict mode if you had hydration issues
  reactStrictMode: true,
};

export default nextConfig;
