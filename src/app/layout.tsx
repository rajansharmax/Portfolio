import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollTop from "@/components/ScrollTop";
import BaseLayout from "@/components/BaseLayout";
import Head from "@/components/Layout/Head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import siteMetadata from "data/siteMetadata";
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  keywords: siteMetadata.keywords,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <Head />
      <GoogleTagManager gtmId={siteMetadata.analytics.googleAnalytics.googleAnalyticsId} />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        <NextTopLoader
          color="#DE1D8D"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={100}
          shadow="0 0 10px #DE1D8D,0 0 5px #DE1D8D"
        />
        <ScrollTop />
        <ThemeProvider>
          <BaseLayout>
            {children}
          </BaseLayout>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
