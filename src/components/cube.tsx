import { Row } from './row'

export function Cube() {
  const notations = {
    case1: {
      colors: ['w', 'r', 'o', 'y', 'b', 'g', 'w', 'g', 'w'],
      moves: ['R', 'U', "R'", 'U', 'R', 'U2', "R'"],
    },
  }

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 h-40 w-36">
        <Row notation={notations.case1} />
      </div>
    </>
  )
}
