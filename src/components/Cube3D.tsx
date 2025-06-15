import { CubeFace3D } from "./CubeFace3D";

interface Cube3DProps {
  colors: string[][];
}

export function Cube3D({ colors }: Cube3DProps) {
  return (
    <div className="relative h-72 w-72">
      <div>
        <div className="absolute h-0 w-0 m-auto left-0 right-0 top-0 bottom-0">
          <CubeFace3D colors={colors[0]} position="left" />
          <CubeFace3D colors={colors[1]} position="right" />
          <CubeFace3D colors={colors[2]} position="top" />
        </div>
      </div>
    </div>
  );
}
