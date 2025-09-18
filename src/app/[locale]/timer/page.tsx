import { Timer } from "@/components/Timer";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Timer - Cube Lessons",
  description: "Acompanhe seus tempos de resolução do Cubo Mágico",
};

export default async function TimerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Timer />;
}
