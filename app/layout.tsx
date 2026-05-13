import type { Metadata } from 'next';
import { Anton, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'DocPulse - Turn Stale Documentation into Living Code',
  description: 'The drop-in feedback widget that lets your users highlight, report, and suggest fixes for confusing technical docs in seconds.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${anton.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body className="antialiased font-body-md bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
