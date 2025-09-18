import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { advancedMoves, basicMoves } from "@/data/moves";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Movements({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "movements" });

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />

      <h2 className="text-2xl text-center py-8">{t("basicMoves")}</h2>

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {basicMoves.map((cubeMove) => (
          <CubeInfoCard3D
            key={cubeMove.key}
            pieceKey={cubeMove.key}
            colors={cubeMove.colors}
            namespace="movements.moves"
          />
        ))}
      </div>

      <h2 className="text-2xl text-center py-8">{t("advancedMoves")}</h2>

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {advancedMoves.map((cubeMove) => (
          <CubeInfoCard3D
            key={cubeMove.key}
            pieceKey={cubeMove.key}
            colors={cubeMove.colors}
            namespace="movements.moves"
          />
        ))}
      </div>
    </>
  );
}
