import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Trend Mama - Best Clothes",
  description: "Trending Mama is the best place to find the best fit for you, for more updates subscribe now",
  keywords: ["shirt", "pants", "shoes", "buy clothes"],
  authors: [{ name: "nafis bin" }],
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://travel-app-xi-two.vercel.app/",
    title: "Trend Mama - Best Clothes",
    description: "Trending Mama is the best place to find the best fit for you, for more updates subscribe now",
    siteName: "Trend Mama",
    images: [
      {
        url: "https://travel-app-xi-two.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tokyaramen",
    creator: "@tokyaramen",
    title: "Trend Mama - Best Clothes",
    description: "Trending Mama is the best place to find the best fit for you, for more updates subscribe now",
    images: ["https://travel-app-xi-two.vercel.app/og.png"],
  },
  // Not directly supported by Next Metadata, so we use "other"
  other: {
    "language": "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
