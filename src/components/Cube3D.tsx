import { CubeFace3D } from "./CubeFace3D";
import type { CubeColor } from "@/types/types";

interface Cube3DProps {
  colors?: string[][];
  themedColors?: CubeColor[][];
}

export function Cube3D({ colors, themedColors }: Cube3DProps) {
  return (
    <div className="relative h-72 w-72">
      <div>
        <div className="absolute h-0 w-0 m-auto left-0 right-0 top-0 bottom-0">
          <CubeFace3D
            colors={colors?.[0]}
            themedColors={themedColors?.[0]}
            position="left"
          />
          <CubeFace3D
            colors={colors?.[1]}
            themedColors={themedColors?.[1]}
            position="right"
          />
          <CubeFace3D
            colors={colors?.[2]}
            themedColors={themedColors?.[2]}
            position="top"
          />
        </div>
      </div>
    </div>
  );
}
