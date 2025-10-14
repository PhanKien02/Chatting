/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {},
    },
    images: {
        domains: ["i.pravatar.cc", "plus.unsplash.com"],
    },
};

module.exports = nextConfig;
