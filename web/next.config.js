/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {},
        appDir: true,
    },
    images: {
        domains: ["api.dicebear.com", "shadcnblocks.com"],
    },
};

module.exports = nextConfig;
