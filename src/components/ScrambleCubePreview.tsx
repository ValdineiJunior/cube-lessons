"use client";

import { Cube3D } from "./Cube3D";
import { useCubeTheme } from "@/providers/CubeThemeProvider";
import { faceletsToCube3DColors } from "@/utils/cubeTheme";
import { scrambleToFacelets } from "@/utils/scrambleVisualization";

interface ScrambleCubePreviewProps {
  moves: string;
}

export function ScrambleCubePreview({ moves }: ScrambleCubePreviewProps) {
  const { theme } = useCubeTheme();
  const facelets = scrambleToFacelets(moves);
  const themedFaces = faceletsToCube3DColors(facelets, theme);

  return (
    <div className="flex flex-col items-center gap-2">
      <Cube3D themedColors={themedFaces} />
    </div>
  );
}
