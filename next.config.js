/** @type {import('next').NextConfig} */

const NEXT_IPFS_GATEWAY = process.env.NEXT_IPFS_GATEWAY || "https://ipfs.infura.io/ipfs/";

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_IPFS_GATEWAY,
    TITLE: process.env.APP_TITLE || "The Odd Dystrict",
  },
  images: {
    domains: [new URL(NEXT_IPFS_GATEWAY).hostname],
  },
}

module.exports = nextConfig
