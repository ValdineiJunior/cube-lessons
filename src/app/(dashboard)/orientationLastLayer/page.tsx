import { CubeOll } from "./cubeOll";

export default function OrientationLastLayer() {
  const notations = [
    {
      case: "caseOll1",
      number: 1,
      group: "Dot",
      notation: {
        colors: ["l", "t", "r", "l", "y", "r", "l", "b", "r"],
        moves: ["R", "U2", "R2", "F", "R", "F'", "U2", "R'", "F", "R", "F'"],
      },
    },
    {
      case: "caseOll2",
      number: 2,
      group: "Dot",
      notation: {
        colors: ["t", "t", "t", "l", "y", "r", "l", "b", "r"],
        moves: ["r", "U", "r'", "U2", "r", "U2", "R'", "U2", "R", "U'", "r'"],
      },
    },
    {
      case: "caseOll3",
      number: 3,
      group: "Dot",
      notation: {
        colors: ["t", "t", "r", "l", "y", "r", "y", "b", "b"],
        moves: ["r'", "R2", "U", "R'", "U", "r", "U2", "r'", "U", "M'"],
      },
    },
    {
      case: "caseOll4",
      number: 4,
      group: "Dot",
      notation: {
        colors: ["l", "t", "t", "l", "y", "r", "b", "b", "y"],
        moves: ["M", "U'", "r", "U2", "r'", "U'", "R", "U'", "R'", "M'"],
      },
    },
    {
      case: "caseOll5",
      number: 5,
      group: "Square Shape",
      notation: {
        colors: ["y", "y", "r", "y", "y", "r", "l", "b", "b"],
        moves: ["l'", "U2", "L", "U", "L'", "U", "l"],
      },
    },
    {
      case: "caseOll6",
      number: 6,
      group: "Square Shape",
      notation: {
        colors: ["l", "y", "y", "l", "y", "y", "b", "b", "r"],
        moves: ["r", "U2", "R'", "U'", "R", "U'", "r'"],
      },
    },
    {
      case: "caseOll7",
      number: 7,
      group: "Small Lightning Bolt",
      notation: {
        colors: ["t", "y", "r", "y", "y", "r", "y", "b", "b"],
        moves: ["r", "U", "R'", "U", "R", "U2", "r'"],
      },
    },
    {
      case: "caseOll8",
      number: 8,
      group: "Small Lightning Bolt",
      notation: {
        colors: ["l", "y", "t", "l", "y", "y", "b", "b", "y"],
        moves: ["l'", "U'", "L", "U'", "L'", "U2", "l"],
      },
    },
    {
      case: "caseOll9",
      number: 9,
      group: "Fish Shape",
      notation: {
        colors: ["l", "y", "t", "y", "y", "r", "b", "b", "y"],
        moves: ["R", "U", "R'", "U'", "R'", "F", "R2", "U", "R'", "U'", "F'"],
      },
    },
    {
      case: "caseOll10",
      number: 10,
      group: "Fish Shape",
      notation: {
        colors: ["t", "t", "y", "y", "y", "r", "l", "b", "b"],
        moves: ["R", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "R'"],
      },
    },
    {
      case: "caseOll11",
      number: 11,
      group: "Small Lightning Bolt",
      notation: {
        colors: ["t", "y", "y", "y", "y", "r", "l", "b", "b"],
        moves: ["r", "U", "R'", "U", "R'", "F", "R", "F'", "R", "U2", "r'"],
      },
    },
    {
      case: "caseOll12",
      number: 12,
      group: "Small Lightning Bolt",
      notation: {
        colors: ["y", "y", "t", "l", "y", "y", "b", "b", "y"],
        moves: ["M'", "R'", "U'", "R", "U'", "R'", "U2", "R", "U'", "R", "r'"],
      },
    },
    {
      case: "caseOll13",
      number: 13,
      group: "Knight Move Shape",
      notation: {
        colors: ["t", "t", "r", "y", "y", "y", "y", "b", "b"],
        moves: ["F", "U", "R", "U'", "R2", "F'", "R", "U", "R", "U'", "R'"],
      },
    },
    {
      case: "caseOll14",
      number: 14,
      group: "Knight Move Shape",
      notation: {
        colors: ["l", "t", "t", "y", "y", "y", "b", "b", "y"],
        moves: ["R'", "F", "R", "U", "R'", "F'", "R", "F", "U'", "F'"],
      },
    },
    {
      case: "caseOll15",
      number: 15,
      group: "Knight Move Shape",
      notation: {
        colors: ["y", "t", "r", "y", "y", "y", "l", "b", "b"],
        moves: ["l'", "U'", "l", "L'", "U'", "L", "U", "l'", "U", "l"],
      },
    },
    {
      case: "caseOll16",
      number: 16,
      group: "Knight Move Shape",
      notation: {
        colors: ["l", "t", "y", "y", "y", "y", "b", "b", "r"],
        moves: ["r", "U", "r'", "R", "U", "R'", "U'", "r", "U'", "r'"],
      },
    },
    {
      case: "caseOll17",
      number: 17,
      group: "Dot",
      notation: {
        colors: ["y", "t", "r", "l", "y", "r", "b", "b", "y"],
        moves: ["F", "R'", "F'", "R2", "r'", "U", "R", "U'", "R'", "U'", "M'"],
      },
    },
    {
      case: "caseOll18",
      number: 18,
      group: "Dot",
      notation: {
        colors: ["y", "t", "y", "l", "y", "r", "b", "b", "b"],
        moves: [
          "r",
          "U",
          "R'",
          "U",
          "R",
          "U2",
          "r2",
          "U'",
          "R",
          "U'",
          "R'",
          "U2",
          "r",
        ],
      },
    },
    {
      case: "caseOll19",
      number: 19,
      group: "Dot",
      notation: {
        colors: ["y", "t", "y", "l", "y", "r", "l", "b", "r"],
        moves: [
          "r'",
          "R",
          "U",
          "R",
          "U",
          "R'",
          "U'",
          "M'",
          "R'",
          "F",
          "R",
          "F'",
        ],
      },
    },
    {
      case: "caseOll20",
      number: 20,
      group: "Dot",
      notation: {
        colors: ["y", "t", "y", "l", "y", "r", "y", "b", "y"],
        moves: ["r", "U", "R'", "U'", "M2", "U", "R", "U'", "R'", "U'", "M'"],
      },
    },
    {
      case: "caseOll21",
      number: 21,
      group: "Cross",
      notation: {
        colors: ["t", "y", "t", "y", "y", "y", "b", "y", "b"],
        moves: ["R", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "R'"],
      },
    },
    {
      case: "caseOll22",
      number: 22,
      group: "Cross",
      notation: {
        colors: ["l", "y", "t", "y", "y", "y", "l", "y", "b"],
        moves: ["R", "U2", "R2", "U'", "R2", "U'", "R2", "U2", "R"],
      },
    },
    {
      case: "caseOll23",
      number: 23,
      group: "Cross",
      notation: {
        colors: ["t", "y", "t", "y", "y", "y", "y", "y", "y"],
        moves: ["R2", "D'", "R", "U2", "R'", "D", "R", "U2", "R"],
      },
    },
    {
      case: "caseOll24",
      number: 24,
      group: "Cross",
      notation: {
        colors: ["t", "y", "y", "y", "y", "y", "b", "y", "y"],
        moves: ["r", "U", "R'", "U'", "r'", "F", "R", "F'"],
      },
    },
    {
      case: "caseOll25",
      number: 25,
      group: "Cross",
      notation: {
        colors: ["l", "y", "y", "y", "y", "y", "y", "y", "b"],
        moves: ["F'", "r", "U", "R'", "U'", "r'", "F", "R"],
      },
    },
    {
      case: "caseOll26",
      number: 26,
      group: "Cross",
      notation: {
        colors: ["l", "y", "y", "y", "y", "y", "b", "y", "r"],
        moves: ["R", "U2", "R'", "U'", "R", "U'", "R'"],
      },
    },
    {
      case: "caseOll27",
      number: 27,
      group: "Cross",
      notation: {
        colors: ["t", "y", "r", "y", "y", "y", "y", "b"],
        moves: ["R", "U", "R'", "U", "R", "U2", "R'"],
      },
    },
    {
      case: "caseOll28",
      number: 28,
      group: "Corners Oriented",
      notation: {
        colors: ["y", "y", "y", "y", "y", "r", "y", "b", "y"],
        moves: ["r", "U", "R'", "U'", "r'", "R", "U", "R", "U'", "R'"],
      },
    },
    {
      case: "caseOll29",
      number: 29,
      group: "Awkward Shape",
      notation: {
        colors: ["t", "y", "y", "y", "y", "r", "b", "b", "y"],
        moves: [
          "R",
          "U",
          "R'",
          "U'",
          "R",
          "U'",
          "R'",
          "F'",
          "U'",
          "F",
          "R",
          "U",
          "R'",
        ],
      },
    },
    {
      case: "caseOll30",
      number: 30,
      group: "Awkward Shape",
      notation: {
        colors: ["l", "y", "r", "y", "y", "r", "y", "b", "y"],
        moves: ["F", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F2"],
      },
    },
    {
      case: "caseOll31",
      number: 31,
      group: "P Shape",
      notation: {
        colors: ["t", "y", "y", "l", "y", "y", "b", "b", "y"],
        moves: ["R'", "U'", "F", "U", "R", "U'", "R'", "F'", "R"],
      },
    },
    {
      case: "caseOll32",
      number: 32,
      group: "P Shape",
      notation: {
        colors: ["y", "y", "t", "y", "y", "r", "y", "b", "b"],
        moves: ["L", "U", "F'", "U'", "L'", "U", "L", "F", "L'"],
      },
    },
    {
      case: "caseOll33",
      number: 33,
      group: "T Shape",
      notation: {
        colors: ["t", "t", "y", "y", "y", "y", "b", "b", "y"],
        moves: ["R", "U", "R'", "U'", "R'", "F", "R", "F'"],
      },
    },
    {
      case: "caseOll34",
      number: 34,
      group: "C Shape",
      notation: {
        colors: ["l", "t", "r", "y", "y", "y", "y", "b", "y"],
        moves: ["R", "U", "R2", "U'", "R'", "F", "R", "U", "R", "U'", "F'"],
      },
    },
    {
      case: "caseOll35",
      number: 35,
      group: "Fish Shape",
      notation: {
        colors: ["y", "t", "r", "l", "y", "y", "b", "y", "y"],
        moves: ["R", "U2", "R2", "F", "R", "F'", "R", "U2", "R'"],
      },
    },
    {
      case: "caseOll36",
      number: 36,
      group: "W Shape",
      notation: {
        colors: ["y", "y", "t", "l", "y", "y", "l", "b", "y"],
        moves: [
          "L'",
          "U'",
          "L",
          "U'",
          "L'",
          "U",
          "L",
          "U",
          "L",
          "F'",
          "L'",
          "F",
        ],
      },
    },
    {
      case: "caseOll37",
      number: 37,
      group: "Fish Shape",
      notation: {
        colors: ["y", "y", "r", "y", "y", "r", "b", "b", "y"],
        moves: ["F", "R'", "F'", "R", "U", "R", "U'", "R'"],
      },
    },
    {
      case: "caseOll38",
      number: 38,
      group: "W Shape",
      notation: {
        colors: ["t", "y", "y", "y", "y", "r", "y", "b", "r"],
        moves: [
          "R",
          "U",
          "R'",
          "U",
          "R",
          "U'",
          "R'",
          "U'",
          "R'",
          "F",
          "R",
          "F'",
        ],
      },
    },
    {
      case: "caseOll39",
      number: 39,
      group: "Big Lightning Bolt",
      notation: {
        colors: ["t", "t", "y", "y", "y", "y", "y", "b", "r"],
        moves: ["L", "F'", "L'", "U'", "L", "U", "F", "U'", "L'"],
      },
    },
    {
      case: "caseOll40",
      number: 40,
      group: "Big Lightning Bolt",
      notation: {
        colors: ["y", "t", "t", "y", "y", "y", "l", "b", "y"],
        moves: ["R'", "F", "R", "U", "R'", "U'", "F'", "U", "R"],
      },
    },
    {
      case: "caseOll41",
      number: 41,
      group: "Awkward Shape",
      notation: {
        colors: ["t", "y", "t", "y", "y", "r", "y", "b", "y"],
        moves: [
          "R",
          "U",
          "R'",
          "U",
          "R",
          "U2",
          "R'",
          "F",
          "R",
          "U",
          "R'",
          "U'",
          "F'",
        ],
      },
    },
    {
      case: "caseOll42",
      number: 42,
      group: "Awkward Shape",
      notation: {
        colors: ["y", "t", "y", "y", "y", "r", "b", "y", "b"],
        moves: [
          "R'",
          "U'",
          "R",
          "U'",
          "R'",
          "U2",
          "R",
          "F",
          "R",
          "U",
          "R'",
          "U'",
          "F'",
        ],
      },
    },
    {
      case: "caseOll43",
      number: 43,
      group: "P Shape",
      notation: {
        colors: ["l", "y", "y", "l", "y", "y", "l", "b", "y"],
        moves: ["F'", "U'", "L'", "U", "L", "F"],
      },
    },
    {
      case: "caseOll44",
      number: 44,
      group: "P Shape",
      notation: {
        colors: ["y", "y", "r", "y", "y", "r", "y", "b", "r"],
        moves: ["F", "U", "R", "U'", "R'", "F'"],
      },
    },
    {
      case: "caseOll45",
      number: 45,
      group: "T Shape",
      notation: {
        colors: ["l", "t", "y", "y", "y", "y", "l", "b", "y"],
        moves: ["F", "R", "U", "R'", "U'", "F'"],
      },
    },
    {
      case: "caseOll46",
      number: 46,
      group: "C Shape",
      notation: {
        colors: ["y", "y", "r", "l", "y", "r", "y", "y", "r"],
        moves: ["R'", "U'", "R'", "F", "R", "F'", "U", "R"],
      },
    },
    {
      case: "caseOll47",
      number: 47,
      group: "Small L Shape",
      notation: {
        colors: ["t", "y", "r", "l", "y", "y", "b", "b", "r"],
        moves: [
          "R'",
          "U'",
          "R'",
          "F",
          "R",
          "F'",
          "R'",
          "F",
          "R",
          "F'",
          "U",
          "R",
        ],
      },
    },
    {
      case: "caseOll48",
      number: 48,
      group: "Small L Shape",
      notation: {
        colors: ["l", "y", "t", "y", "y", "r", "l", "b", "b"],
        moves: ["F", "R", "U", "R'", "U'", "R", "U", "R'", "U'", "F'"],
      },
    },
    {
      case: "caseOll49",
      number: 49,
      group: "Small L Shape",
      notation: {
        colors: ["l", "y", "t", "l", "y", "y", "l", "b", "b"],
        moves: ["r", "U'", "r2", "U", "r2", "U", "r2", "U'", "r"],
      },
    },
    {
      case: "caseOll50",
      number: 50,
      group: "Small L Shape",
      notation: {
        colors: ["l", "t", "t", "l", "y", "y", "l", "y", "b"],
        moves: ["r'", "U", "r2", "U'", "r2", "U'", "r2", "U", "r'"],
      },
    },
    {
      case: "caseOll51",
      number: 51,
      group: "I Shape",
      notation: {
        colors: ["t", "t", "r", "y", "y", "y", "b", "b", "r"],
        moves: ["F", "U", "R", "U'", "R'", "U", "R", "U'", "R'", "F'"],
      },
    },
    {
      case: "caseOll52",
      number: 52,
      group: "I Shape",
      notation: {
        colors: ["t", "y", "r", "l", "y", "r", "b", "y", "r"],
        moves: ["R", "U", "R'", "U", "R", "U'", "B", "U'", "B'", "R'"],
      },
    },
    {
      case: "caseOll53",
      number: 53,
      group: "Small L Shape",
      notation: {
        colors: ["t", "y", "t", "l", "y", "y", "b", "b", "b"],
        moves: ["l'", "U2", "L", "U", "L'", "U'", "L", "U", "L'", "U", "l"],
      },
    },
    {
      case: "caseOll54",
      number: 54,
      group: "Small L Shape",
      notation: {
        colors: ["t", "y", "t", "y", "y", "r", "b", "b", "b"],
        moves: ["r", "U2", "R'", "U'", "R", "U", "R'", "U'", "R", "U'", "r'"],
      },
    },
    {
      case: "caseOll55",
      number: 55,
      group: "I Shape",
      notation: {
        colors: ["t", "t", "t", "y", "y", "y", "b", "b", "b"],
        moves: [
          "R'",
          "F",
          "R",
          "U",
          "R",
          "U'",
          "R2",
          "F'",
          "R2",
          "U'",
          "R'",
          "U",
          "R",
          "U",
          "R'",
        ],
      },
    },
    {
      case: "caseOll56",
      number: 56,
      group: "I Shape",
      notation: {
        colors: ["l", "t", "r", "y", "y", "y", "l", "b", "r"],
        moves: [
          "r'",
          "U'",
          "r",
          "U'",
          "R'",
          "U",
          "R",
          "U'",
          "R'",
          "U",
          "R",
          "r'",
          "U",
          "r",
        ],
      },
    },
    {
      case: "caseOll57",
      number: 57,
      group: "Corners Oriented",
      notation: {
        colors: ["y", "t", "y", "y", "y", "y", "y", "b", "y"],
        moves: ["R", "U", "R'", "U'", "M'", "U", "R", "U'", "r'"],
      },
    },
  ];

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
            <CubeOll key={notation.case} notation={notation.notation} />
          ))}
        </div>
      </div>
    </h1>
  );
}
