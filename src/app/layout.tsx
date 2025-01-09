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
  title: "RAJAN SHARMA",
  description: "rajansharmax",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <Head />
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
