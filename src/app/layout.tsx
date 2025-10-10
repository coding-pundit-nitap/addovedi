import "./globals.css";

import { Orbitron } from "next/font/google";

import Navigation from "@/components/landing/Navigation";
import ViewportVhSetter from "@/components/viewport-setter";

const orbitron = Orbitron({ subsets: ["latin"] });
export const metadata = { title: "Addovedi Tech Fest" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <ViewportVhSetter />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
