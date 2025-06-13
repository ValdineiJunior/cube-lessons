import { Cube } from "@/components/Cube";
import { CubeCase } from "@/types";

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

export default function Movimentos() {
  return (
    <>
      <h1 className="text-3xl">Movimentos Básicos</h1>
      <p className="py-8">
        Para solucionar o Cubo Mágico nós vamos utilizar algumas fórmulas, que
        são sequencias de movimentos que podem ser escritos (traduzidos) com
        letras. Parece muito complexo, mas é extremamente simples e intuitivo.
      </p>
      <p className="py-4">
        Cada lado do cubo é representado pela sua inicial em inglês. Se a letra
        estiver sozinha significa que o movimento é no sentido horário. Se
        estiver acompanhada de um apóstrofo, significa que é no sentido
        anti-horário. E se for seguida do número 2, significa que é um movimento
        duplo.
      </p>

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {movimentosNotations.map((notation: CubeCase) => (
          <Cube
            key={notation.name}
            name={notation.name}
            colors={notation.colors}
            description={notation.description}
          />
        ))}
      </div>
    </>
  );
}
