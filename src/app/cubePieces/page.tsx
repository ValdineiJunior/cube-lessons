import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import PageHeader from "@/components/layout/PageHeader";
import { cubePieceTypes } from "@/data/cubePieceTypes";

export default function CubePieces() {
  return (
    <>
      <PageHeader
        title="Peças do Cubo"
        description="O Cubo Mágico possui 3 tipos de peças, cada uma com características
        únicas e posições específicas. Conhecer estas peças é fundamental para
        entender os métodos de solução."
      />

      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {cubePieceTypes.map((cubePieceType) => (
          <CubeInfoCard3D
            key={cubePieceType.name}
            name={cubePieceType.name}
            colors={cubePieceType.colors}
            description={cubePieceType.description}
          />
        ))}
      </div>
    </>
  );
}
