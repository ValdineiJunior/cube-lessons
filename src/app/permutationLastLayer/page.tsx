import { CubeFace } from "@/components/CubeFace";
import { casesPermutationLastLayer } from "@/data/permutationLastLayer";

export default function PermutationLastLayer() {
  return (
    <>
      <h1 className="text-3xl">Permutation Last Layer - PLL</h1>
      <p className="py-8">
        PLL significa (Permutação da Última Camada), ou seja, é a forma como as
        peças estão posicionadas na camada superior do cubo. Nesta etapa, o
        objetivo é resolver todas as peças da última camada, mantendo a
        orientação correta. Após completar o OLL, as peças devem estar em uma
        das 21 situações específicas.
      </p>
      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {casesPermutationLastLayer.map((notation) => (
          <CubeFace
            key={notation.name}
            name={notation.name}
            colors={notation.colors}
            moves={notation.moves}
            group={notation.group}
          />
        ))}
      </div>
    </>
  );
}
