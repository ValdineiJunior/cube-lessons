import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import { cubeCasesFirstTwoLayers } from "@/data/cubeCasesFirstTwoLayers";

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
        {cubeCasesFirstTwoLayers.map((cubeCase) => (
          <CubeInfoCard3D
            key={cubeCase.name}
            name={cubeCase.name}
            colors={cubeCase.colors}
            description={cubeCase.description}
          />
        ))}
      </div>
    </>
  );
}
