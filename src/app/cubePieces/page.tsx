import { Cube } from "@/components/Cube";
import { cubePiecesNotations } from "@/types";

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
        {cubePiecesNotations.map((notation) => (
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
