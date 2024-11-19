import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BaseLayout from "@/app/components/Layout";
import Head from "@/app/components/Layout/Partials/Head";
import NextTopLoader from "nextjs-toploader";
import Tags from "./components/Layout/Partials/Foot/Tags";
import BootstrapClient from "./components/BootstrapClient/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";
import "@/assets/fonts/remixicon/remixicon.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#25db4a"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={100}
          shadow="0 0 10px #25db4a,0 0 5px #25db4a"
        />
        <BaseLayout>{children}</BaseLayout>
        <Tags />
        <BootstrapClient />
      </body>
    </html>
  );
}
