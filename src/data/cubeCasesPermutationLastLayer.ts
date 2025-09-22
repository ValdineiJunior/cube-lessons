import { CubeInfo2D } from "@/types/types";

export const cubeCasesPermutationLastLayer: CubeInfo2D[] = [
  {
    name: "Aa",
    group: "Adjacent Corner Swap",

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
    moves: "X L2 D2 L' U' L D2 L' U L'",
  },
  {
    name: "Ab",
    group: "Adjacent Corner Swap",

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
    moves: "X' L2 D2 L U L' D2 L U' L",
  },
  {
    name: "F",
    group: "Adjacent Corner Swap",

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
    moves: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
  },
  {
    name: "Ga",
    group: "Adjacent Corner Swap",

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
    moves: "R2 U R' U R' U' R U' R2 U' D R' U R D'",
  },
  {
    name: "Gb",
    group: "Adjacent Corner Swap",

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
    moves: "R' U' R U D' R2 U R' U R U' R U' R2 D",
  },
  {
    name: "Gc",
    group: "Adjacent Corner Swap",

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
    moves: "R2 U' R U' R U R' U R2 U D' R U' R' D",
  },
  {
    name: "Gd",
    group: "Adjacent Corner Swap",

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
    moves: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
  },
  {
    name: "Ja",
    group: "Adjacent Corner Swap",

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
    moves: "X R2 F R F' R U2 Rw' U Rw U2",
  },
  {
    name: "Jb",
    group: "Adjacent Corner Swap",

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
    moves: "R U R' F' R U R' U' R' F R2 U' R'",
  },
  {
    name: "Ra",

    group: "Adjacent Corner Swap",

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
    moves: "R U' R' U' R U R D R' U' R D' R' U2 R'",
  },
  {
    name: "Rb",

    group: "Adjacent Corner Swap",

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
    moves: "R2 F R U R U' R' F' R U2 R' U2 R",
  },
  {
    name: "T",

    group: "Adjacent Corner Swap",

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
    moves: "R U R' U' R' F R2 U' R' U' R U R' F'",
  },
  {
    name: "E",

    group: "Diagonal Corner Swap",

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
    moves: "X' L' U L D' L' U' L D L' U' L D' L' U L D",
  },
  {
    name: "Na",

    group: "Diagonal Corner Swap",

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
    moves: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
  },
  {
    name: "Nb",

    group: "Diagonal Corner Swap",

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
    moves: "R' U R U' R' F' U' F R U R' F R' F' R U' R",
  },
  {
    name: "V",

    group: "Diagonal Corner Swap",

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
    moves: "R' U R' U' y R' F' R2 U' R' U R' F R F",
  },
  {
    name: "Y",

    group: "Diagonal Corner Swap",

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
    moves: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
  },
  {
    name: "H",

    group: "Edges Only",

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
    moves: "M2 U M2 U2 M2 U M2",
  },
  {
    name: "Ua",

    group: "Edges Only",

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
    moves: "M2 U M U2 M' U M2",
  },
  {
    name: "Ub",

    group: "Edges Only",

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
    moves: "M2 U' M U2 M' U' M2",
  },
  {
    name: "Z",

    group: "Edges Only",

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
    moves: "M' U M2 U M2 U M' U2 M2",
  },
];
