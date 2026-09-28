import { Inter, JetBrains_Mono } from 'next/font/google';

// Self-hosted by Next.js at build time: no external requests, no layout shift
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});
