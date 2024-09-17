// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:3000/api/v1/:path*', // Proxy to backend
//       },
//     ];
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
