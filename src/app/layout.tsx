import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const revalidate = 1

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Image gallery created by Joe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
