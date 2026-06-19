"use client";

import type { CubeColor } from "@/types/types";
import { CUBE_COLOR_TO_LEGACY } from "@/types/scramble";
import { useCubeThemeOptional } from "@/providers/CubeThemeProvider";
import {
  getDefaultPalette,
  resolveStickerStyle,
} from "@/utils/cubeColorStyles";

interface CubeFace3DProps {
  colors?: string[];
  themedColors?: CubeColor[];
  position: "left" | "right" | "top";
}

function legacyCodeToRole(code: string): CubeColor {
  switch (code) {
    case "w":
      return "white";
    case "r":
      return "red";
    case "b":
      return "blue";
    case "y":
      return "yellow";
    case "g":
      return "green";
    case "o":
      return "orange";
    default:
      return "gray";
  }
}

export function CubeFace3D({
  colors,
  themedColors,
  position,
}: CubeFace3DProps) {
  const themeContext = useCubeThemeOptional();
  const palette = themeContext?.palette ?? getDefaultPalette();

  const stickers =
    themedColors ?? colors?.map((code) => legacyCodeToRole(code)) ?? [];

  return (
    <div
      className={`relative h-32 w-32 origin-[0_0] ${position} grid grid-cols-3 grid-rows-3`}
    >
      {stickers.map((color, i) => {
        const style = resolveStickerStyle(color, palette);
        return (
          <div
            key={i}
            data-status={
              themedColors ? CUBE_COLOR_TO_LEGACY[color] : colors?.[i]
            }
            className="h-full w-full rounded border-2 border-black"
            style={{
              backgroundColor: style.backgroundColor,
              backgroundImage: style.backgroundImage,
              borderColor: style.borderColor,
            }}
          />
        );
      })}
    </div>
  );
}
