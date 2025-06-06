import { Notation as SharedNotation, SquareColors } from "@/types/cube";

/**
 * Represents the possible orientations of yellow pieces in the last layer
 * when viewing the cube from above:
 * - 'l': yellow face is on the left side
 * - 'r': yellow face is on the right side
 * - 't': yellow face is on the top side
 * - 'b': yellow face is on the bottom side
 * - 'y': yellow face is correctly oriented (facing up)
 */
export type YellowOrientation = "l" | "r" | "t" | "b" | "y";

/**
 * Represents a single move in cube notation
 * - Uppercase letters (R, L, U, D, F, B) represent clockwise turns
 * - Lowercase letters (r, l, u, d, f, b) represent double-layer turns
 * - Prime notation (') represents counter-clockwise turns
 * - 2 represents a double turn
 */
export type CubeMove = string;

/**
 * Represents the color configuration of the last layer
 * Array of 9 elements representing the 3x3 grid of the last layer
 * when viewed from above, reading from left to right, top to bottom
 */
export type LastLayerColors = SquareColors[];

/**
 * Represents a complete OLL notation including:
 * - case: unique identifier for the OLL case
 * - number: the standard OLL case number (1-57)
 * - group: category of similar OLL cases (e.g., "Dot", "Cross", "Fish Shape")
 * - notation: the specific moves and color configuration for this case
 */
export interface OllNotation {
  case: string;
  number: number;
  group: string;
  notation: SharedNotation;
}

export type { SharedNotation as Notation };

/**
 * Complete list of OLL notations for all 57 cases
 */
export const ollNotations: OllNotation[] = [
  {
    case: "caseOll1",
    number: 1,
    group: "Dot",
    notation: {
      colors: [
        { leftBorder: "yellow" },
        { topBorder: "yellow" },
        { rightBorder: "yellow" },
        { leftBorder: "yellow" },
        { centerColor: "yellow" },
        { rightBorder: "yellow" },
        { leftBorder: "yellow" },
        { bottomBorder: "yellow" },
        { rightBorder: "yellow" },
      ],
      moves: ["R", "U2", "R2", "F", "R", "F'", "U2", "R'", "F", "R", "F'"],
    },
  },
  {
    case: "caseOll2",
    number: 2,
    group: "Dot",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["r", "U", "r'", "U2", "r", "U2", "R'", "U2", "R", "U'", "r'"],
    },
  },
  {
    case: "caseOll3",
    number: 3,
    group: "Dot",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["r'", "R2", "U", "R'", "U", "r", "U2", "r'", "U", "M'"],
    },
  },
  {
    case: "caseOll4",
    number: 4,
    group: "Dot",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["M", "U'", "r", "U2", "r'", "U'", "R", "U'", "R'", "M'"],
    },
  },
  {
    case: "caseOll5",
    number: 5,
    group: "Square Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["l'", "U2", "L", "U", "L'", "U", "l"],
    },
  },
  {
    case: "caseOll6",
    number: 6,
    group: "Square Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["r", "U2", "R'", "U'", "R", "U'", "r'"],
    },
  },
  {
    case: "caseOll7",
    number: 7,
    group: "Small Lightning Bolt",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["r", "U", "R'", "U", "R", "U2", "r'"],
    },
  },
  {
    case: "caseOll8",
    number: 8,
    group: "Small Lightning Bolt",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["l'", "U'", "L", "U'", "L'", "U2", "l"],
    },
  },
  {
    case: "caseOll9",
    number: 9,
    group: "Fish Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R", "U", "R'", "U'", "R'", "F", "R2", "U", "R'", "U'", "F'"],
    },
  },
  {
    case: "caseOll10",
    number: 10,
    group: "Fish Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["R", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "R'"],
    },
  },
  {
    case: "caseOll11",
    number: 11,
    group: "Small Lightning Bolt",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["r", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "r'"],
    },
  },
  {
    case: "caseOll12",
    number: 12,
    group: "Small Lightning Bolt",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["M'", "R'", "U'", "R", "U'", "R'", "U2", "R", "U'", "R", "r'"],
    },
  },
  {
    case: "caseOll13",
    number: 13,
    group: "Knight Move Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["F", "U", "R", "U'", "R2", "F'", "R", "U", "R", "U'", "R'"],
    },
  },
  {
    case: "caseOll14",
    number: 14,
    group: "Knight Move Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R'", "F", "R", "U", "R'", "F'", "R", "F", "U'", "F'"],
    },
  },
  {
    case: "caseOll15",
    number: 15,
    group: "Knight Move Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["l'", "U'", "l", "L'", "U'", "L", "U", "l'", "U", "l"],
    },
  },
  {
    case: "caseOll16",
    number: 16,
    group: "Knight Move Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["r", "U", "r'", "R", "U", "R'", "U'", "r", "U'", "r'"],
    },
  },
  {
    case: "caseOll17",
    number: 17,
    group: "Dot",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["F", "R'", "F'", "R2", "r'", "U", "R", "U'", "R'", "U'", "M'"],
    },
  },
  {
    case: "caseOll18",
    number: 18,
    group: "Dot",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: [
        "r",
        "U",
        "R'",
        "U",
        "R",
        "U2",
        "r2",
        "U'",
        "R",
        "U'",
        "R'",
        "U2",
        "r",
      ],
    },
  },
  {
    case: "caseOll19",
    number: 19,
    group: "Dot",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["r'", "R", "U", "R", "U", "R'", "U'", "M'", "R'", "F", "R", "F'"],
    },
  },
  {
    case: "caseOll20",
    number: 20,
    group: "Dot",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["r", "U", "R'", "U'", "M2", "U", "R", "U'", "R'", "U'", "M'"],
    },
  },
  {
    case: "caseOll21",
    number: 21,
    group: "Cross",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["R", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "R'"],
    },
  },
  {
    case: "caseOll22",
    number: 22,
    group: "Cross",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["R", "U2", "R2", "U'", "R2", "U'", "R2", "U2", "R"],
    },
  },
  {
    case: "caseOll23",
    number: 23,
    group: "Cross",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R2", "D'", "R", "U2", "R'", "D", "R", "U2", "R"],
    },
  },
  {
    case: "caseOll24",
    number: 24,
    group: "Cross",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["r", "U", "R'", "U'", "r'", "F", "R", "F'"],
    },
  },
  {
    case: "caseOll25",
    number: 25,
    group: "Cross",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["F'", "r", "U", "R'", "U'", "r'", "F", "R"],
    },
  },
  {
    case: "caseOll26",
    number: 26,
    group: "Cross",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["R", "U2", "R'", "U'", "R", "U'", "R'"],
    },
  },
  {
    case: "caseOll27",
    number: 27,
    group: "Cross",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["R", "U", "R'", "U", "R", "U2", "R'"],
    },
  },
  {
    case: "caseOll28",
    number: 28,
    group: "Corners Oriented",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["r", "U", "R'", "U'", "r'", "R", "U", "R", "U'", "R'"],
    },
  },
  {
    case: "caseOll29",
    number: 29,
    group: "Awkward Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: [
        "R",
        "U",
        "R'",
        "U'",
        "R",
        "U'",
        "R'",
        "F'",
        "U'",
        "F",
        "R",
        "U",
        "R'",
      ],
    },
  },
  {
    case: "caseOll30",
    number: 30,
    group: "Awkward Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["F", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F2"],
    },
  },
  {
    case: "caseOll31",
    number: 31,
    group: "P Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R'", "U'", "F", "U", "R", "U'", "R'", "F'", "R"],
    },
  },
  {
    case: "caseOll32",
    number: 32,
    group: "P Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["L", "U", "F'", "U'", "L'", "U", "L", "F", "L'"],
    },
  },
  {
    case: "caseOll33",
    number: 33,
    group: "T Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R", "U", "R'", "U'", "R'", "F", "R", "F'"],
    },
  },
  {
    case: "caseOll34",
    number: 34,
    group: "C Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R", "U", "R2", "U'", "R'", "F", "R", "U", "R", "U'", "F'"],
    },
  },
  {
    case: "caseOll35",
    number: 35,
    group: "Fish Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R", "U2", "R2", "F", "R", "F'", "R", "U2", "R'"],
    },
  },
  {
    case: "caseOll36",
    number: 36,
    group: "W Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["L'", "U'", "L", "U'", "L'", "U", "L", "U", "L", "F'", "L'", "F"],
    },
  },
  {
    case: "caseOll37",
    number: 37,
    group: "Fish Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["F", "R'", "F'", "R", "U", "R", "U'", "R'"],
    },
  },
  {
    case: "caseOll38",
    number: 38,
    group: "W Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["R", "U", "R'", "U", "R", "U'", "R'", "U'", "R'", "F", "R", "F'"],
    },
  },
  {
    case: "caseOll39",
    number: 39,
    group: "Big Lightning Bolt",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["L", "F'", "L'", "U'", "L", "U", "F", "U'", "L'"],
    },
  },
  {
    case: "caseOll40",
    number: 40,
    group: "Big Lightning Bolt",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R'", "F", "R", "U", "R'", "U'", "F'", "U", "R"],
    },
  },
  {
    case: "caseOll41",
    number: 41,
    group: "Awkward Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: [
        "R",
        "U",
        "R'",
        "U",
        "R",
        "U2",
        "R'",
        "F",
        "R",
        "U",
        "R'",
        "U'",
        "F'",
      ],
    },
  },
  {
    case: "caseOll42",
    number: 42,
    group: "Awkward Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: [
        "R'",
        "U'",
        "R",
        "U'",
        "R'",
        "U2",
        "R",
        "F",
        "R",
        "U",
        "R'",
        "U'",
        "F'",
      ],
    },
  },
  {
    case: "caseOll43",
    number: 43,
    group: "P Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["F'", "U'", "L'", "U", "L", "F"],
    },
  },
  {
    case: "caseOll44",
    number: 44,
    group: "P Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["F", "U", "R", "U'", "R'", "F'"],
    },
  },
  {
    case: "caseOll45",
    number: 45,
    group: "T Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["F", "R", "U", "R'", "U'", "F'"],
    },
  },
  {
    case: "caseOll46",
    number: 46,
    group: "C Shape",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["R'", "U'", "R'", "F", "R", "F'", "U", "R"],
    },
  },
  {
    case: "caseOll47",
    number: 47,
    group: "Small L Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["R'", "U'", "R'", "F", "R", "F'", "R'", "F", "R", "F'", "U", "R"],
    },
  },
  {
    case: "caseOll48",
    number: 48,
    group: "Small L Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["F", "R", "U", "R'", "U'", "R", "U", "R'", "U'", "F'"],
    },
  },
  {
    case: "caseOll49",
    number: 49,
    group: "Small L Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["r", "U'", "r2", "U", "r2", "U", "r2", "U'", "r"],
    },
  },
  {
    case: "caseOll50",
    number: 50,
    group: "Small L Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["r'", "U", "r2", "U'", "r2", "U'", "r2", "U", "r'"],
    },
  },
  {
    case: "caseOll51",
    number: 51,
    group: "I Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["F", "U", "R", "U'", "R'", "U", "R", "U'", "R'", "F'"],
    },
  },
  {
    case: "caseOll52",
    number: 52,
    group: "I Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: ["R", "U", "R'", "U", "R", "U'", "B", "U'", "B'", "R'"],
    },
  },
  {
    case: "caseOll53",
    number: 53,
    group: "Small L Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["l'", "U2", "L", "U", "L'", "U'", "L", "U", "L'", "U", "l"],
    },
  },
  {
    case: "caseOll54",
    number: 54,
    group: "Small L Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: ["r", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "r'"],
    },
  },
  {
    case: "caseOll55",
    number: 55,
    group: "I Shape",
    notation: {
      colors: [
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
      ],
      moves: [
        "R'",
        "F",
        "R",
        "U",
        "R",
        "U'",
        "R2",
        "F'",
        "R2",
        "U'",
        "R'",
        "U",
        "R",
        "U",
        "R'",
      ],
    },
  },
  {
    case: "caseOll56",
    number: 56,
    group: "I Shape",
    notation: {
      colors: [
        {
          leftBorder: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          leftBorder: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          rightBorder: "yellow",
        },
      ],
      moves: [
        "r'",
        "U'",
        "r",
        "U'",
        "R'",
        "U",
        "R",
        "U'",
        "R'",
        "U",
        "R",
        "r'",
        "U",
        "r",
      ],
    },
  },
  {
    case: "caseOll57",
    number: 57,
    group: "Corners Oriented",
    notation: {
      colors: [
        {
          centerColor: "yellow",
        },
        {
          topBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          bottomBorder: "yellow",
        },
        {
          centerColor: "yellow",
        },
      ],
      moves: ["R", "U", "R'", "U'", "M'", "U", "R", "U'", "r'"],
    },
  },
];
