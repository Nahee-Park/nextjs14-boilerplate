import '@/styles/tailwind.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

import { SiteConfig } from '@/constants/config';

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.url,
  authors: [{ name: SiteConfig.author.name }],
  referrer: 'origin-when-cross-origin',
  creator: SiteConfig.author.name,
  publisher: SiteConfig.author.name,
  metadataBase: new URL(SiteConfig.url),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: '/favicon.ico',
      url: '/favicon.ico',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="kr" suppressHydrationWarning>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          {children}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${SiteConfig.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${SiteConfig.googleAnalyticsId}');
        `}
          </Script>
          <Analytics />
        </body>
      </html>
    </>
  );
}
