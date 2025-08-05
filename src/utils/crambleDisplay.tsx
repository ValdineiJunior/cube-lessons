// src/utils/scramble.ts

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
