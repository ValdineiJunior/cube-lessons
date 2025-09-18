import { CubeInfoCard2D } from "@/components/CubeInfoCard2D";
import PageHeader from "@/components/layout/PageHeader";
import { cubeCasesOrientationLastLayer } from "@/data/cubeCasesOrientationLastLayer";

export default function OrientationLastLayer() {
  return (
    <>
      <PageHeader
        title="Orientation Last Layer - OLL"
        description=" OLL significa (Orientação da Última Camada), ou seja, é a forma como as
        peças estão orientadas na camada superior do cubo. Nesta etapa, o
        objetivo é resolver todas as peças amarelas no topo do cubo. Após
        completar as duas primeiras camadas, as peças amarelas devem estar em
        uma das 57 situações específicas."
      />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubeCasesOrientationLastLayer.map((cubeCase) => (
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
