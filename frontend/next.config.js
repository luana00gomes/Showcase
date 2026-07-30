/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Showcase',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
}

module.exports = nextConfig
