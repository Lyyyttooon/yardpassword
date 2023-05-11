import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <title>YardPassword</title>
      </head>
      <body className="flex min-h-screen flex-col items-center p-24">{children}</body>
    </html>
  );
}
