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
                  className={`
                     w-full h-full
                     border-4
                     rounded
                     ring-1
                     ring-zinc-900
                     ${color.centerColor === "gray" ? "bg-zinc-600" : ""}
                     ${color.centerColor === "green" ? "bg-green-500" : ""}
                     ${color.centerColor === "red" ? "bg-red-500" : ""}
                     ${color.centerColor === "blue" ? "bg-blue-500" : ""}
                     ${color.centerColor === "orange" ? "bg-orange-500" : ""}
                     ${color.centerColor === "yellow" ? "bg-pale-yellow" : ""}
                     ${color.leftBorder === "gray" ? "border-l-zinc-900" : ""}
                     ${color.leftBorder === "green" ? "border-l-green-500" : ""}
                     ${color.leftBorder === "red" ? "border-l-red-500" : ""}
                     ${color.leftBorder === "blue" ? "border-l-blue-500" : ""}
                     ${color.leftBorder === "orange" ? "border-l-orange-500" : ""}
                     ${color.leftBorder === "yellow" ? "border-l-pale-yellow" : ""}
                     ${color.topBorder === "gray" ? "border-t-zinc-900" : ""}
                     ${color.topBorder === "green" ? "border-t-green-500" : ""}
                     ${color.topBorder === "red" ? "border-t-red-500" : ""}
                     ${color.topBorder === "blue" ? "border-t-blue-500" : ""}
                     ${color.topBorder === "orange" ? "border-t-orange-500" : ""}
                     ${color.topBorder === "yellow" ? "border-t-pale-yellow" : ""}
                     ${color.rightBorder === "gray" ? "border-r-zinc-900" : ""}
                     ${color.rightBorder === "green" ? "border-r-green-500" : ""}
                     ${color.rightBorder === "red" ? "border-r-red-500" : ""}
                     ${color.rightBorder === "blue" ? "border-r-blue-500" : ""}
                     ${color.rightBorder === "orange" ? "border-r-orange-500" : ""}
                     ${color.rightBorder === "yellow" ? "border-r-pale-yellow" : ""}
                     ${color.bottomBorder === "gray" ? "border-b-zinc-900" : ""}
                     ${color.bottomBorder === "green" ? "border-b-green-500" : ""}
                     ${color.bottomBorder === "red" ? "border-b-red-500" : ""}
                     ${color.bottomBorder === "blue" ? "border-b-blue-500" : ""}
                     ${color.bottomBorder === "orange" ? "border-b-orange-500" : ""}
                     ${color.bottomBorder === "yellow" ? "border-b-pale-yellow" : ""}
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
