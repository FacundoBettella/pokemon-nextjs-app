/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"], /* Dominios seguros para ir a recoger imagenes */
  },
};

module.exports = nextConfig;
