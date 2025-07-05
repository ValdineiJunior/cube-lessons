import { CubeInfo3D } from "@/types/types";

export const basicMoves: CubeInfo3D[] = [
  {
    name: "R - Direita Horário",
    colors: [
      ["w", "w", "w", "b", "b", "b", "b", "b", "b"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["y", "y", "b", "y", "y", "b", "y", "y", "b"],
    ],
    description: "Movimento da face direita no sentido horário",
  },
  {
    name: "R' - Direita Anti-horário",
    colors: [
      ["y", "y", "y", "b", "b", "b", "b", "b", "b"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["y", "y", "g", "y", "y", "g", "y", "y", "g"],
    ],
    description: "Movimento da face direita no sentido anti-horário",
  },
  {
    name: "R2 - Direita Duplo",
    colors: [
      ["g", "g", "g", "b", "b", "b", "b", "b", "b"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["y", "y", "w", "y", "y", "w", "y", "y", "w"],
    ],
    description: "Movimento da face direita duas vezes",
  },
  {
    name: "L - Esquerda Horário",
    colors: [
      ["b", "b", "b", "b", "b", "b", "y", "y", "y"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["g", "y", "y", "g", "y", "y", "g", "y", "y"],
    ],
    description: "Movimento da face esquerda no sentido horário",
  },
  {
    name: "L' - Esquerda Anti-horário",
    colors: [
      ["b", "b", "b", "b", "b", "b", "w", "w", "w"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["b", "y", "y", "b", "y", "y", "b", "y", "y"],
    ],
    description: "Movimento da face esquerda no sentido anti-horário",
  },
  {
    name: "L2 - Esquerda Duplo",
    colors: [
      ["b", "b", "b", "b", "b", "b", "g", "g", "g"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["w", "y", "y", "w", "y", "y", "w", "y", "y"],
    ],
    description: "Movimento da face esquerda duas vezes",
  },
  {
    name: "U - Topo Horário",
    colors: [
      ["r", "b", "b", "r", "b", "b", "r", "b", "b"],
      ["g", "g", "g", "r", "r", "r", "r", "r", "r"],
      ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
    ],
    description: "Movimento da face superior no sentido horário",
  },
  {
    name: "D - Base Horário",
    colors: [
      ["b", "b", "o", "b", "b", "o", "b", "b", "o"],
      ["r", "r", "r", "r", "r", "r", "b", "b", "b"],
      ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
    ],
    description: "Movimento da face inferior no sentido horário",
  },
  {
    name: "F - Frente Horário",
    colors: [
      ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
      ["y", "r", "r", "y", "r", "r", "y", "r", "r"],
      ["y", "y", "y", "y", "y", "y", "o", "o", "o"],
    ],
    description: "Movimento da face frontal no sentido horário",
  },
  {
    name: "B - Atrás Horário",
    colors: [
      ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
      ["r", "r", "w", "r", "r", "w", "r", "r", "w"],
      ["r", "r", "r", "y", "y", "y", "y", "y", "y"],
    ],
    description: "Movimento da face traseira no sentido horário",
  },
];

export const advancedMoves: CubeInfo3D[] = [
  {
    name: "Uw / u - Topo Duplo Horário",
    colors: [
      ["r", "r", "b", "r", "r", "b", "r", "r", "b"],
      ["g", "g", "g", "g", "g", "g", "r", "r", "r"],
      ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
    ],
    description: "Movimento de duas camadas do topo no sentido horário",
  },
  {
    name: "Fw / f - Frente Duplo Horário",
    colors: [
      ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
      ["y", "y", "r", "y", "y", "r", "y", "y", "r"],
      ["y", "y", "y", "o", "o", "o", "o", "o", "o"],
    ],
    description: "Movimento de duas camadas da face no sentido horário",
  },
  {
    name: "Lw / l - Esquerda Duplo Horário",
    colors: [
      ["b", "b", "b", "y", "y", "y", "y", "y", "y"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["g", "g", "y", "g", "g", "y", "g", "g", "y"],
    ],
    description: "Movimento de duas camadas da esquerda no sentido horário",
  },
  {
    name: "Dw / d - Base Duplo Horário",
    colors: [
      ["b", "o", "o", "b", "o", "o", "b", "o", "o"],
      ["r", "r", "r", "b", "b", "b", "b", "b", "b"],
      ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
    ],
    description: "Movimento de duas camadas da base no sentido horário",
  },
  {
    name: "Rw / r - Direita Duplo Horário",
    colors: [
      ["w", "w", "w", "w", "w", "w", "b", "b", "b"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["y", "b", "b", "y", "b", "b", "y", "b", "b"],
    ],
    description: "Movimento de duas camadas da direita no sentido horário",
  },
  {
    name: "Bw / b - Traseira Duplo Horário",
    colors: [
      ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
      ["r", "w", "w", "r", "w", "w", "r", "w", "w"],
      ["r", "r", "r", "r", "r", "r", "y", "y", "y"],
    ],
    description: "Movimento de duas camadas da traseira no sentido horário",
  },
  {
    name: "M - Meio",
    colors: [
      ["b", "b", "b", "y", "y", "y", "b", "b", "b"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["y", "g", "y", "y", "g", "y", "y", "g", "y"],
    ],
    description: "Movimento da camada do meio no mesmo sentido do L",
  },
  {
    name: "S - Meio",
    colors: [
      ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
      ["r", "y", "r", "r", "y", "r", "r", "y", "r"],
      ["y", "y", "y", "o", "o", "o", "y", "y", "y"],
    ],
    description: "Movimento da camada do meio no mesmo sentido do F",
  },
  {
    name: "X - Cubo Todo",
    colors: [
      ["w", "w", "w", "w", "w", "w", "w", "w", "w"],
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
    ],
    description: "Movimento do cubo todo no mesmo sentido do R",
  },
  {
    name: "Y - Cubo Todo",
    colors: [
      ["r", "r", "r", "r", "r", "r", "r", "r", "r"],
      ["g", "g", "g", "g", "g", "g", "g", "g", "g"],
      ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
    ],
    description: "Movimento do cubo todo no mesmo sentido do U",
  },
  {
    name: "Z - Cubo Todo",
    colors: [
      ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
      ["y", "y", "y", "y", "y", "y", "y", "y", "y"],
      ["o", "o", "o", "o", "o", "o", "o", "o", "o"],
    ],
    description: "Movimento do cubo todo no mesmo sentido do F",
  },
];
