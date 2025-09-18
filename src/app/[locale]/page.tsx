import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Cube Lessons - Learn the Rubik's Cube",
  description:
    "Learn to solve the Rubik's Cube with step-by-step tutorials, from basic to advanced.",
};

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <PageHeader title={t("title")} description={t("description")} />
      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
        <Link
          href="/firstTwoLayers"
          aria-label={t("features.f2l.ariaLabel")}
          className="block h-full"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
            <CardHeader>
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <CardTitle className="text-xl">
                {t("features.f2l.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("features.f2l.description")}</p>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="/orientationLastLayer"
          aria-label={t("features.oll.ariaLabel")}
          className="block h-full"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
            <CardHeader>
              <div className="text-blue-600 text-4xl mb-4">✨</div>
              <CardTitle className="text-xl">
                {t("features.oll.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("features.oll.description")}</p>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="/permutationLastLayer"
          aria-label={t("features.pll.ariaLabel")}
          className="block h-full"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
            <CardHeader>
              <div className="text-blue-600 text-4xl mb-4">🎨</div>
              <CardTitle className="text-xl">
                {t("features.pll.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("features.pll.description")}</p>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="/cubePieces"
          aria-label={t("features.cubePieces.ariaLabel")}
          className="block h-full"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
            <CardHeader>
              <div className="text-blue-600 text-4xl mb-4">🧩</div>
              <CardTitle className="text-xl">
                {t("features.cubePieces.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t("features.cubePieces.description")}
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="/movements"
          aria-label={t("features.movements.ariaLabel")}
          className="block h-full"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
            <CardHeader>
              <div className="text-blue-600 text-4xl mb-4">🔄</div>
              <CardTitle className="text-xl">
                {t("features.movements.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {t("features.movements.description")}
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link
          href="/timer"
          aria-label={t("features.timer.ariaLabel")}
          className="block h-full"
        >
          <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
            <CardHeader>
              <div className="text-blue-600 text-4xl mb-4">⏱️</div>
              <CardTitle className="text-xl">
                {t("features.timer.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t("features.timer.description")}</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
