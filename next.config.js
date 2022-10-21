/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2FxZXJsIiwiYSI6ImNsOWZuNXdnZjBncjMzcHJxMzlrdHhkaWUifQ.RoQ1JEhU2exjREKVEF4KGA",
  },
};

module.exports = nextConfig;
