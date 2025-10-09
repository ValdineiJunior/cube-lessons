import { scramble } from "cube-solver";
import { cubeCasesOrientationLastLayer } from "../data/cubeCasesOrientationLastLayer";
import { cubeCasesPermutationLastLayer } from "@/data/cubeCasesPermutationLastLayer";

export function generateScramble(): string {
  try {
    return scramble("3x3");
  } catch (error) {
    console.error("Error generating scramble:", error);
    return "R2 U2 F2 U' F2 L2 D' B2 R2 D' R2 U' L' U L R F' D F2 U2 R' U'";
  }
}

function getInverseMoves(caseMoves: string): string[] {
  return caseMoves
    .trim()
    .split(/\s+/)
    .reverse()
    .map((move) => {
      if (move.endsWith("'")) return move.replace("'", "");
      if (move.endsWith("2")) return move;
      return move + "'";
    });
}

export function generateF2LCaseScramble(caseMoves: string): string {
  const inverseMoves = getInverseMoves(caseMoves);
  const randomIdx = Math.floor(
    Math.random() * cubeCasesOrientationLastLayer.length,
  );
  const randomCase = cubeCasesOrientationLastLayer[randomIdx];
  const lastLayerMoves = randomCase.moves;
  return [lastLayerMoves, ...inverseMoves].join(" ");
}

export function generateOLLCaseScramble(caseMoves: string): string {
  const inverseMoves = getInverseMoves(caseMoves);
  const randomIdx = Math.floor(
    Math.random() * cubeCasesPermutationLastLayer.length,
  );
  const randomCase = cubeCasesPermutationLastLayer[randomIdx];
  const lastLayerMoves = randomCase.moves;
  return [lastLayerMoves, ...inverseMoves].join(" ");
}

export function generatePLLCaseScramble(caseMoves: string): string {
  const inverseMoves = getInverseMoves(caseMoves);
  return inverseMoves.join(" ");
}
