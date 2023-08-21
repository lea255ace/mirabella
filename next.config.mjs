//TODO(MW): This could be moved into .env.production and .env.development?
//          As per: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
const isProd = process.env.NODE_ENV === 'production';
const debugBuild = process.env.BUILD_MODE === 'debug';
const basePath = (isProd & !debugBuild) ? '/<SITE_NAME>' : '';
const prefix = (isProd & !debugBuild) ? '/<SITE_NAME>' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: prefix,
    basePath: basePath,
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
