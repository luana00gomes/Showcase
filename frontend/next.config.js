/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Showcase',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
}

module.exports = nextConfig
