import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "LSM's 포트폴리오",
  description: '개발자 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
} 