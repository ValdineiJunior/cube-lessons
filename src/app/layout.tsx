import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cube Lessons",
    template: "%s | Cube Lessons",
  },
  description:
    "Learn to solve the Rubik's Cube with step-by-step tutorials, from basic to advanced.",
  applicationName: "Cube Lessons",
  authors: [{ name: "Cube Lessons" }],
  keywords: [
    "Rubik's Cube",
    "Magic Cube",
    "Cube",
    "F2L",
    "OLL",
    "PLL",
    "speedcubing",
    "algorithms",
    "move notation",
    "tutorial",
    "learning",
  ],
  category: "education",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
