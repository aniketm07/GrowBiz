/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
