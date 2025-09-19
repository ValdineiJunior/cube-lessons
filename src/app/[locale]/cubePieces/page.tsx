import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { cubePieceTypes } from "@/data/cubePieceTypes";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CubePieces({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "cubePieces" });

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubePieceTypes.map((cubePieceType) => (
          <CubeInfoCard3D
            key={cubePieceType.key}
            pieceKey={cubePieceType.key}
            colors={cubePieceType.colors}
          />
        ))}
      </div>
    </>
  );
}
