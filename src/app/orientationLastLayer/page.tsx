import { Notation, ollNotations } from "./types";
import { CubeFace } from "@/components/CubeFace";

export default function OrientationLastLayer() {
  return (
    <>
      <h1 className="text-3xl">Orientation Last Layer - OLL</h1>
      <p className="py-8">
        OLL significa (Orientação da Última Camada), ou seja, é a forma como as
        peças estão orientadas na camada superior do cubo. Nesta etapa, o
        objetivo é resolver todas as peças amarelas no topo do cubo. Após
        completar as duas primeiras camadas, as peças amarelas devem estar em
        uma das 57 situações específicas.
      </p>
      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {ollNotations.map((notation) => (
          <CubeFace key={notation.case} notation={notation.notation} />
        ))}
      </div>
    </>
  );
}
