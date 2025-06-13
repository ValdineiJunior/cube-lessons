import { Cube } from "@/components/Cube";
import { CubeCase } from "@/types";

export const cubePiecesNotations: CubeCase[] = [
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

export default function CubePieces() {
  return (
    <>
      <h1 className="text-3xl">Peças do Cubo</h1>
      <p className="py-8">
        O Cubo Mágico possui 3 tipos de peças, cada uma com características
        únicas e posições específicas. Conhecer estas peças é fundamental para
        entender os métodos de solução.
      </p>

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubePiecesNotations.map((notation: CubeCase) => (
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
