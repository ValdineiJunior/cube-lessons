import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cube Lessons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        }
      </body>
    </html>
  );
}
