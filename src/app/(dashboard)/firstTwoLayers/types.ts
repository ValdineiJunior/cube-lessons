export type F2lNotation = {
  case: string;
  notation: {
    colors: string[][];
    moves: string[];
  };
};

export const f2lNotations: F2lNotation[] = [
  {
    case: "Caso 01",
    notation: {
      colors: [
        ["b", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "b", "z", "z", "y", "z", "z", "z", "r"],
      ],
      moves: ["R", "U", "R'"],
    },
  },
  {
    case: "Caso 02",
    notation: {
      colors: [
        ["w", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "r", "y", "z", "z", "z", "b"],
      ],
      moves: ["y", "L'", "U'", "L"],
    },
  },
  {
    case: "Caso 03",
    notation: {
      colors: [
        ["b", "z", "z", "b", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "r", "r"],
      ],
      moves: ["y", "U'", "L'", "U", "L"],
    },
  },
  {
    case: "Caso 04",
    notation: {
      colors: [
        ["w", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "r", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "b", "z", "z", "b"],
      ],
      moves: ["U", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 05",
    notation: {
      colors: [
        ["z", "z", "b", "b", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "z", "r", "r", "r", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "r", "z"],
      ],
      moves: ["U", "R", "U'", "R'", "U'", "F'", "U", "F"],
    },
  },
  {
    case: "Caso 06",
    notation: {
      colors: [
        ["z", "z", "b", "z", "b", "b", "z", "b", "b"],
        ["z", "r", "z", "z", "r", "r", "r", "r", "r"],
        ["z", "z", "z", "z", "y", "b", "z", "z", "z"],
      ],
      moves: ["y", "U'", "L'", "U", "L", "U", "F", "U'", "F'"],
    },
  },
  {
    case: "Caso 07",
    notation: {
      colors: [
        ["z", "r", "b", "z", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "b", "r", "r", "r", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "z"],
      ],
      moves: ["R", "U'", "R'", "Dw", "R'", "U2", "R", "U2'", "R'", "U", "R"],
    },
  },
  {
    case: "Caso 08",
    notation: {
      colors: [
        ["b", "b", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "r", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "r"],
      ],
      moves: ["U", "R", "U", "R'", "U2", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 09",
    notation: {
      colors: [
        ["w", "b", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "r", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "b"],
      ],
      moves: ["U'", "R", "U'", "R'", "U2", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 10",
    notation: {
      colors: [
        ["b", "r", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "b", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "r"],
      ],
      moves: ["U2", "R'", "F", "R", "F'", "U2", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 11",
    notation: {
      colors: [
        ["w", "r", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "b", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "b"],
      ],
      moves: ["U'", "R", "U", "R'", "U", "F'", "U'", "F"],
    },
  },
  {
    case: "Caso 12",
    notation: {
      colors: [
        ["r", "b", "z", "z", "b", "b", "z", "b", "b"],
        ["b", "z", "z", "r", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "w"],
      ],
      moves: ["R", "U", "R'", "U'", "R", "U", "R'", "U'", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 13",
    notation: {
      colors: [
        ["r", "r", "z", "z", "b", "b", "z", "b", "b"],
        ["b", "z", "z", "b", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "w"],
      ],
      moves: ["U'", "R'", "F", "R", "F'", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 14",
    notation: {
      colors: [
        ["b", "z", "z", "r", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "b", "r"],
      ],
      moves: ["R", "U'", "R'", "U", "R", "U'", "R'", "U2", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 15",
    notation: {
      colors: [
        ["w", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "b", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "r", "z", "z", "b"],
      ],
      moves: ["U'", "R", "U2", "R'", "U", "F'", "U'", "F"],
    },
  },
  {
    case: "Caso 16",
    notation: {
      colors: [
        ["b", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "r", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "b", "z", "z", "r"],
      ],
      moves: ["U'", "R", "U'", "R'", "U", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 17",
    notation: {
      colors: [
        ["w", "z", "z", "b", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "r", "b"],
      ],
      moves: ["y'", "U", "R'", "U", "R", "U'", "R'", "U'", "R"],
    },
  },
  {
    case: "Caso 18",
    notation: {
      colors: [
        ["b", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "b", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "r", "z", "z", "r"],
      ],
      moves: ["R", "U'", "R'", "U2", "F'", "U'", "F"],
    },
  },
  {
    case: "Caso 19",
    notation: {
      colors: [
        ["w", "z", "z", "r", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "b", "b"],
      ],
      moves: ["R", "U", "R'", "U2", "R", "U'", "R'", "U", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 20",
    notation: {
      colors: [
        ["r", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["b", "r", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "b", "z", "z", "w"],
      ],
      moves: ["R", "U2", "R'", "U'", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 21",
    notation: {
      colors: [
        ["r", "z", "z", "b", "b", "b", "z", "b", "b"],
        ["b", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "r", "w"],
      ],
      moves: ["y'", "R'", "U2", "R", "U", "R'", "U'", "R"],
    },
  },
  {
    case: "Caso 22",
    notation: {
      colors: [
        ["r", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["b", "b", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "r", "z", "z", "w"],
      ],
      moves: ["F", "U", "R", "U'", "R'", "F'", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 23",
    notation: {
      colors: [
        ["r", "z", "z", "r", "b", "b", "z", "b", "b"],
        ["b", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "b", "w"],
      ],
      moves: ["R", "U", "R'", "U2", "R", "U", "R'", "U'", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 24",
    notation: {
      colors: [
        ["z", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["z", "r", "z", "z", "r", "r", "z", "r", "r"],
        ["w", "z", "z", "z", "y", "b", "z", "z", "z"],
      ],
      moves: ["R", "U", "R'", "U", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 25",
    notation: {
      colors: [
        ["z", "z", "z", "b", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["w", "z", "z", "z", "y", "z", "z", "r", "z"],
      ],
      moves: ["y'", "L'", "U'", "L", "U'", "L'", "U", "L"],
    },
  },
  {
    case: "Caso 26",
    notation: {
      colors: [
        ["z", "z", "z", "z", "b", "b", "b", "b", "b"],
        ["z", "r", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "z", "y", "b", "w", "z", "z"],
      ],
      moves: ["R", "U2", "R'", "U", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 27",
    notation: {
      colors: [
        ["z", "z", "z", "b", "b", "b", "z", "b", "b"],
        ["z", "z", "r", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "w", "z", "y", "z", "z", "r", "z"],
      ],
      moves: ["y'", "L'", "U2", "L", "U'", "L'", "U", "L"],
    },
  },
  {
    case: "Caso 28",
    notation: {
      colors: [
        ["z", "z", "w", "z", "b", "b", "z", "b", "b"],
        ["z", "r", "z", "z", "r", "r", "b", "r", "r"],
        ["z", "z", "z", "z", "y", "b", "z", "z", "z"],
      ],
      moves: ["R", "U'", "R'", "U", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 29",
    notation: {
      colors: [
        ["z", "z", "r", "b", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "z", "r", "r", "w", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "r", "z"],
      ],
      moves: ["R", "U", "R'", "U'", "F", "R'", "F'", "R"],
    },
  },
  {
    case: "Caso 30",
    notation: {
      colors: [
        ["z", "z", "r", "z", "b", "b", "z", "b", "b"],
        ["z", "r", "z", "z", "r", "r", "w", "r", "r"],
        ["z", "z", "z", "z", "y", "b", "z", "z", "z"],
      ],
      moves: ["R", "U", "R'", "U'", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 31",
    notation: {
      colors: [
        ["z", "z", "w", "b", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "z", "r", "r", "b", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "r", "z"],
      ],
      moves: ["R'", "F", "R", "F'", "R'", "F", "R", "F'"],
    },
  },
  {
    case: "Caso 32",
    notation: {
      colors: [
        ["z", "b", "r", "z", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "r", "r", "r", "w", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "z"],
      ],
      moves: ["R", "U", "R'", "U2", "R", "U'", "R'", "U", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 33",
    notation: {
      colors: [
        ["z", "b", "w", "z", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "r", "r", "r", "b", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "z"],
      ],
      moves: ["R", "U", "R'", "U'", "R", "U2", "R'", "U'", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 34",
    notation: {
      colors: [
        ["z", "r", "r", "z", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "b", "r", "r", "w", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "z"],
      ],
      moves: ["R", "U'", "R'", "Rw", "U'", "Rw'", "U2", "Rw", "U", "Rw'"],
    },
  },
  {
    case: "Caso 35",
    notation: {
      colors: [
        ["z", "r", "w", "z", "b", "b", "z", "b", "b"],
        ["z", "z", "z", "b", "r", "r", "b", "r", "r"],
        ["z", "z", "z", "z", "y", "z", "z", "z", "z"],
      ],
      moves: ["Rw", "U'", "Rw'", "U2", "Rw", "U", "Rw'", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 36",
    notation: {
      colors: [
        ["b", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "r", "z", "z", "y", "z", "z", "z", "r"],
      ],
      moves: ["Dw", "R'", "U2", "R", "U2", "R'", "U", "R"],
    },
  },
  {
    case: "Caso 37",
    notation: {
      colors: [
        ["w", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "b", "y", "z", "z", "z", "b"],
      ],
      moves: ["U'", "R", "U2", "R'", "U2", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 38",
    notation: {
      colors: [
        ["b", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "r", "y", "z", "z", "z", "r"],
      ],
      moves: ["Dw", "R'", "U'", "R", "U2", "R'", "U", "R"],
    },
  },
  {
    case: "Caso 39",
    notation: {
      colors: [
        ["w", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "b", "z", "z", "y", "z", "z", "z", "b"],
      ],
      moves: ["U'", "R", "U", "R'", "U2", "R", "U'", "R'"],
    },
  },
  {
    case: "Caso 40",
    notation: {
      colors: [
        ["b", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["w", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "z", "z", "b", "y", "z", "z", "z", "r"],
      ],
      moves: ["U'", "R", "U", "R'", "U", "R", "U", "R'"],
    },
  },
  {
    case: "Caso 41",
    notation: {
      colors: [
        ["w", "z", "z", "z", "b", "b", "z", "b", "b"],
        ["r", "z", "z", "z", "r", "r", "z", "r", "r"],
        ["z", "r", "z", "z", "y", "z", "z", "z", "b"],
      ],
      moves: ["U'", "R", "U'", "R'", "U", "F'", "U'", "F"],
    },
  },
];
