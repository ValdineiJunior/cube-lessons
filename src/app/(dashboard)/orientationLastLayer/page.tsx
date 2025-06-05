import { Notation, ollNotations } from "./types";

/**
 * Square component represents a single piece of the last layer
 * Shows the orientation of the yellow face through borders and background
 */
function Square({ bgColor }: { bgColor: string }) {
  return (
    <div
      data-status={bgColor}
      className={`
        w-full h-full
        border-4
        rounde
        bg-zinc-800
        border-zinc-800
        data-[status=z]:bg-pale-gray
        data-[status=y]:bg-pale-yellow
        data-[status=l]:border-l-pale-yellow
        data-[status=t]:border-t-pale-yellow
        data-[status=r]:border-r-pale-yellow
        data-[status=b]:border-b-pale-yellow
      `}
    />
  );
}

/**
 * Row component represents a row of the last layer
 * Displays the colors and moves for a specific OLL case
 */
function Row({ notation }: { notation: Notation }) {
  return (
    <>
      {notation.colors.map((n, i) => (
        <Square key={i} bgColor={n} />
      ))}
      <div className="col-span-3 justify-self-center">
        {notation.moves.join(" ")}
      </div>
    </>
  );
}

/**
 * CubeOll component displays the last layer of the cube
 * Shows the orientation of pieces and the moves needed to solve the case
 */
function CubeOll({ notation }: { notation: Notation }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 h-52 w-48">
      <Row notation={notation} />
    </div>
  );
}

export default function OrientationLastLayer() {
  return (
    <h1 className=" bg-slate-50 col-span-10 p-6">
      <div>
        <h1 className="text-3xl">Orientation Last Layer - OLL</h1>
        <p className="py-6">
          OLL significa (Orientação da Última Camada), ou seja, é a forma como
          as peças estão orientadas na camada superior do cubo. Nesta etapa, o
          objetivo é resolver todas as peças amarelas no topo do cubo. Após
          completar as duas primeiras camadas, as peças amarelas devem estar em
          uma das 57 situações específicas.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          {ollNotations.map((notation) => (
            <CubeOll key={notation.case} notation={notation.notation} />
          ))}
        </div>
      </div>
    </h1>
  );
}
