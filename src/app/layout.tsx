import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

// Define metadata for the application
export const metadata: Metadata = {
  title: "Ta Kontroll Över Din Elkvalitet",
  description: "Ta Kontroll Över Din Elkvalitet - Förbättra din elförbrukning och elkvalitet.",
  metadataBase: new URL('https://same-app.com'),
  icons: {
    icon: '/favicon.svg',
  },
};

// Import the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Define the main layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/fonts/recoleta-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style>
          {`
            @font-face {
              font-family: 'Recoleta';
              src: url('/fonts/recoleta-bold.woff2') format('woff2');
              font-weight: bold;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
