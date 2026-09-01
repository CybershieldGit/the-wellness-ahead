/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.1.2',
    '192.168.1.2:3000',
    'localhost:3000',
    'localhost'
  ],
};

export default nextConfig;
