export function generateScramble(): string {
  try {
    // Import cubejs using require
    const Cube = require("cubejs");

    // Initialize the solver (required before using scramble)
    Cube.initSolver();

    // Generate a random scramble using the Cube.scramble() method
    const scramble = Cube.scramble();

    return scramble;
  } catch (error) {
    console.error("Error generating scramble:", error);
    // Fallback to a simple scramble if cubejs fails
    return "R2 U2 F2 U' F2 L2 D' B2 R2 D' R2 U' L' U L R F' D F2 U2 R' U'";
  }
}

export function generateCaseScramble(
  caseMoves: string,
  llRandomMovesCount = 1,
): string {
  try {
    // Import cubejs using require
    const Cube = require("cubejs");

    Cube.initSolver();
    // Inverse the case moves
    const inverseMoves = caseMoves
      .trim()
      .split(/\s+/)
      .reverse()
      .map((move) => {
        if (move.endsWith("'")) return move.replace("'", "");
        if (move.endsWith("2")) return move;
        return move + "'";
      });
    // Generate random LL moves (U, U', U2, D, D', D2, L, L', L2, R, R', R2, F, F', F2, B, B', B2)
    const llMoves = [
      "U",
      "U'",
      "U2",
      "D",
      "D'",
      "D2",
      "L",
      "L'",
      "L2",
      "R",
      "R'",
      "R2",
      "F",
      "F'",
      "F2",
      "B",
      "B'",
      "B2",
    ];
    const randomLL = Array.from(
      { length: llRandomMovesCount },
      () => llMoves[Math.floor(Math.random() * llMoves.length)],
    );
    // Combine: random LL + inverse case moves
    const scramble = [...randomLL, ...inverseMoves].join(" ");
    return scramble;
  } catch (error) {
    console.error("Error generating case scramble:", error);
    return "";
  }
}
