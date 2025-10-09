/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {},
    },
    images: {
        domains: ["i.pravatar.cc"],
    },
};

module.exports = nextConfig;
