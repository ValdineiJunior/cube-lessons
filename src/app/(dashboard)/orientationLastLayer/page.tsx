import { Cube } from '@/components/cube'

export default function OrientationLastLayer() {
  const notations = [
    {
      case: 'caseOll1',
      notation: {
        colors: ['t', 'y', 'r', 'y', 'y', 'y', 'y', 'y', 'b'],
        moves: ['R', 'U', "R'", 'U', 'R', 'U2', "R'"],
      },
    },
    {
      case: 'caseOll2',
      notation: {
        colors: ['y', 'y', 't', 'y', 'y', 'y', 'b', 'y', 'r'],
        moves: ["R'", "U'", 'R', "U'", "R'", 'U2', 'R'],
      },
    },
    {
      case: 'caseOll3',
      notation: {
        colors: ['l', 'y', 'r', 'y', 'y', 'y', 'l', 'y', 'r'],
        moves: ['R', 'U', "R'", 'U', 'R', "U'", "R'", 'U', 'R', 'U2', "R'"],
      },
    },
    {
      case: 'caseOll4',
      notation: {
        colors: ['l', 'y', 't', 'y', 'y', 'y', 'l', 'y', 'b'],
        moves: ['R', 'U2', 'R2', "U'", 'R2', "U'", 'R2', 'U2', 'R'],
      },
    },
    {
      case: 'caseOll5',
      notation: {
        colors: ['y', 'y', 't', 'y', 'y', 'y', 'y', 'y', 'b'],
        moves: ["R'", "F'", 'L', 'F', 'R', "F'", "L'", 'F'],
      },
    },
    {
      case: 'caseOll6',
      notation: {
        colors: ['t', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'r'],
        moves: ['Rw', 'U', 'R', "U'", "L'", 'U', "R'", "U'"],
      },
    },
    {
      case: 'caseOll7',
      notation: {
        colors: ['t', 'y', 't', 'y', 'y', 'y', 'y', 'y', 'y'],
        moves: ['R2', "D'", 'R', 'U2', "R'", 'D', 'R', 'U2', 'R'],
      },
    },
  ]

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
          {notations.map((notation) => (
            <Cube key={notation.case} notation={notation.notation} />
          ))}
        </div>
      </div>
    </h1>
  )
}
