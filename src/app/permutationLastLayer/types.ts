import { Notation as SharedNotation, SquareColors } from "@/types/cube";

export type PllCase = {
  case: string;
  name: string;
  group: string;
  notation: SharedNotation;
};

export type { SharedNotation as Notation };

export const pllNotations: PllCase[] = [
  {
    case: "Aa",
    name: "1",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "green",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "blue",
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          rightBorder: "red",
          centerColor: "yellow",
        },
      ],
      moves: ["x", "L2", "D2", "L'", "U'", "L", "D2", "L'", "U", "L'"],
    },
  },
  {
    case: "Ab",
    name: "2",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "blue",
          topBorder: "orange",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "blue",
          bottomBorder: "red",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          rightBorder: "orange",
          centerColor: "yellow",
        },
      ],
      moves: ["x'", "L2", "D2", "L", "U", "L'", "D2", "L", "U'", "L"],
    },
  },
  {
    case: "F",
    name: "3",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R'",
        "U'",
        "F'",
        "R",
        "U",
        "R'",
        "U'",
        "R'",
        "F",
        "R2",
        "U'",
        "R'",
        "U'",
        "R",
        "U",
        "R'",
        "U",
        "R",
      ],
    },
  },
  {
    case: "Ga",
    name: "4",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R2",
        "U",
        "R'",
        "U",
        "R'",
        "U'",
        "R",
        "U'",
        "R2",
        "U'",
        "D",
        "R'",
        "U",
        "R",
        "D'",
      ],
    },
  },
  {
    case: "Gb",
    name: "5",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "orange",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R'",
        "U'",
        "R",
        "U",
        "D'",
        "R2",
        "U",
        "R'",
        "U",
        "R",
        "U'",
        "R",
        "U'",
        "R2",
        "D",
      ],
    },
  },
  {
    case: "Gc",
    name: "6",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "blue",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R2",
        "U'",
        "R",
        "U'",
        "R",
        "U",
        "R'",
        "U",
        "R2",
        "U",
        "D'",
        "R",
        "U'",
        "R'",
        "D",
      ],
    },
  },
  {
    case: "Gd",
    name: "7",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "green",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R",
        "U",
        "R'",
        "U'",
        "D",
        "R2",
        "U'",
        "R",
        "U'",
        "R'",
        "U",
        "R'",
        "U",
        "R2",
        "D'",
      ],
    },
  },
  {
    case: "Ja",
    name: "8",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "green",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: ["x", "R2", "F", "R", "F'", "R", "U2", "r'", "U", "r", "U2"],
    },
  },
  {
    case: "Jb",
    name: "9",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "green",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          rightBorder: "red",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R",
        "U",
        "R'",
        "F'",
        "R",
        "U",
        "R'",
        "U'",
        "R'",
        "F",
        "R2",
        "U'",
        "R'",
      ],
    },
  },
  {
    case: "Ra",
    name: "10",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "green",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          rightBorder: "red",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R",
        "U'",
        "R'",
        "U'",
        "R",
        "U",
        "R",
        "D",
        "R'",
        "U'",
        "R",
        "D'",
        "R'",
        "U2",
        "R'",
      ],
    },
  },
  {
    case: "Rb",
    name: "11",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "blue",
          topBorder: "orange",
          centerColor: "yellow",
        },
        {
          topBorder: "orange",
          centerColor: "yellow",
        },
        {
          rightBorder: "red",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "green",
          centerColor: "yellow",
        },
        {
          leftBorder: "blue",
          bottomBorder: "red",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          rightBorder: "orange",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R2",
        "F",
        "R",
        "U",
        "R",
        "U'",
        "R'",
        "F'",
        "R",
        "U2",
        "R'",
        "U2",
        "R",
      ],
    },
  },
  {
    case: "T",
    name: "12",
    group: "Adjacent Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R",
        "U",
        "R'",
        "U'",
        "R'",
        "F",
        "R2",
        "U'",
        "R'",
        "U'",
        "R",
        "U",
        "R'",
        "F'",
      ],
    },
  },
  {
    case: "E",
    name: "13",
    group: "Diagonal Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "blue",
          topBorder: "orange",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          rightBorder: "green",
          centerColor: "yellow",
        },
      ],
      moves: [
        "x'",
        "L'",
        "U",
        "L",
        "D'",
        "L'",
        "U'",
        "L",
        "D",
        "L'",
        "U'",
        "L",
        "D'",
        "L'",
        "U",
        "L",
        "D",
      ],
    },
  },
  {
    case: "Na",
    name: "14",
    group: "Diagonal Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          bottomBorder: "green",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          rightBorder: "red",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R",
        "U",
        "R'",
        "U",
        "R",
        "U",
        "R'",
        "F'",
        "R",
        "U",
        "R'",
        "U'",
        "R'",
        "F",
        "R2",
        "U'",
        "R'",
        "U2",
        "R",
        "U'",
        "R'",
      ],
    },
  },
  {
    case: "Nb",
    name: "15",
    group: "Diagonal Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "red",
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          rightBorder: "orange",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R'",
        "U",
        "R",
        "U'",
        "R'",
        "F'",
        "U'",
        "F",
        "R",
        "U",
        "R'",
        "F",
        "R'",
        "F'",
        "R",
        "U'",
        "R",
      ],
    },
  },
  {
    case: "V",
    name: "16",
    group: "Diagonal Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "red",
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "green",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          rightBorder: "orange",
          centerColor: "yellow",
        },
      ],
      moves: [
        "R'",
        "U",
        "R'",
        "U'",
        "y",
        "R'",
        "F'",
        "R2",
        "U'",
        "R'",
        "U",
        "R'",
        "F",
        "R",
        "F",
      ],
    },
  },
  {
    case: "Y",
    name: "17",
    group: "Diagonal Corner Swap",
    notation: {
      colors: [
        {
          leftBorder: "red",
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          topBorder: "orange",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          rightBorder: "orange",
          centerColor: "yellow",
        },
      ],
      moves: [
        "F",
        "R",
        "U'",
        "R'",
        "U'",
        "R",
        "U",
        "R'",
        "F'",
        "R",
        "U",
        "R'",
        "U'",
        "R'",
        "F",
        "R",
        "F'",
      ],
    },
  },
  {
    case: "H",
    name: "18",
    group: "Edges Only",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          rightBorder: "red",
          centerColor: "yellow",
        },
      ],
      moves: ["M2", "U", "M2", "U2", "M2", "U", "M2"],
    },
  },
  {
    case: "Ua",
    name: "19",
    group: "Edges Only",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "blue",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "orange",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "red",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          rightBorder: "red",
          centerColor: "yellow",
        },
      ],
      moves: ["M2", "U", "M", "U2", "M'", "U", "M2"],
    },
  },
  {
    case: "Ub",
    name: "20",
    group: "Edges Only",
    notation: {
      colors: [
        {
          leftBorder: "orange",
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          centerColor: "yellow",
        },
        {
          topBorder: "green",
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "red",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          bottomBorder: "blue",
          centerColor: "yellow",
        },
        {
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "blue",
          rightBorder: "red",
          centerColor: "yellow",
        },
      ],
      moves: ["M2", "U'", "M", "U2", "M'", "U'", "M2"],
    },
  },
  {
    case: "Z",
    name: "21",
    group: "Edges Only",
    notation: {
      colors: [
        {
          leftBorder: "green",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          topBorder: "blue",
          centerColor: "yellow",
        },
        {
          rightBorder: "blue",
          topBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "orange",
          centerColor: "yellow",
        },
        {
          centerColor: "yellow",
        },
        {
          rightBorder: "red",
          centerColor: "yellow",
        },
        {
          leftBorder: "green",
          bottomBorder: "orange",
          centerColor: "yellow",
        },
        {
          bottomBorder: "green",
          centerColor: "yellow",
        },
        {
          bottomBorder: "orange",
          rightBorder: "blue",
          centerColor: "yellow",
        },
      ],
      moves: ["M'", "U", "M2", "U", "M2", "U", "M'", "U2", "M2"],
    },
  },
];
