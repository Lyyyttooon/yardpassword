'use client';

import MainMenu from '@/components/main-menu';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>YardPassword</title>
      </head>
      <body className="flex min-h-screen flex-col items-center p-10">
        <MainMenu />
        {children}
      </body>
    </html>
  );
}
