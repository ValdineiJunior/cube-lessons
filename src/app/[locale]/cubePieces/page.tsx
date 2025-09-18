import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { cubePieceTypes } from "@/data/cubePieceTypes";
import { useTranslations } from "next-intl";

export default function CubePieces() {
  const t = useTranslations("cubePieces");

  return (
    <>
      <PageHeader title={t("title")} description={t("description")} />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubePieceTypes.map((cubePieceType) => (
          <CubeInfoCard3D
            key={cubePieceType.name}
            name={cubePieceType.name}
            colors={cubePieceType.colors}
            description={cubePieceType.description}
          />
        ))}
      </div>
    </>
  );
}
