import { CubeCase } from "./firstTwoLayers";

export const movimentosNotations: CubeCase[] = [
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
