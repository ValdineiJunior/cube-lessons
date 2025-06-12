import { Cube } from "@/components/Cube";

const centerPiece = {
  colors: [
    ["z", "z", "z", "z", "b", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "r", "z", "z", "z", "z"],
    ["z", "z", "z", "z", "y", "z", "z", "z", "z"],
  ],
};

const edgePiece = {
  colors: [
    ["z", "b", "z", "b", "z", "b", "z", "b", "z"],
    ["z", "r", "z", "r", "z", "r", "z", "r", "z"],
    ["z", "y", "z", "y", "z", "y", "z", "y", "z"],
  ],
};

const cornerPiece = {
  colors: [
    ["b", "z", "b", "z", "z", "z", "b", "z", "b"],
    ["r", "z", "r", "z", "z", "z", "r", "z", "r"],
    ["y", "z", "y", "z", "z", "z", "y", "z", "y"],
  ],
};

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
        <div className="flex flex-col items-center w-72">
          <Cube colors={centerPiece.colors} />
          <div className="w-full text-center mt-4">
            <h3 className="text-xl font-semibold mb-2">Centros</h3>
            <p className="text-sm">
              6 peças fixas que definem a cor de cada face. Não podem ser
              movidas de posição.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-72">
          <Cube colors={edgePiece.colors} />
          <div className="w-full text-center mt-4">
            <h3 className="text-xl font-semibold mb-2">Meios</h3>
            <p className="text-sm">
              12 peças com 2 cores. Só podem ser posicionadas entre centros.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-72">
          <Cube colors={cornerPiece.colors} />
          <div className="w-full text-center mt-4">
            <h3 className="text-xl font-semibold mb-2">Quinas</h3>
            <p className="text-sm">
              8 peças com 3 cores, localizadas nos vértices do cubo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
