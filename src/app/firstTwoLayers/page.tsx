import { F2lNotation } from "./types";
import { f2lNotations } from "./types";
import { Cube } from "@/components/Cube";

export default function FirstTwoLayers() {
  return (
    <>
      <h1 className="text-3xl">First Two Layers - F2L</h1>
      <p className="py-8">
        O método F2L, abreviação para First Two Layers ou Primeiras Duas
        Camadas, foca na conclusão das primeiras duas camadas do cubo,
        representando dois terços da resolução total. Neste estágio, a abordagem
        difere do método básico ao priorizar a construção simultânea de pares de
        quinas e meios.
      </p>
      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {f2lNotations.map((notation: F2lNotation) => (
          <Cube
            key={notation.case}
            colors={notation.notation.colors}
            moves={notation.notation.moves}
          />
        ))}
      </div>
    </>
  );
}
