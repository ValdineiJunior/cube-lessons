import { CubeInfoCard2D } from "@/components/CubeInfoCard2D";
import { cubeCasesPermutationLastLayer } from "@/data/cubeCasesPermutationLastLayer";

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
        {cubeCasesPermutationLastLayer.map((cubeCase) => (
          <CubeInfoCard2D
            key={cubeCase.name}
            name={cubeCase.name}
            colors={cubeCase.colors}
            moves={cubeCase.moves}
          />
        ))}
      </div>
    </>
  );
}
