"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Cairo } from "next/font/google";
import "../styles/index.css";

const cairo = Cairo({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="ar" dir="rtl">
      <head>
        <meta property="og:title" content="almaher" />
        <meta
          property="og:description"
          content="almaher | شركة الماهر لتكنولوجيا الأعمال"
        />
        <meta property="og:site_name" content="almaher" />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="en" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${cairo.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
