"use client";

import { SquareColorDetail } from "@/types/types";
import { getColor } from "@/utils/colorUtils";
import { useCubeThemeOptional } from "@/providers/CubeThemeProvider";
import {
  getDefaultPalette,
  resolveStickerStyle,
} from "@/utils/cubeColorStyles";
import type { CubeColor } from "@/types/types";

interface CubeFace2DProps {
  colors: SquareColorDetail[];
}

function borderStyle(
  role: CubeColor,
  palette: ReturnType<typeof getDefaultPalette>,
) {
  return resolveStickerStyle(role, palette).borderColor;
}

export function CubeFace2D({ colors }: CubeFace2DProps) {
  const themeContext = useCubeThemeOptional();
  const palette = themeContext?.palette ?? getDefaultPalette();

  return (
    <div className="grid h-52 w-52 grid-cols-3 grid-rows-3">
      {colors.map((color, i) => {
        const center = resolveStickerStyle(
          getColor(color.centerColor),
          palette,
        );
        const left = borderStyle(getColor(color.leftBorder), palette);
        const top = borderStyle(getColor(color.topBorder), palette);
        const right = borderStyle(getColor(color.rightBorder), palette);
        const bottom = borderStyle(getColor(color.bottomBorder), palette);

        return (
          <div
            key={i}
            className={`
              h-full w-full rounded border-4 ring-1 ring-zinc-900
              [&:nth-child(1)]:border-t-8 [&:nth-child(1)]:border-l-8
              [&:nth-child(2)]:border-t-8
              [&:nth-child(3)]:border-t-8 [&:nth-child(3)]:border-r-8
              [&:nth-child(4)]:border-l-8
              [&:nth-child(6)]:border-r-8
              [&:nth-child(7)]:border-l-8 [&:nth-child(7)]:border-b-8
              [&:nth-child(8)]:border-b-8
              [&:nth-child(9)]:border-b-8 [&:nth-child(9)]:border-r-8
            `}
            style={{
              backgroundColor: center.backgroundColor,
              backgroundImage: center.backgroundImage,
              borderTopColor: top,
              borderLeftColor: left,
              borderRightColor: right,
              borderBottomColor: bottom,
            }}
          />
        );
      })}
    </div>
  );
}
