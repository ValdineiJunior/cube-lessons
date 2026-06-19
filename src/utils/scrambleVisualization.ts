import { applyMoves, SOLVED_FACELETS } from "@/utils/cubeState";

export function scrambleToFacelets(moves: string): string {
  return applyMoves(SOLVED_FACELETS, moves);
}
