// src/app/layout.tsx

import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Addovedi",
  description:
    "Innovate. Code. Conquer. - A premier tech festival bringing together developers, innovators, and tech enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased bg-navy text-slate-200 font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
