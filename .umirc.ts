import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' },
  npmClient: 'npm',
  outputPath: 'out',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
});
