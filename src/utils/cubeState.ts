import Cube from "cubejs";

const FACE_LETTERS = new Set(["U", "R", "F", "D", "L", "B"]);

export const SOLVED_FACELETS =
  "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB";

export function parseFacelets(value: string): string | null {
  if (value.length !== 54) return null;
  for (const char of value) {
    if (!FACE_LETTERS.has(char)) return null;
  }
  return value;
}

export function applyMoves(state: string, moves: string): string {
  const base = parseFacelets(state) ?? SOLVED_FACELETS;
  const cube = Cube.fromString(base);
  cube.move(moves);
  return cube.asString();
}

export function faceletsToFaces(
  state: string,
): Record<"U" | "R" | "F" | "D" | "L" | "B", string[]> {
  const valid = parseFacelets(state) ?? SOLVED_FACELETS;
  return {
    U: valid.slice(0, 9).split(""),
    R: valid.slice(9, 18).split(""),
    F: valid.slice(18, 27).split(""),
    D: valid.slice(27, 36).split(""),
    L: valid.slice(36, 45).split(""),
    B: valid.slice(45, 54).split(""),
  };
}

export function assertFaceletEngine(): boolean {
  const cube = Cube.fromString(SOLVED_FACELETS);
  cube.move("R R'");
  return cube.isSolved();
}
