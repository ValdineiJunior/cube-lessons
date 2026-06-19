import { PHYSICAL_TO_FACE, type FaceLetter } from "@/types/scramble";
import { SOLVED_FACELETS } from "@/utils/cubeState";

/** F2L diagram faces map to F, U, R in the partial 3-face layout. */
const F2L_FACE_BASES: Record<number, number> = {
  0: 18,
  1: 0,
  2: 9,
};

export function f2lPartialGridToFacelets(grid: string[][]): string {
  const facelets = SOLVED_FACELETS.split("");

  grid.forEach((face, faceIndex) => {
    const base = F2L_FACE_BASES[faceIndex];
    if (base === undefined) return;

    face.forEach((cell, cellIndex) => {
      if (cell === "z") return;
      const faceLetter = PHYSICAL_TO_FACE[cell];
      if (!faceLetter) return;
      facelets[base + cellIndex] = faceLetter;
    });
  });

  return facelets.join("");
}

export function physicalColorToFaceLetter(color: string): FaceLetter | null {
  return PHYSICAL_TO_FACE[color] ?? null;
}
