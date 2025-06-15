import { CubeInfoCard3D } from "@/components/CubeInfoCard3D";
import { cubePieceTypes } from "@/data/cubePieceTypes";

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
