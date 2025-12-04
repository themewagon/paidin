import type { NextConfig } from 'next'

const isProd = true;

const basePath = isProd ? '/paidin-nextjs' : ''

const nextConfig: NextConfig = {
    basePath,
    output: 'export',
    images: {
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
}

export default nextConfig
