'use client';

import MainMenu from '@/components/main-menu';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>YardPassword</title>
      </head>
      <body className="flex h-full flex-row">
        <div className="h-full w-[320px] flex-none mr-[48px]">
          <MainMenu />
        </div>
        <div className="w-full h-full flex-1 pt-[32px]">{children}</div>
      </body>
    </html>
  );
}
