/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: isProd,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  output: 'export',
  assetPrefix: isProd ? './' : '',
});
