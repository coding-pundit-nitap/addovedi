import "./globals.css";

import { Orbitron } from "next/font/google";

import Navigation from "@/components/Navigation";
import QueryProvider from "@/components/providers/QueryProvider";
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
        <QueryProvider>
          <ViewportVhSetter />
          <Navigation />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
