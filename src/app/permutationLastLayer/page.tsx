import { pllNotations } from "./types";

export default function PermutationLastLayer() {
  return (
    <>
      <h1 className="text-3xl">Permutation Last Layer - PLL</h1>
      <p className="py-8">
        PLL, a abreviação de Permutation Last Layer ou Permutação da Última
        Camada, é o estágio onde concluímos a disposição das peças na camada
        superior do cubo, resultando na resolução completa do cubo. Após a
        conclusão da permutação das peças amarelas, é necessário identificar
        dentre os 21 casos possíveis em qual situação específica o seu cubo se
        encontra e, em seguida, aplicar a fórmula correspondente para finalizar
        o processo.
      </p>
      <div className="flex flex-wrap gap-y-8 gap-x-24 justify-center">
        {pllNotations.map((notation) => (
          <div key={notation.case} className="flex flex-col items-center w-72">
            <div className="grid grid-cols-3 grid-rows-3 h-52 w-52">
              {notation.notation.colors.map((color, i) => {
                const [border1, border2] = color.split("-");
                return (
                  <div
                    key={i}
                    data-border1={border1}
                    data-border2={border2}
                    className={`
                      w-full h-full
                      border-4
                      rounded
                      bg-yellow-400
                      border-zinc-900
                      ring-1
                      ring-zinc-900
                      data-[border1=gl]:border-l-green-500
                      data-[border1=gt]:border-t-green-500
                      data-[border1=gr]:border-r-green-500
                      data-[border1=gb]:border-b-green-500
                      data-[border1=rl]:border-l-red-500
                      data-[border1=rt]:border-t-red-500
                      data-[border1=rr]:border-r-red-500
                      data-[border1=rb]:border-b-red-500
                      data-[border1=bl]:border-l-blue-500
                      data-[border1=bt]:border-t-blue-500
                      data-[border1=br]:border-r-blue-500
                      data-[border1=bb]:border-b-blue-500
                      data-[border1=ol]:border-l-orange-500
                      data-[border1=ot]:border-t-orange-500
                      data-[border1=or]:border-r-orange-500
                      data-[border1=ob]:border-b-orange-500
                      data-[border2=gl]:border-l-green-500
                      data-[border2=gt]:border-t-green-500
                      data-[border2=gr]:border-r-green-500
                      data-[border2=gb]:border-b-green-500
                      data-[border2=rl]:border-l-red-500
                      data-[border2=rt]:border-t-red-500
                      data-[border2=rr]:border-r-red-500
                      data-[border2=rb]:border-b-red-500
                      data-[border2=bl]:border-l-blue-500
                      data-[border2=bt]:border-t-blue-500
                      data-[border2=br]:border-r-blue-500
                      data-[border2=bb]:border-b-blue-500
                      data-[border2=ol]:border-l-orange-500
                      data-[border2=ot]:border-t-orange-500
                      data-[border2=or]:border-r-orange-500
                      data-[border2=ob]:border-b-orange-500
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
                );
              })}
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
