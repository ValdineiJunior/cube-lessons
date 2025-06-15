import { CubeInfo3D } from "@/types/types";
import { Cube3D } from "./Cube3D";

export function CubeInfoCard3D({ name, colors, description }: CubeInfo3D) {
  return (
    <div className="flex flex-col items-center w-72">
      <Cube3D colors={colors} />
      <div className="w-full text-center mt-2 text-lg">{name}</div>
      <div className="w-full text-center mt-2 text-sm">{description}</div>
    </div>
  );
}
