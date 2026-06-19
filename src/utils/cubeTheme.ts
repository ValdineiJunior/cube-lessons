import type { CubeColor } from "@/types/types";
import {
  CUBE_COLOR_TO_LEGACY,
  FACE_TO_CUBE_COLOR,
  type FaceLetter,
} from "@/types/scramble";
import { faceletsToFaces } from "@/utils/cubeState";

export type CubeTheme = {
  id: string;
  label: string;
  faces: Record<FaceLetter, CubeColor>;
};

export const WCA_DEFAULT_THEME: CubeTheme = {
  id: "wca-default",
  label: "WCA Default",
  faces: FACE_TO_CUBE_COLOR,
};

export function themeFaceLetter(
  letter: FaceLetter,
  theme: CubeTheme = WCA_DEFAULT_THEME,
): CubeColor {
  return theme.faces[letter];
}

export function faceletsToThemedGrid(
  state: string,
  face: FaceLetter,
  theme: CubeTheme = WCA_DEFAULT_THEME,
): CubeColor[] {
  const faces = faceletsToFaces(state);
  return faces[face].map((letter) =>
    themeFaceLetter(letter as FaceLetter, theme),
  );
}

export function faceletsToSquareColorDetails(
  state: string,
  face: FaceLetter = "U",
  theme: CubeTheme = WCA_DEFAULT_THEME,
) {
  const stickers = faceletsToThemedGrid(state, face, theme);
  return stickers.map((centerColor) => ({ centerColor }));
}

export function faceletsToCube3DFaces(
  state: string,
  theme: CubeTheme = WCA_DEFAULT_THEME,
): string[][] {
  const left = faceletsToThemedGrid(state, "F", theme).map(
    (c) => CUBE_COLOR_TO_LEGACY[c],
  );
  const right = faceletsToThemedGrid(state, "R", theme).map(
    (c) => CUBE_COLOR_TO_LEGACY[c],
  );
  const top = faceletsToThemedGrid(state, "U", theme).map(
    (c) => CUBE_COLOR_TO_LEGACY[c],
  );
  return [left, right, top];
}

export function faceletsToCube3DColors(
  state: string,
  theme: CubeTheme = WCA_DEFAULT_THEME,
): CubeColor[][] {
  return [
    faceletsToThemedGrid(state, "F", theme),
    faceletsToThemedGrid(state, "R", theme),
    faceletsToThemedGrid(state, "U", theme),
  ];
}
