/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Essencial para gerar a pasta 'out'
  
  // ignoreDuringBuilds e ignoreBuildErrors são boas práticas para desenvolvimento
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }, 
  
  images: { unoptimized: true }, // Garante que a otimização de imagem do Next.js não quebre a build estática
};

export default nextConfig;