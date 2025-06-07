import { F2lNotation } from "./types";
import { f2lNotations } from "./types";

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
          <div key={notation.case} className="flex flex-col items-center w-72">
            <div className="relative h-72 w-72">
              <div>
                <div className="absolute h-0 w-0 m-auto left-0 right-0 top-0 bottom-0">
                  <div className="relative h-32 w-32 origin-[0_0] left grid grid-cols-3 grid-rows-3">
                    {notation.notation.colors[0].map((n, i) => (
                      <div
                        data-status={n}
                        className={`
                          w-full h-full
                          border-2
                          border-black
                          rounded
                          bg-zinc-800
                          data-[status=z]:bg-zinc-800
                          data-[status=r]:bg-red-500
                          data-[status=b]:bg-blue-500
                          data-[status=w]:bg-sky-50
                          data-[status=y]:bg-yellow-400
                        `}
                      />
                    ))}
                  </div>
                  <div className="relative h-32 w-32 origin-[0_0] right grid grid-cols-3 grid-rows-3">
                    {notation.notation.colors[1].map((n, i) => (
                      <div
                        data-status={n}
                        className={`
                          w-full h-full
                          border-2
                          border-black
                          rounded
                          bg-zinc-800
                          data-[status=z]:bg-zinc-800
                          data-[status=r]:bg-red-500
                          data-[status=b]:bg-blue-500
                          data-[status=w]:bg-sky-50
                          data-[status=y]:bg-yellow-400
                        `}
                      />
                    ))}
                  </div>
                  <div className="relative h-32 w-32 origin-[0_0] top grid grid-cols-3 grid-rows-3">
                    {notation.notation.colors[2].map((n, i) => (
                      <div
                        data-status={n}
                        className={`
                          w-full h-full
                          border-2
                          border-black
                          rounded
                          bg-zinc-800
                          data-[status=z]:bg-zinc-800
                          data-[status=r]:bg-red-500
                          data-[status=b]:bg-blue-500
                          data-[status=w]:bg-sky-50
                          data-[status=y]:bg-yellow-400
                        `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center mt-2 text-sm">
              {notation.notation.moves.join(" ")}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
