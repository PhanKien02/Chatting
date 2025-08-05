/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {},
    },
    images: {
        domains: ["api.dicebear.com", "shadcnblocks.com"],
    },
};

module.exports = nextConfig;
