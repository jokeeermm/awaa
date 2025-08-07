import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Agent Platform - Telegram Member Transfer System',
  description: 'Advanced AI-powered platform for automated Telegram member transfers with neural network optimization.',
  keywords: ['AI', 'Telegram', 'Automation', 'Neural Network', 'Member Transfer'],
  authors: [{ name: 'AI Agent Platform' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AI Agent Platform',
    description: 'Advanced AI-powered Telegram member transfer system',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Platform',
    description: 'Advanced AI-powered Telegram member transfer system',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}