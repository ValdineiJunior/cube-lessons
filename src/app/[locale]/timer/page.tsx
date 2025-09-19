import { Timer } from "@/components/Timer";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TimerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Timer />;
}
