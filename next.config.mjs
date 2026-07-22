/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fully static site — exported to /out and served by Apache.
  output: "export",
  // Static export has no image-optimizer server; assets are pre-sized.
  images: { unoptimized: true },
};

export default nextConfig;
