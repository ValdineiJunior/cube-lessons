import { Cube3D } from "./Cube3D";
import { useTranslations } from "next-intl";

type CubeInfoCard3DProps = {
  pieceKey: string;
  colors: string[][];
  namespace?: "cubePieces.pieces" | "movements.moves";
};

export function CubeInfoCard3D({
  pieceKey,
  colors,
  namespace = "cubePieces.pieces",
}: CubeInfoCard3DProps) {
  const t = useTranslations(namespace);

  return (
    <div className="flex flex-col items-center w-72">
      <Cube3D colors={colors} />
      <div className="w-full text-center mt-2 text-lg">
        {t(`${pieceKey}.name`)}
      </div>
      <div className="w-full text-center mt-2 text-sm">
        {t(`${pieceKey}.description`)}
      </div>
    </div>
  );
}
