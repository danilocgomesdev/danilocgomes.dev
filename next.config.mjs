/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/danilocgomes.dev',    // caminho do repositório no GitHub Pages
  assetPrefix: '/danilocgomes.dev/', // essencial para JS/CSS
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
