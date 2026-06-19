import type { CubeColor } from "@/types/types";
import { CUBE_COLOR_TO_LEGACY } from "@/types/scramble";

interface CubeFace3DProps {
  colors?: string[];
  themedColors?: CubeColor[];
  position: "left" | "right" | "top";
}

const COLOR_CLASS: Record<CubeColor, string> = {
  gray: "bg-zinc-600",
  red: "bg-red-500",
  blue: "bg-blue-500",
  white: "bg-sky-50",
  yellow: "bg-yellow-400",
  green: "bg-green-500",
  orange: "bg-orange-500",
};

export function CubeFace3D({
  colors,
  themedColors,
  position,
}: CubeFace3DProps) {
  const stickers =
    themedColors ??
    colors?.map((code) => {
      switch (code) {
        case "w":
          return "white" as CubeColor;
        case "r":
          return "red" as CubeColor;
        case "b":
          return "blue" as CubeColor;
        case "y":
          return "yellow" as CubeColor;
        case "g":
          return "green" as CubeColor;
        case "o":
          return "orange" as CubeColor;
        default:
          return "gray" as CubeColor;
      }
    }) ??
    [];

  return (
    <div
      className={`relative h-32 w-32 origin-[0_0] ${position} grid grid-cols-3 grid-rows-3`}
    >
      {stickers.map((color, i) => (
        <div
          key={i}
          data-status={themedColors ? CUBE_COLOR_TO_LEGACY[color] : colors?.[i]}
          className={`
            w-full h-full
            border-2
            border-black
            rounded
            ${COLOR_CLASS[color]}
          `}
        />
      ))}
    </div>
  );
}
