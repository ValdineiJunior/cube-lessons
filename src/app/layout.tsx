import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cube Lessons",
    template: "%s | Cube Lessons",
  },
  description:
    "Aprenda a resolver o Cubo Mágico com tutoriais passo a passo, do básico ao avançado.",
  applicationName: "Cube Lessons",
  authors: [{ name: "Cube Lessons" }],
  keywords: [
    "Cubo Mágico",
    "Cubo de Rubik",
    "Rubik's Cube",
    "F2L",
    "OLL",
    "PLL",
    "speedcubing",
    "algoritmos",
    "notação de movimentos",
    "tutorial",
    "aprendizado",
  ],
  category: "education",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Cube Lessons",
    title: "Cube Lessons",
    description:
      "Aprenda a resolver o Cubo Mágico com tutoriais passo a passo, do básico ao avançado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cube Lessons",
    description:
      "Aprenda a resolver o Cubo Mágico com tutoriais passo a passo, do básico ao avançado.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
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
