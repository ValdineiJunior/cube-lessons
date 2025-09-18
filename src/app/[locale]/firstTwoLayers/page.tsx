import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesFirstTwoLayers } from "@/data/cubeCasesFirstTwoLayers";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function FirstTwoLayers({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "firstTwoLayers" });

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesFirstTwoLayers.map((cubeCase) => (
          <CubeInfoCard3D
            key={cubeCase.key}
            pieceKey={cubeCase.key}
            colors={cubeCase.colors}
            namespace="firstTwoLayers.cases"
          />
        ))}
      </div>
    </>
  );
}
