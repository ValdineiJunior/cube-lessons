import PageHeader from "@/components/layout/PageHeader";
import { Timer } from "@/components/Timer";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TimerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "timer" });
  return (
    <div>
      <PageHeader className="mb-0" title={t("title")} />
      <Timer />
    </div>
  );
}
