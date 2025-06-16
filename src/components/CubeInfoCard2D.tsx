import { CubeInfo2D } from "@/types/types";
import { CubeFace2D } from "./CubeFace2D";

type CubeInfoCard2DProps = Omit<CubeInfo2D, "group">;

export function CubeInfoCard2D({ name, colors, moves }: CubeInfoCard2DProps) {
  return (
    <div className="flex flex-col items-center w-72">
      <CubeFace2D colors={colors} />
      <div className="w-full text-center mt-2 text-lg">{name}</div>
      <div className="w-full text-center mt-2 text-sm">{moves}</div>
    </div>
  );
}
