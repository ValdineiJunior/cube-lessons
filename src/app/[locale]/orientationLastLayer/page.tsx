import { CubeInfoCard2D } from "@/components/CubeInfoCard2D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesOrientationLastLayer } from "@/data/cubeCasesOrientationLastLayer";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OrientationLastLayer({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "orientationLastLayer",
  });
  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesOrientationLastLayer.map((cubeCase) => (
          <CubeInfoCard2D
            key={cubeCase.name}
            name={cubeCase.name}
            colors={cubeCase.colors}
            moves={cubeCase.moves}
          />
        ))}
      </div>
    </>
  );
}
