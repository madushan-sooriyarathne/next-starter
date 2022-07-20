/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [] // allow images to be loaded from other domains
  },
  webpack: (config, {isServer}) => {
    if(isServer) {
      // require(require("path").join(process.cwd(), "utils/process-static-files"))
      // Run this script only on the server
    }

    return config;
  }
}

module.exports = nextConfig
