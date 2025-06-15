import { CubeCase2D } from "@/types/types";
import { CubeFaceGrid } from "./CubeFaceGrid";

type CubeFaceContainerProps = Omit<CubeCase2D, "group">;

export function CubeFaceContainer({
  name,
  colors,
  moves,
}: CubeFaceContainerProps) {
  return (
    <div className="flex flex-col items-center w-72">
      <CubeFaceGrid colors={colors} />
      <div className="w-full text-center mt-2 text-lg">{name}</div>
      <div className="w-full text-center mt-2 text-sm">{moves.join(" ")}</div>
    </div>
  );
}
