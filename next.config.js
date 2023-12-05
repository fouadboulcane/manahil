/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_NEV === 'production';

const nextConfig = {
    basePath: isProd ? '/manahil' : '',
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
