// next.config.mjs
/** @type {import('next').NextConfig} */
/** @type {import('next-pwa').PWAConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

const pwaConfig = {
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
};

export default { ...nextConfig, ...pwaConfig };
