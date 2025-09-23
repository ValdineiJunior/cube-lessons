import Cube from "cubejs";
import { cubeCasesOrientationLastLayer } from "../data/cubeCasesOrientationLastLayer";
import { cubeCasesPermutationLastLayer } from "@/data/cubeCasesPermutationLastLayer";

let solverInitialized = false;
function initCubeSolver() {
  if (!solverInitialized) {
    Cube.initSolver();
    solverInitialized = true;
  }
}

export function generateScramble(): string {
  try {
    initCubeSolver();
    const scramble = Cube.scramble();
    return scramble;
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
