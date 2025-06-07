import { Notation, ollNotations } from "./types";

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
          <div key={notation.case} className="flex flex-col items-center w-72">
            <div className="grid grid-cols-3 grid-rows-3 h-52 w-52">
              {notation.notation.colors.map((color, i) => (
                <div
                  key={i}
                  data-status={color}
                  className={`
                    w-full h-full
                    border-4
                    rounded
                    bg-zinc-600
                    border-zinc-900
                    ring-1
                    ring-zinc-900
                    data-[status=y]:bg-pale-yellow
                    data-[status=l]:border-l-pale-yellow
                    data-[status=t]:border-t-pale-yellow
                    data-[status=r]:border-r-pale-yellow
                    data-[status=b]:border-b-pale-yellow
                    [&:nth-child(1)]:border-t-8 [&:nth-child(1)]:border-l-8
                    [&:nth-child(2)]:border-t-8
                    [&:nth-child(3)]:border-t-8 [&:nth-child(3)]:border-r-8
                    [&:nth-child(4)]:border-l-8
                    [&:nth-child(6)]:border-r-8
                    [&:nth-child(7)]:border-l-8 [&:nth-child(7)]:border-b-8
                    [&:nth-child(8)]:border-b-8
                    [&:nth-child(9)]:border-b-8 [&:nth-child(9)]:border-r-8
                  `}
                />
              ))}
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
