import { CubeCase3D } from "@/types";

export const cubePieceTypes: CubeCase3D[] = [
  {
    name: "Centros",
    colors: [
      ["z", "z", "z", "z", "b", "z", "z", "z", "z"],
      ["z", "z", "z", "z", "r", "z", "z", "z", "z"],
      ["z", "z", "z", "z", "y", "z", "z", "z", "z"],
    ],
    description:
      "6 peças fixas que definem a cor de cada face. Não podem ser movidas de posição.",
  },
  {
    name: "Meios",
    colors: [
      ["z", "b", "z", "b", "z", "b", "z", "b", "z"],
      ["z", "r", "z", "r", "z", "r", "z", "r", "z"],
      ["z", "y", "z", "y", "z", "y", "z", "y", "z"],
    ],
    description:
      "12 peças com 2 cores. Só podem ser posicionadas entre centros.",
  },
  {
    name: "Quinas",
    colors: [
      ["b", "z", "b", "z", "z", "z", "b", "z", "b"],
      ["r", "z", "r", "z", "z", "z", "r", "z", "r"],
      ["y", "z", "y", "z", "z", "z", "y", "z", "y"],
    ],
    description: "8 peças com 3 cores, localizadas nos vértices do cubo.",
  },
];
