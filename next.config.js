/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['image.tmdb.org']
  },
  build: {
    target: "linux-x64",
  },
}

module.exports = nextConfig