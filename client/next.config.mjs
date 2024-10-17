/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite cargar imágenes desde cualquier dominio
      },
    ],
  },
  output: 'standalone', // Habilita la salida standalone
};

export default nextConfig;

